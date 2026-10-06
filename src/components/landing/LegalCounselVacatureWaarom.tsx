import Link from "next/link";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const reasons = [
  {
    index: "001",
    title: "Alleen legal",
    body: "We werven geen finance of IT erbij. Onze aandacht zit bij legal counsel, bedrijfsjuristen en legal teams, en bij de cultuur waarin zij terechtkomen.",
  },
  {
    index: "002",
    title: "Persoonlijk, niet via een database",
    body: "Kennismaking eerst, matching daarna. Geen massa-mailing met losse vacatures. We stellen je alleen voor als de rol past bij wat we hebben besproken.",
  },
  {
    index: "003",
    title: "Tweezijdig, dus scherper",
    body: "Omdat we opdrachtgevers en kandidaten kennen, merken we sneller of een overstap past: inhoudelijk, cultureel en qua tempo.",
  },
  {
    index: "004",
    title: "Landelijk, korte lijnen",
    body: "Onze basis is Nijmegen; we werken landelijk in Nederland. Een gesprek kan telefonisch, digitaal of op locatie. Voor jou als kandidaat is het kosteloos.",
  },
];

const linkClassName =
  "font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

export function LegalCounselVacatureWaarom() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SlashPill>/ WAAROM LEGAL TALENTS</SlashPill>
            <h2 className="display-md mt-8">
              Specialist in legal search.{" "}
              <span className="block">Discreet aan twee kanten.</span>
            </h2>
            <p className="mt-12 text-[18px] leading-[1.5] text-foreground-secondary">
              Legal Talents is een compact bureau van mensen met een juridische
              achtergrond. We beloven geen cijfers, wel een werkwijze:
              kwaliteit, discretie en een match voor de lange termijn.
            </p>
            <p className="mt-6 text-[16px] leading-[1.6] text-foreground-muted">
              Wat je mag verwachten: een uitgebreid gesprek vooraf, context bij
              elke legal counsel-rol en begeleiding tot na de eerste werkdag.
              Hoe dat eruitziet voor kandidaten staat op{" "}
              <Link href="/voor-kandidaten" className={linkClassName}>
                voor kandidaten
              </Link>
              . Organisaties die breder willen kijken dan één profiel:{" "}
              <Link href="/juridisch-recruiter" className={linkClassName}>
                juridisch recruiter
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-y-6">
            {reasons.map((reason) => (
              <article
                key={reason.index}
                className="rounded-2xl bg-background p-8"
              >
                <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                  / {reason.index}
                </p>
                <h3 className="display-h3 mt-5">{reason.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.6] text-foreground-secondary">
                  {reason.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
