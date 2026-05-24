import { MeanderingProcess } from "@/components/shared/MeanderingProcess";

const steps = [
  {
    index: "001",
    title: "Intake",
    body: "Bij voorkeur op locatie, om jullie cultuur te leren kennen.",
  },
  {
    index: "002",
    title: "Search",
    body: "Gericht via ons netwerk en actieve, persoonlijke search.",
  },
  {
    index: "003",
    title: "Voorstellen",
    body: "Alleen kandidaten die wij zelf hebben gesproken.",
  },
  {
    index: "004",
    title: "Begeleiding",
    body: "Tot en met de eerste werkdag — en daarna.",
  },
];

export function HowWeWork() {
  return (
    <MeanderingProcess
      eyebrow="/ ONZE AANPAK"
      eyebrowSubtitle="Voor opdrachtgevers"
      title="Vier stappen. / Eén match."
      steps={steps}
      footerText="Zoek je een functie als jurist? Bekijk hoe wij kandidaten begeleiden."
      footerLink={{ label: "Meer voor kandidaten", href: "/voor-kandidaten" }}
      background="slate"
    />
  );
}
