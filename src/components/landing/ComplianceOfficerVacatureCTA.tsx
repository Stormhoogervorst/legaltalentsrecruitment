import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function ComplianceOfficerVacatureCTA() {
  return (
    <section className="bg-dark-background py-16 text-dark-foreground md:py-40">
      <SectionShell>
        <div className="text-center">
          <SlashPill variant="dark">/ VOLGENDE STAP</SlashPill>
          <h2 className="display-lg mx-auto mt-8 max-w-4xl">
            Klaar voor <br />
            een gesprek?
          </h2>
          <p className="mx-auto mt-8 max-w-[520px] text-[18px] leading-[1.5] text-dark-foreground-secondary">
            Vrijblijvend en vertrouwelijk — of je nu een compliance officer
            vacature zoekt, of als opdrachtgever een compliance officer wilt
            werven.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="flex flex-col rounded-[24px] bg-dark-background-secondary p-8 md:p-10">
            <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-dark-foreground-secondary">
              / Kandidaten
            </p>
            <h3 className="display-h3 mt-6">Kennismaken of solliciteren</h3>
            <p className="mt-4 text-[16px] leading-[1.6] text-dark-foreground-secondary">
              Plan een kennismaking of bekijk openstaande posities. Wij
              benaderen je huidige werkgever nooit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PillButton href="/contact" variant="dark">
                Plan kennismaking →
              </PillButton>
              <PillButton
                href="/vacatures"
                variant="dark"
                className="border border-white/25 bg-transparent text-dark-foreground hover:bg-white/5"
              >
                Bekijk vacatures
              </PillButton>
            </div>
          </article>

          <article className="flex flex-col rounded-[24px] bg-dark-background-secondary p-8 md:p-10">
            <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-dark-foreground-secondary">
              / Opdrachtgevers
            </p>
            <h3 className="display-h3 mt-6">
              Zoek je zelf een compliance officer?
            </h3>
            <p className="mt-4 text-[16px] leading-[1.6] text-dark-foreground-secondary">
              De wervingspagina is voor organisaties die een compliance officer
              zoeken. Vertel daar welk profiel, welke sector en welk tempo — of
              plan direct een gesprek.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PillButton href="/recruitment/compliance-officer" variant="dark">
                Compliance officer werven →
              </PillButton>
              <PillButton
                href="/contact"
                variant="dark"
                className="border border-white/25 bg-transparent text-dark-foreground hover:bg-white/5"
              >
                Neem contact op
              </PillButton>
            </div>
          </article>
        </div>
      </SectionShell>
    </section>
  );
}
