import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import CopyButton from "@/components/ui/CopyButton";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  getGivingMethodCopyText,
  givingMethods,
  type GivingMethod,
} from "@/data/giving";

function GivingMethodCard({ method }: { method: GivingMethod }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#16161D] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.26)] transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8D63D2]/50 motion-reduce:transform-none motion-reduce:transition-none sm:p-8">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[#8D63D2]/70"
      />

      <div className="flex items-center gap-4">
        <span className="font-heading text-sm font-semibold tabular-nums tracking-[0.18em] text-[#C8B2F0]">
          {method.number}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
      </div>

      <h3 className="mt-7 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
        {method.title}
      </h3>
      <p className="mt-3 text-base leading-7 text-[#BDBDBD]">
        {method.description}
      </p>

      <dl className="mt-8 space-y-6 border-t border-white/10 pt-7">
        {method.details.map((detail) => (
          <div key={detail.label}>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D8D99]">
              {detail.label}
            </dt>
            <dd className="mt-2 break-words font-heading text-lg font-semibold tracking-[0.02em] text-[#F7F2FF] tabular-nums sm:text-xl">
              {detail.displayValue ?? detail.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto pt-8">
        <CopyButton
          value={getGivingMethodCopyText(method)}
          label={method.copyButtonLabel}
          className="min-h-12 w-full"
        />
      </div>
    </article>
  );
}

export default function HowToGiveSection() {
  return (
    <section
      aria-labelledby="how-to-give-title"
      className="bg-[#0F0F15] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div id="how-to-give-title">
          <SectionTitle
            title="How to Give"
            description="Choose the giving method that works best for you."
            centered
          />
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2">
          {givingMethods.map((method) => (
            <GivingMethodCard key={method.id} method={method} />
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl border-t border-white/10 pt-10 text-center sm:mt-16 sm:pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8D63D2]">
            Prefer another way to give?
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#BDBDBD] sm:text-lg sm:leading-8">
            If you would like to explore another way to partner with us,
            we&apos;d be happy to assist you.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            className="mt-7 w-full gap-2 sm:w-auto"
          >
            Contact Us
            <span aria-hidden="true">→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
