"use client";

import { useState } from "react";

import BeliefAccordionCard from "@/components/ui/BeliefAccordionCard";
import type { Belief } from "@/data/about";

type BeliefsAccordionGridProps = {
  beliefs: Belief[];
};

export default function BeliefsAccordionGrid({
  beliefs,
}: BeliefsAccordionGridProps) {
  const [openBeliefId, setOpenBeliefId] = useState<string | null>(null);

  return (
    <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
      {beliefs.map((belief) => (
        <BeliefAccordionCard
          key={belief.id}
          belief={belief}
          isOpen={openBeliefId === belief.id}
          onToggle={() =>
            setOpenBeliefId((currentId) =>
              currentId === belief.id ? null : belief.id,
            )
          }
        />
      ))}
    </div>
  );
}
