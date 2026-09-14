"use client";

import Script from "next/script";
import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  CONSENT_COOKIE_MAX_AGE_SECONDS,
  CONSENT_COOKIE_NAME,
  serializeConsentCookie,
  type VisitorIdChoice,
  type VisitorIdStatus,
} from "@/lib/consent";

const GETLEADS_PIXEL_SRC =
  "https://id.getleads.io/pixels/8dc5e76d-81d7-4781-b1d6-3b585fc86382/p.js";
const GETLEADS_PIXEL_KEY = "8dc5e76d-81d7-4781-b1d6-3b585fc86382";

const KNOWN_GETLEADS_COOKIE_NAMES = [
  "_delivr",
  "_delivr_id",
  "delivr",
  "delivr_id",
  "dlvr",
  "_dlvr",
  "sitelytics",
  "_sitelytics",
  "getleads",
  "_getleads",
];

const GETLEADS_COOKIE_NAME_PATTERN = /getleads|delivr|sitelytics|dlvr/i;

const bannerButtonClassName =
  "inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full border border-border-strong bg-background px-4 text-sm font-medium leading-none text-foreground transition-colors hover:bg-background-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background";

type ConsentContextValue = {
  bannerOpen: boolean;
  openSettings: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

function writeConsentCookie(visitorId: VisitorIdChoice) {
  document.cookie = `${CONSENT_COOKIE_NAME}=${serializeConsentCookie(visitorId)}; Max-Age=${CONSENT_COOKIE_MAX_AGE_SECONDS}; Path=/; SameSite=Lax; Secure`;
}

function readCookieNames() {
  if (!document.cookie) {
    return [];
  }

  return document.cookie
    .split(";")
    .map((part) => part.split("=")[0]?.trim() ?? "")
    .filter(Boolean);
}

function expireCookie(name: string) {
  const expires = "Thu, 01 Jan 1970 00:00:00 GMT";
  const encodedName = encodeURIComponent(name);
  const variants = [
    `${encodedName}=; Max-Age=0; Expires=${expires}; Path=/; SameSite=Lax; Secure`,
    `${encodedName}=; Max-Age=0; Expires=${expires}; Path=/; SameSite=Lax`,
  ];
  const host = window.location.hostname;

  variants.push(
    `${encodedName}=; Max-Age=0; Expires=${expires}; Path=/; Domain=${host}; SameSite=Lax; Secure`,
    `${encodedName}=; Max-Age=0; Expires=${expires}; Path=/; Domain=${host}; SameSite=Lax`,
  );

  if (host.startsWith("www.")) {
    const parent = host.slice(host.indexOf("."));
    variants.push(
      `${encodedName}=; Max-Age=0; Expires=${expires}; Path=/; Domain=${parent}; SameSite=Lax; Secure`,
      `${encodedName}=; Max-Age=0; Expires=${expires}; Path=/; Domain=${parent}; SameSite=Lax`,
    );
  }

  for (const cookie of variants) {
    document.cookie = cookie;
  }
}

function deleteKnownGetLeadsCookies() {
  const names = new Set([
    ...KNOWN_GETLEADS_COOKIE_NAMES,
    ...readCookieNames().filter((name) => GETLEADS_COOKIE_NAME_PATTERN.test(name)),
  ]);

  names.delete(CONSENT_COOKIE_NAME);

  for (const name of names) {
    expireCookie(name);
  }
}

function GetLeadsPixel() {
  return (
    <Script
      id="getleads-pixel"
      src={GETLEADS_PIXEL_SRC}
      strategy="afterInteractive"
      data-key={GETLEADS_PIXEL_KEY}
    />
  );
}

function VisitorIdBanner({
  onAllow,
  onDeny,
}: {
  onAllow: () => void;
  onDeny: () => void;
}) {
  return (
    <section
      id="visitor-id-consent-banner"
      role="region"
      aria-label="Toestemming voor bezoekersherkenning"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border-light bg-background"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 sm:py-5 md:flex-row md:items-end md:justify-between md:gap-8 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="text-base font-medium leading-snug text-foreground">
            Mogen we herkennen van welke organisatie je komt?
          </h2>
          <p className="mt-2 text-sm leading-6 text-foreground-secondary">
            Met je toestemming gebruiken we GetLeads. Dat kan herkennen van
            welke organisatie je bezoek komt en soms wie je bent, zoals je naam,
            zakelijk e-mailadres en functie. We gebruiken dit om contact met je
            op te nemen. Zonder toestemming werkt de site gewoon. Lees meer in
            ons{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              privacybeleid
            </Link>
            .
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:w-80 md:shrink-0">
          <button
            type="button"
            className={bannerButtonClassName}
            onClick={onAllow}
          >
            Toestaan
          </button>
          <button
            type="button"
            className={bannerButtonClassName}
            onClick={onDeny}
          >
            Niet toestaan
          </button>
        </div>
      </div>
    </section>
  );
}

export function GetLeadsConsent({
  children,
  initialVisitorId,
}: {
  children: ReactNode;
  initialVisitorId: VisitorIdStatus;
}) {
  const [visitorId, setVisitorId] = useState<VisitorIdStatus>(initialVisitorId);
  const [bannerOpen, setBannerOpen] = useState(initialVisitorId === null);

  const openSettings = useCallback(() => {
    setBannerOpen(true);
  }, []);

  const choose = useCallback(
    (next: VisitorIdChoice) => {
      const previous = visitorId;
      writeConsentCookie(next);

      if (previous === "granted" && next === "denied") {
        deleteKnownGetLeadsCookies();
        window.location.reload();
        return;
      }

      setVisitorId(next);
      setBannerOpen(false);
    },
    [visitorId],
  );

  const value = useMemo(
    () => ({
      bannerOpen,
      openSettings,
    }),
    [bannerOpen, openSettings],
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {visitorId === "granted" ? <GetLeadsPixel /> : null}
      {bannerOpen ? (
        <VisitorIdBanner
          onAllow={() => choose("granted")}
          onDeny={() => choose("denied")}
        />
      ) : null}
    </ConsentContext.Provider>
  );
}

export function CookieSettingsButton() {
  const consent = useContext(ConsentContext);

  if (!consent) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={consent.openSettings}
      aria-expanded={consent.bannerOpen}
      aria-controls="visitor-id-consent-banner"
      className="cursor-pointer border-0 bg-transparent p-0 font-inherit text-left text-inherit transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      Cookie-instellingen
    </button>
  );
}
