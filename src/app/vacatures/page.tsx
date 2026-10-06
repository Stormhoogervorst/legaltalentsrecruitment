import type { Metadata } from "next";
import { PillButton, SectionShell, SlashPill } from "@/components/home/primitives";
import { VacatureCard } from "@/components/vacatures/VacatureCard";
import { getAllVacatures } from "@/lib/vacatures";

const title = "Juridische vacatures | Legal Talents Recruitment";
const description =
  "Actuele juridische vacatures voor advocaten, juristen en legal engineers. We spreken je eerst en begeleiden je tot en na je eerste werkdag.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/vacatures",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    title,
    description,
    siteName: "Legal Talents Recruitment",
  },
};

export default async function VacaturesPage() {
  const vacatures = await getAllVacatures();

  return (
    <>
      <section className="bg-background pt-16 pb-8 text-foreground md:pt-[120px] md:pb-12">
        <SectionShell>
          <h1 className="display-lg max-w-5xl">Actuele vacatures.</h1>
          <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
            Dit zijn onze openstaande vacatures. We zetten niet alles online.
            Staat er niets tussen, neem dan contact met ons op: we hebben vaak
            posities die nergens staan.
          </p>
        </SectionShell>
      </section>

      <section className="bg-background pt-8 pb-16 text-foreground md:pt-12 md:pb-24">
        <SectionShell>
          <p className="text-sm leading-[1.5] text-foreground-muted">
            {vacatures.length} open posities
          </p>

          {vacatures.length > 0 ? (
            <div className="mt-6 grid gap-4">
              {vacatures.map((vacature) => (
                <VacatureCard key={vacature._id} vacature={vacature} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-[16px] bg-background-secondary p-8 md:p-10">
              <p className="max-w-[680px] text-[16px] leading-[1.6] text-foreground-muted">
                Op dit moment geen open posities. Stuur ons je profiel, dan
                laten we het weten zodra er iets past.
              </p>
              <div className="mt-8">
                <PillButton href="/contact" variant="secondary">
                  Neem contact op
                </PillButton>
              </div>
            </div>
          )}
        </SectionShell>
      </section>

      <section className="bg-background-secondary py-24 text-foreground">
        <SectionShell className="text-center">
          <SlashPill>/ NIET GEVONDEN WAT JE ZOEKT?</SlashPill>
          <h2 className="display-md mx-auto mt-8 max-w-3xl">
            Stuur ons je profiel.
          </h2>
          <p className="mx-auto mt-6 max-w-[480px] text-[16px] leading-[1.6] text-foreground-secondary">
            We hebben vaak posities die niet online staan. Een gesprek is
            vrijblijvend en vertrouwelijk.
          </p>
          <div className="mt-10">
            <PillButton href="/contact">Plan een gesprek →</PillButton>
          </div>
        </SectionShell>
      </section>
    </>
  );
}
