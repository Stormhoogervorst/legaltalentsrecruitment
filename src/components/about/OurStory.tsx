import Link from "next/link";
import type { ReactNode } from "react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const bodyLinkClassName =
  "font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

const blocks: { index: string; title: string; body: ReactNode }[] = [
  {
    index: "/ 001",
    title: "Kennis van Legal en AI",
    body: (
      <>
        We combineren juridische kennis met kennis van technologie. We weten
        wat een advocaat dagelijks doet en wat legal AI in de praktijk
        betekent. Kantoren en legal tech-bedrijven die een{" "}
        <Link href="/recruitment/legal-engineer" className={bodyLinkClassName}>
          legal engineer
        </Link>{" "}
        of een jurist met AI-kennis zoeken, weten ons daarom te vinden.
      </>
    ),
  },
  {
    index: "/ 002",
    title: "Ook de kandidaat die niet zoekt.",
    body: (
      <>
        De beste juristen staan zelden actief op een vacaturesite. Daarom
        investeren we in online vindbaarheid en gerichte search. Zo bereiken we
        maandelijks zo&apos;n 40.000 juristen, ook professionals die niet
        actief zoeken maar wel openstaan voor een volgende stap. Opdrachtgevers
        krijgen zo talent te zien dat ze via de gebruikelijke kanalen niet
        vinden.
      </>
    ),
  },
];

export function OurStory() {
  return (
    <section className="section-y bg-background-secondary text-foreground">
      <SectionShell>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SlashPill>/ ONS VERHAAL</SlashPill>
            <h2 className="display-md mt-8 max-w-4xl">
              Begonnen in de collegebanken.
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-[16px] leading-[1.6] text-foreground-secondary">
              <p>
                Legal Talents begon met twee rechtenstudenten en een idee: talent
                al kennen voordat het afstudeert. We zaten zelf tussen de
                juristen van morgen en zagen van dichtbij wie er uitsprong. Die
                mensen brachten we bij kantoren die verder keken dan het
                cijferlijstje.
              </p>
              <p>
                Ons netwerk groeide en daarmee ons werk. Inmiddels bemiddelen we
                starters en medior- en seniorjuristen, van ervaren advocaat tot{" "}
                <Link
                  href="/recruitment/bedrijfsjurist"
                  className={bodyLinkClassName}
                >
                  bedrijfsjurist
                </Link>{" "}
                en{" "}
                <Link
                  href="/recruitment/legal-counsel"
                  className={bodyLinkClassName}
                >
                  legal counsel
                </Link>. De aanpak bleef hetzelfde: we spreken iedereen zelf en
                kijken naar wat over een paar jaar nog klopt.
              </p>
            </div>
          </div>

          <div className="grid content-start gap-6">
            {blocks.map((block) => (
              <article
                key={block.index}
                className="rounded-2xl bg-background p-8"
              >
                <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                  {block.index}
                </p>
                <h3 className="display-h3 mt-10">{block.title}</h3>
                <p className="mt-5 text-[16px] leading-[1.6] text-foreground-secondary">
                  {block.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
