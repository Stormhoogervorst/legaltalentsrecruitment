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
            Gerichte, persoonlijke search via ons netwerk van bedrijfsjuristen
            en advocaten die de overstap naar (of binnen) een in-house rol
            overwegen. We spreken elke kandidaat zelf voordat we voordragen, en
            leveren een onderbouwde shortlist in plaats van een stapel cv&apos;s.
            Bij elke voordracht: wat brengt deze persoon mee, waarom past het
            inhoudelijk én cultureel, en waar moet je op letten. Begeleiding tot
            en met de eerste werkdag, en een vervangingsgarantie op aanvraag. No
            cure, no pay.
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
