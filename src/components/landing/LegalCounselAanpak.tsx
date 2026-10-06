import Link from "next/link";
import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function LegalCounselAanpak() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ AANPAK</SlashPill>
          <h2 className="display-md mt-8">
            Hoe wij legal <br />
            counsels werven
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            We beginnen met een intake bij jullie op locatie. Daarna zoeken we
            gericht en persoonlijk via ons netwerk van bedrijfsjuristen en
            advocaten die de overstap naar (of binnen) een in-house rol
            overwegen. We spreken elke kandidaat zelf voordat we voordragen en
            leveren een onderbouwde shortlist in plaats van een stapel
            cv&apos;s. Bij elke voordracht leggen we uit wat de persoon
            meebrengt, waarom het inhoudelijk en cultureel past en waar jullie
            op moeten letten. We begeleiden tot en met de eerste werkdag, en er
            is een vervangingsgarantie als die vooraf schriftelijk is
            afgesproken. No cure, no pay.
          </p>
          <p className="mt-6 text-[16px] leading-[1.6] text-foreground-muted">
            Ben je zelf legal counsel en oriënteer je je op een volgende rol?
            Die zoektocht staat op{" "}
            <Link
              href="/legal-counsel-vacature"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              legal counsel vacature
            </Link>
            .
          </p>
          <div className="mt-10">
            <PillButton href="/voor-opdrachtgevers">
              Lees hoe wij werken →
            </PillButton>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
