import Link from "next/link";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export function LegalCounselOrganisaties() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ VOOR WIE</SlashPill>
          <h2 className="display-md mt-8">
            Voor welke organisaties <br />
            wij legal counsels vinden
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            Van{" "}
            <Link
              href="/scale-ups"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              scale-ups
            </Link>{" "}
            die hun eerste vaste jurist aannemen tot corporates en
            advocatenkantoren die een bestaand team uitbreiden. Bij een scale-up
            is de legal counsel vaak een brede generalist die van alles een
            beetje doet; bij een grotere organisatie kan de rol specialistischer
            zijn, bijvoorbeeld gericht op commerciële contracten of een specifiek
            rechtsgebied. We stemmen het profiel af op jullie fase en behoefte.
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
