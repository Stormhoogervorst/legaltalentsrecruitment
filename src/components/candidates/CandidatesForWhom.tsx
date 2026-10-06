import Link from "next/link";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const audiences = [
  {
    index: "001",
    title: "Advocatuur",
    body: "Van advocaat-stagiair tot senior medewerker en partner. Alle rechtsgebieden, van ondernemingsrecht tot familierecht.",
  },
  {
    index: "002",
    title: "Bedrijfsjuridisch",
    body: "Bedrijfsjuristen, legal counsel, head of legal en general counsel posities bij corporates en mid-market bedrijven.",
  },
  {
    index: "003",
    title: "Specialismen",
    body: "Compliance officers, privacyspecialisten en contractmanagers. Daarnaast legal engineers en legal AI-specialisten, die AI in de praktijk werkend krijgen bij kantoren en corporates.",
  },
];

export function CandidatesForWhom() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ VOOR WIE</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Voor deze <br />
            juristen.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            We werken met juristen van advocaat-stagiair tot partner en van
            bedrijfsjurist tot general counsel, in alle rechtsgebieden. Zoek je
            een{" "}
            <Link
              href="/bedrijfsjurist-vacature"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              bedrijfsjurist vacature
            </Link>
            , een{" "}
            <Link
              href="/legal-counsel-vacature"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              legal counsel vacature
            </Link>{" "}
            of een{" "}
            <Link
              href="/compliance-officer-vacature"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              compliance officer vacature
            </Link>
            ? Daar hebben we aparte pagina&apos;s voor.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.index}
              className="rounded-2xl border border-[rgba(10,10,15,0.06)] bg-background p-8"
            >
              <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                / {audience.index}
              </p>
              <h3 className="mt-8 font-display text-[20px] font-medium leading-[1.25] tracking-[-0.005em]">
                {audience.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.5] text-foreground-muted">
                {audience.body}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
