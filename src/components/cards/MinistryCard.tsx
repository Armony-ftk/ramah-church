import Image from "next/image";

import Button from "@/components/ui/Button";
import type { Ministry } from "@/data/ministries";

type MinistryCardProps = {
  ministry: Ministry;
  className?: string;
  ctaLabel?: string;
};

export default function MinistryCard({
  ministry,
  className = "",
  ctaLabel = "Learn More",
}: MinistryCardProps) {
  return (
    <article
      className={[
        "flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#16161D] shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:-translate-y-1",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={ministry.image}
          alt={`${ministry.title} ministry at The RAMAH Church`}
          fill
          sizes="(min-width: 1280px) 264px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-heading text-2xl font-bold leading-tight text-white">
          {ministry.title}
        </h3>
        <p className="mt-4 flex-1 text-base leading-7 text-[#BDBDBD]">
          {ministry.description}
        </p>

        <div className="mt-7">
          <Button
            href={ministry.href}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}
