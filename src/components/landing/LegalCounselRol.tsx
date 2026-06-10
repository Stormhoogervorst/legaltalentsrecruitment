import Link from "next/link";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export function LegalCounselRol() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ DE ROL</SlashPill>
          <h2 className="display-md mt-8">Wat een legal counsel doet</h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            Waar een{" "}
            <Link
              href="/recruitment/general-counsel"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              general counsel
            </Link>{" "}
            stuurt en adviseert op directieniveau, draait een legal counsel de
            uitvoerende praktijk. Denk aan het opstellen en beoordelen van
            commerciële contracten, het adviseren van sales, HR en operations
            bij juridische vragen, het bewaken van compliance, en het aansturen
            van externe advocaten bij specialistische kwesties. Het is een rol
            waarin zelfstandigheid en pragmatisme net zo belangrijk zijn als
            juridische kennis — de business wil oplossingen, geen lange
            memo&apos;s.
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
