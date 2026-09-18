import Image from "next/image";
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
        Wij combineren juridische kennis met een scherpe blik op technologie.
        Daardoor begrijpen we niet alleen wat een advocaat dagelijks doet, maar
        ook wat legal AI in de praktijk betekent. Kantoren en legal
        tech-bedrijven die op zoek zijn naar een{" "}
        <Link href="/recruitment/legal-engineer" className={bodyLinkClassName}>
          legal engineer
        </Link>{" "}
        of een jurist met kennis van AI, weten ons daarom te vinden.
      </>
    ),
  },
  {
    index: "/ 002",
    title: "Ook de kandidaat die niet zoekt.",
    body: (
      <>
        De beste juristen staan zelden actief op een vacaturesite. Door continu
        te investeren in online vindbaarheid en slimme search bereiken wij
        maandelijks zo&apos;n 40.000 juristen, waaronder professionals die niet
        actief zoeken, maar wel openstaan voor de juiste volgende stap. Zo
        krijgen opdrachtgevers toegang tot talent dat ze via de gebruikelijke
        kanalen niet vinden.
      </>
    ),
  },
];

export function OurStory() {
  return (
    <section className="section-y bg-background-secondary text-foreground">
      <SectionShell>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SlashPill>/ ONS VERHAAL</SlashPill>
            <h2 className="display-md mt-8 max-w-4xl">
              Begonnen in de collegebanken.
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-[16px] leading-[1.6] text-foreground-secondary">
              <p>
                Een jong en fris boutique legal recruitment agency waarbij
                kwaliteit, service en vertrouwen nog ouderwets hoog in het
                vaandel staan.
              </p>
              <p>
                Legal Talents begon met twee rechtenstudenten en één overtuiging:
                de beste manier om talent aan je organisatie te verbinden, is dat
                talent al kennen vóórdat het afstudeert. Wij zaten zelf tussen de
                juristen van morgen en zagen van dichtbij wie er echt uitsprong.
                Die kennis brachten we naar kantoren die verder keken dan het
                cijferlijstje.
              </p>
              <p>
                Naarmate ons netwerk in de juridische sector groeide, groeide
                ook onze rol. Inmiddels bemiddelen we niet alleen starters, maar
                ook in medior- en seniorfuncties binnen het hele juridische
                domein: van ervaren advocaat tot{" "}
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
                </Link>. De aanpak bleef hetzelfde: persoonlijk, zorgvuldig en
                met oog voor de lange termijn.
              </p>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-[24px] bg-background">
            <Image
              src="/stock-foto-5.jpg"
              alt="Jong talent in gesprek met Legal Talents Recruitment"
              fill
              sizes="(max-width: 1024px) 92vw, 540px"
              quality={90}
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
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
      </SectionShell>
    </section>
  );
}
