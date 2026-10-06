import Image from "next/image";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const team: {
  name: string;
  role: string;
  education?: string;
  bio: string;
  image: string;
  imageClassName?: string;
  linkedin?: string;
}[] = [
  {
    name: "Max Endrizzi",
    role: "Oprichter / Operations",
    education: "LLM International and European Business Law",
    bio: "Richtte Legal Talents tijdens zijn studie op, met een idee: recruitment in de juridische sector kan scherper. Minder schuiven met cv's, meer focus op matches die ook over drie jaar nog kloppen.",
    image: "/foto-max.webp",
    linkedin: "https://www.linkedin.com/in/max-endrizzi-135610305/",
  },
  {
    name: "Storm Hoogervorst",
    role: "Oprichter / Recruiter",
    education: "LLB European Law School, BBA Business Economics",
    bio: "Bouwde ervaring op in recruitment en richtte daarna samen met Max Legal Talents op. Zet AI in voor de processen eromheen, zodat er meer tijd is voor wat telt: in gesprek met mensen.",
    image: "/foto-storm.webp",
    linkedin: "https://www.linkedin.com/in/storm-hoogervorst-a35066290/",
  },
  {
    name: "Justin Bigler",
    role: "Business Development",
    education: "LLM Ondernemingsrecht",
    bio: "Koos na zijn master Ondernemingsrecht bewust niet voor de advocatuur maar voor het bedrijfsleven. Eerst als Head of Sales and Strategy, nu bij Legal Talents waar hij de samenwerkingen verder uitbouwt.",
    image: "/foto-justin.webp",
    linkedin: "https://www.linkedin.com/in/justin-bigler-0322071b4/",
  },
  {
    name: "Marcel Hoogervorst",
    role: "Interim directeur",
    bio: "Marcel brengt ruim 30 jaar ervaring in recruitment en HR met zich mee, waarvan 15 jaar als directeur binnen de werving & selectie en uitzendbranche. Deze unieke mix van branchekennis en strategisch leiderschap maakt hem een onmisbare partner voor onze klanten.",
    image: "/marcel.jpg",
  },
];

function LinkedinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function TeamGrid() {
  return (
    <section className="bg-background py-24 text-foreground">
      <SectionShell>
        <SlashPill>/ HET TEAM</SlashPill>
        <h2 className="display-md mt-8 max-w-4xl">
          Een compact team
          <br />
          dat met je meedenkt.
        </h2>
        <p className="mt-6 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
          Geen accountmanagers, geen tussenlagen. De persoon die je spreekt,
          werkt ook aan jouw opdracht. We schuiven niet met cv&apos;s: we vullen
          de functie samen met jou zo goed mogelijk in.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-2xl border border-border-light bg-background"
            >
              <Image
                src={member.image}
                alt={`Portretfoto van ${member.name}, ${member.role} bij Legal Talents`}
                width={800}
                height={800}
                // Bronnen zijn staand (0,75 / 0,90 / 0,75) en het kader is vierkant:
                // de breedte bepaalt de schaal (hoogte wordt afgesneden), dus nodig = kaderbreedte.
                // Kaderbreedte = (min(vw, 1440px) - 2×48px padding - gaps) / kolommen
                //   ≥1440px (4 kol): (1440 - 96 - 3×24) / 4 = 318px
                //   1280-1439px (4 kol): (100vw - 96px - 72px) / 4 = 25vw - 42px
                //   768-1279px (2 kol): (100vw - 96px - 24px) / 2 = 50vw - 60px
                //   <768px (1 kol): 100vw - 2×20px = 100vw - 40px
                sizes="(min-width: 1440px) 318px, (min-width: 1280px) calc(25vw - 42px), (min-width: 768px) calc(50vw - 60px), calc(100vw - 40px)"
                className={`aspect-square w-full object-cover ${member.imageClassName ?? ""}`}
              />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-[22px] font-medium leading-[1.3]">
                    {member.name}
                  </h3>
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      aria-label={`${member.name} op LinkedIn`}
                      className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-foreground transition-colors hover:bg-pill-light focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <LinkedinIcon />
                    </a>
                  ) : null}
                </div>
                <p className="mt-1 text-[14px] leading-[1.5] text-foreground-muted">
                  {member.role}
                </p>
                <p className="mt-4 text-[14px] leading-[1.5] text-foreground-secondary">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
