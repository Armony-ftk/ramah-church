type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={["max-w-3xl", centered && "mx-auto text-center", className]
        .filter(Boolean)
        .join(" ")}
    >
      <h2 className="font-heading text-3xl font-bold text-[#FFFFFF] sm:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-2 text-base leading-7 text-[#BDBDBD]">{description}</p>
      ) : null}

      {eyebrow ? (
        <p className="mt-5 mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8D63D2]">
          {eyebrow}
        </p>
      ) : null}
    </div>
  );
}
