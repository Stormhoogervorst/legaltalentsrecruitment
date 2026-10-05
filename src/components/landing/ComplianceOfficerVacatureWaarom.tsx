import Link from "next/link";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const reasons = [
  {
    index: "001",
    title: "Legal én compliance",
    body: "Wij werven geen finance of IT erbij. Onze aandacht zit bij legal professionals en compliance officers — en bij de cultuur waarin zij moeten landen.",
  },
  {
    index: "002",
    title: "Alleen een voorstel na toestemming",
    body: "Kennismaking eerst, matching daarna. We stellen je alleen voor als jij ja zegt, en alleen als de rol past bij wat we hebben besproken.",
  },
  {
    index: "003",
    title: "Discreet",
    body: "Je huidige werkgever benaderen we nooit. Geen openbare sollicitatie, en geen cv dat rondgaat zonder jouw akkoord.",
  },
  {
    index: "004",
    title: "Landelijk",
    body: "Onze basis is Nijmegen; we werken landelijk in Nederland, onder meer waar compliance officer-rollen vaak zitten: Amsterdam, Utrecht en Rotterdam. Een gesprek kan telefonisch, digitaal of op locatie. Voor jou als kandidaat is het kosteloos.",
  },
];

const linkClassName =
  "font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

export function ComplianceOfficerVacatureWaarom() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SlashPill>/ WAAROM LEGAL TALENTS</SlashPill>
            <h2 className="display-md mt-8">
              Specialist in legal en compliance.{" "}
              <span className="block">Discreet aan twee kanten.</span>
            </h2>
            <p className="mt-12 text-[18px] leading-[1.5] text-foreground-secondary">
              Legal Talents is een compact bureau van mensen met een juridische
              achtergrond. Wij beloven geen fabricagecijfers — wel een
              werkwijze die kwaliteit, discretie en een duurzame match voorop
              zet.
            </p>
            <p className="mt-6 text-[16px] leading-[1.6] text-foreground-muted">
              Wat je wél mag verwachten: een serieuze intake, context bij elke
              compliance-rol, en begeleiding tot voorbij de eerste werkdag. Hoe
              dat eruitziet voor kandidaten staat op{" "}
              <Link href="/voor-kandidaten" className={linkClassName}>
                voor kandidaten
              </Link>
              .
            </p>
            <p className="mt-6 text-[16px] leading-[1.6] text-foreground-muted">
              Zoek je zelf een compliance officer? De werving staat op{" "}
              <Link
                href="/recruitment/compliance-officer"
                className={linkClassName}
              >
                compliance officer werven
              </Link>
              , of plan een gesprek via{" "}
              <Link href="/contact" className={linkClassName}>
                contact
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-y-6">
            {reasons.map((reason) => (
              <article
                key={reason.index}
                className="rounded-2xl bg-background p-8"
              >
                <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                  / {reason.index}
                </p>
                <h3 className="display-h3 mt-5">{reason.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.6] text-foreground-secondary">
                  {reason.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
