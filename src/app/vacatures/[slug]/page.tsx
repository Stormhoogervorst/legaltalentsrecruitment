import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PillButton, SectionShell, SlashPill } from "@/components/home/primitives";
import { SollicitatieForm } from "@/components/vacatures/SollicitatieForm";
import { jobPostingSchema } from "@/lib/schema";
import {
  getAllVacatureSlugs,
  getVacatureBySlug,
} from "@/lib/vacatures";
import type { Vacature } from "@/lib/vacatures";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatValue(value?: string) {
  return value || "In overleg";
}

function opdrachtgeverNaam(vacature: Vacature) {
  return vacature.opdrachtgeverVertrouwelijk
    ? "Vertrouwelijk"
    : vacature.opdrachtgeverNaam;
}

function MetaCard({ label, value }: { label: string; value?: string }) {
  return (
    <div className="rounded-[12px] bg-background-secondary p-5">
      <p className="font-mono text-[12px] font-medium uppercase leading-none tracking-[0.08em] text-foreground-muted">
        / {label}
      </p>
      <p className="mt-2 text-[16px] leading-[1.6] text-foreground">
        {formatValue(value)}
      </p>
    </div>
  );
}

function ContentSection({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 first:mt-0">
      <SlashPill>{eyebrow}</SlashPill>
      <div className="mt-6">{children}</div>
    </section>
  );
}

const mdxComponents = {
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="display-h3 pt-4 text-foreground">{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="pt-4 font-display text-[24px] font-medium leading-[1.2] tracking-[-0.005em] text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="text-[17px] leading-[1.75] text-foreground-secondary">
      {children}
    </p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="list-disc space-y-3 pl-5 text-[17px] leading-[1.7] text-foreground-secondary">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="list-decimal space-y-3 pl-5 text-[17px] leading-[1.7] text-foreground-secondary">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="pl-1">{children}</li>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-medium text-foreground">{children}</strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  a: ({
    children,
    href,
  }: {
    children?: React.ReactNode;
    href?: string;
  }) => {
    const isExternal = href?.startsWith("http");

    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-accent"
      >
        {children}
      </a>
    );
  },
};

export async function generateStaticParams() {
  const slugs = await getAllVacatureSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vacature = await getVacatureBySlug(slug);

  if (!vacature) {
    return {
      title: "Vacature niet gevonden | Legal Talents",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = vacature.metaTitle || `${vacature.title} — ${vacature.plaats} | Legal Talents`;
  const description = vacature.metaDescription || vacature.excerpt;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: `/vacatures/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "nl_NL",
      title,
      description,
      siteName: "Legal Talents Recruitment",
    },
    robots:
      vacature.status !== "open"
        ? {
            index: false,
            follow: true,
          }
        : undefined,
  };
}

export default async function VacatureDetailPage({ params }: Props) {
  const { slug } = await params;
  const vacature = await getVacatureBySlug(slug);

  if (!vacature) {
    notFound();
  }

  const rechtsgebieden = vacature.rechtsgebieden?.map((item) => item.title).join(" · ");
  const locatie = [vacature.plaats, vacature.werkvorm].filter(Boolean).join(" · ");
  const jsonLd = jobPostingSchema(vacature);

  return (
    <>
      <section className="bg-background py-12 text-foreground md:py-24">
        <SectionShell className="max-w-[920px]">
          <Link
            href="/vacatures"
            className="text-sm leading-[1.5] text-foreground-muted transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            ← Alle vacatures
          </Link>

          <div className="mt-12">
            <SlashPill>/ VACATURE</SlashPill>
            {rechtsgebieden ? (
              <p className="mt-6 font-mono text-[12px] font-medium uppercase leading-none tracking-[0.08em] text-foreground-muted">
                {rechtsgebieden}
              </p>
            ) : null}
            <h1 className="mt-4 break-words hyphens-auto font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {vacature.title}
            </h1>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-2 lg:grid-cols-4">
            <MetaCard label="Niveau" value={vacature.niveau} />
            <MetaCard label="Plaatsing" value={vacature.plaatsing} />
            <MetaCard label="Werkuren" value={vacature.werkuren} />
            <MetaCard label="Locatie" value={locatie} />
          </div>

          {vacature.salarisIndicatie ? (
            <p className="mt-6 text-[16px] leading-[1.6] text-foreground-secondary">
              <span className="font-medium text-foreground">Salarisindicatie:</span>{" "}
              {vacature.salarisIndicatie}
            </p>
          ) : null}

          <div className="mt-8">
            <PillButton href="#solliciteren">
              Reageer op deze vacature →
            </PillButton>
          </div>
        </SectionShell>
      </section>

      <section className="bg-background py-16 text-foreground">
        <SectionShell className="max-w-[760px]">
          <ContentSection eyebrow={`/ ${opdrachtgeverNaam(vacature)}`}>
            <div className="space-y-5">
              <MDXRemote source={vacature.body} components={mdxComponents} />
            </div>
          </ContentSection>
        </SectionShell>
      </section>

      <section
        id="solliciteren"
        className="scroll-mt-[100px] bg-background-secondary py-16 text-foreground md:py-[120px]"
      >
        <SectionShell className="max-w-[760px]">
          <SollicitatieForm
            vacatureSlug={slug}
            vacatureTitle={vacature.title}
          />
        </SectionShell>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
