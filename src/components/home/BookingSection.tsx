import { CalBooking } from "@/components/contact/CalBooking";
import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export function BookingSection() {
  return (
    <section
      id="kennismaking"
      className="section-y bg-background-secondary text-foreground"
    >
      <SectionShell>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32">
            <SlashPill>/ KENNISMAKING</SlashPill>
            <AnimatedHeadline
              lines={["Plan direct", "een gesprek."]}
              className="display-md mt-8 max-w-xl"
            />
            <p className="mt-8 max-w-[440px] text-[18px] leading-[1.5] text-foreground-secondary">
              Kies een moment dat jou uitkomt. Het gesprek is vrijblijvend,
              vertrouwelijk en kan telefonisch of digitaal.
            </p>
            <p className="mt-5 max-w-[440px] text-sm leading-[1.6] text-foreground-muted">
              Je ontvangt direct een bevestiging en agenda-uitnodiging.
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-border-light bg-background p-2 sm:p-4">
            <CalBooking />
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
