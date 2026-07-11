import type { Belief } from "@/data/about";

type BeliefAccordionCardProps = {
  belief: Belief;
  isOpen: boolean;
  onToggle: () => void;
};

export default function BeliefAccordionCard({
  belief,
  isOpen,
  onToggle,
}: BeliefAccordionCardProps) {
  const triggerId = `belief-trigger-${belief.id}`;
  const contentId = `belief-content-${belief.id}`;

  return (
    <article
      className={`self-start overflow-hidden rounded-lg border bg-[#16161D] transition-colors duration-200 motion-reduce:transition-none ${
        isOpen
          ? "border-[#8D63D2]/70 bg-[#0B0B0F]"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="flex min-h-24 w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left text-white outline-none transition-colors duration-200 hover:text-[#C8B2F0] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8D63D2] active:bg-white/5 motion-reduce:transition-none sm:px-6"
        >
          <span className="font-heading text-lg font-semibold leading-6">
            {belief.title}
          </span>
          <span
            aria-hidden="true"
            className={`relative size-5 shrink-0 text-[#8D63D2] transition-transform duration-200 motion-reduce:transition-none ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current" />
            <span
              className={`absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 rounded-full bg-current transition-transform duration-200 motion-reduce:transition-none ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </span>
        </button>
      </h3>

      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`border-t border-white/10 px-5 pb-6 pt-5 text-base leading-7 text-[#D7D7DD] transition-opacity duration-200 motion-reduce:transition-none sm:px-6 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {belief.statement}
          </p>
        </div>
      </div>
    </article>
  );
}
