import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

type PageHeroCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: PageHeroCta;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  cta,
}: PageHeroProps) {
  return (
    <section className="flex min-h-[55vh] items-center border-b border-white/10 bg-[#0B0B0F] py-20 sm:min-h-[60vh] sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow ? (
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#8D63D2]">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="font-heading text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          {description ? (
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#BDBDBD] sm:text-xl sm:leading-9">
              {description}
            </p>
          ) : null}

          {cta ? (
            <Button
              href={cta.href}
              variant={cta.variant ?? "primary"}
              className="mt-9 w-full sm:w-auto"
            >
              {cta.label}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
