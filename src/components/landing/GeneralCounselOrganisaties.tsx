import Link from "next/link";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export function GeneralCounselOrganisaties() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ VOOR WIE</SlashPill>
          <h2 className="display-md mt-8">
            Voor welke organisaties <br />
            wij general counsels vinden
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            We werven general counsels voor{" "}
            <Link
              href="/scale-ups"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              scale-ups
            </Link>{" "}
            die hun eerste juridisch eindverantwoordelijke aannemen, én voor
            corporates en mid-market bedrijven die een bestaand legal-team willen
            versterken of opvolgen.
          </p>
          <p className="mt-8 text-[16px] leading-[1.6] text-foreground-muted">
            De rol verschilt per fase — bij een scale-up is een general counsel
            vaak nog hands-on en breed, bij een corporate meer sturend en
            specialistisch. We stemmen de zoektocht daarop af.
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
