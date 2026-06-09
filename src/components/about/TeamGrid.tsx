import Image from "next/image";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const team = [
  {
    name: "Max Endrizzi",
    role: "Eigenaar",
    education: "LLM International and European Business Law",
    bio: "Richtte Legal Talents op met één overtuiging: recruitment in de juridische sector kan scherper. Minder schuiven met CV's, meer focus op matches die ook over drie jaar nog kloppen.",
    image: "/max-v2.png",
    linkedin: "https://www.linkedin.com/in/max-endrizzi-135610305/",
  },
  {
    name: "Storm Hoogervorst",
    role: "Eigenaar",
    education: "LLB European Law School, BBA Business Economics",
    bio: "Bouwde eerst ervaring op in recruitment en richtte daarna samen met Max Legal Talents op. Bouwt slimme processen met AI zodat er meer tijd is voor wat telt: in gesprek met mensen.",
    image: "/storm-v2.jpg",
    linkedin: "https://www.linkedin.com/in/storm-hoogervorst-a35066290/",
  },
  {
    name: "Justin Bigler",
    role: "Strategic Business Partner",
    education: "LLM Ondernemingsrecht",
    bio: "Koos na zijn master Ondernemingsrecht bewust niet voor de advocatuur maar voor het bedrijfsleven. Eerst als Head of Sales and Strategy, nu bij Legal Talents waar hij de strategie uitbouwt.",
    image: "/justin-v2.jpg",
    linkedin: "https://www.linkedin.com/in/justin-bigler-0322071b4/",
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
          werkt ook aan jouw opdracht. In overleg met de opdrachtgever maken we
          een plan op maat. Wij schuiven niet met CV&apos;s, we werken samen met
          jou om de functie zo goed mogelijk te vervullen.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-2xl border border-border-light bg-background"
            >
              <Image
                src={member.image}
                alt={`Portretfoto van ${member.name}, ${member.role} bij Legal Talents`}
                width={400}
                height={400}
                className="aspect-square w-full object-cover"
                priority={index < 2}
              />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-[22px] font-medium leading-[1.3]">
                    {member.name}
                  </h3>
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} op LinkedIn`}
                    className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-foreground transition-colors hover:bg-pill-light focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <LinkedinIcon />
                  </a>
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
