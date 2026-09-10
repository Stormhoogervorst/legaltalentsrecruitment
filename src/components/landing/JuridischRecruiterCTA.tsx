import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function JuridischRecruiterCTA() {
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
            Vrijblijvend, vertrouwelijk, zonder verplichtingen — of je nu
            werft of zelf oriënteert.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="flex flex-col rounded-[24px] bg-dark-background-secondary p-8 md:p-10">
            <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-dark-foreground-secondary">
              / Opdrachtgevers
            </p>
            <h3 className="display-h3 mt-6">Een opdracht bespreken</h3>
            <p className="mt-4 text-[16px] leading-[1.6] text-dark-foreground-secondary">
              Vertel waar jullie kantoor of legal team naar zoekt. We denken
              mee over profiel, markt en tempo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PillButton href="/contact" variant="dark">
                Plan een gesprek →
              </PillButton>
              <PillButton
                href="/voor-opdrachtgevers"
                variant="dark"
                className="border border-white/25 bg-transparent text-dark-foreground hover:bg-white/5"
              >
                Voor opdrachtgevers
              </PillButton>
            </div>
          </article>

          <article className="flex flex-col rounded-[24px] bg-dark-background-secondary p-8 md:p-10">
            <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-dark-foreground-secondary">
              / Kandidaten
            </p>
            <h3 className="display-h3 mt-6">Oriënteren of solliciteren</h3>
            <p className="mt-4 text-[16px] leading-[1.6] text-dark-foreground-secondary">
              Bekijk openstaande posities of plan een kennismaking. Wij
              benaderen je huidige werkgever nooit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PillButton href="/vacatures" variant="dark">
                Bekijk vacatures →
              </PillButton>
              <PillButton
                href="/contact"
                variant="dark"
                className="border border-white/25 bg-transparent text-dark-foreground hover:bg-white/5"
              >
                Plan kennismaking
              </PillButton>
            </div>
          </article>
        </div>
      </SectionShell>
    </section>
  );
}
