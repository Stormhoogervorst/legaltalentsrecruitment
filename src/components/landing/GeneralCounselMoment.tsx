import Link from "next/link";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const signalen = [
  "De juridische vraagstukken te strategisch en te frequent worden om bij externe kantoren te beleggen.",
  "Er een legal-team is dat aansturing en richting nodig heeft.",
  "Een financieringsronde, internationale expansie of overname juridische regie op directieniveau vraagt.",
  "De directie een vaste juridische sparringpartner wil in plaats van losse adviezen achteraf.",
];

export function GeneralCounselMoment() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ HET MOMENT</SlashPill>
          <h2 className="display-md mt-8">
            Wanneer is het moment <br />
            voor een general counsel?
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            Niet elke organisatie heeft een general counsel nodig. Vaak is een
            general counsel de logische volgende stap wanneer:
          </p>
          <ul className="mt-6 list-disc space-y-4 pl-5">
            {signalen.map((item) => (
              <li
                key={item}
                className="text-[16px] leading-[1.6] text-foreground-muted"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[16px] leading-[1.6] text-foreground-muted">
            Twijfel je of je een general counsel nodig hebt of (nog) een{" "}
            <Link
              href="/recruitment/legal-counsel"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              legal counsel
            </Link>{" "}
            volstaat? We denken graag mee — die afweging maken we vaker.
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
