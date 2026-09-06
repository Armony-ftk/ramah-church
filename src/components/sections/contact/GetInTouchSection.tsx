import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  contactPageContent,
  type ContactMethod,
  type SocialLink,
} from "@/data/contact";

function SocialPlatformIcon({
  platform,
}: {
  platform: SocialLink["platform"];
}) {
  if (platform === "Facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-current"
      >
        <path d="M13.5 22v-8h2.75l.4-3H13.5V9.08c0-.87.24-1.46 1.53-1.46h1.73V4.94c-.3-.04-1.32-.13-2.54-.13-2.51 0-4.23 1.53-4.23 4.35V11H7.16v3h2.83v8h3.51Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" />
      <path d="m10 9 5 3-5 3V9Z" fill="white" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current"
    >
      <path
        d="M8 16 16 8m-6 0h6v6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactMethods({ methods }: { methods: readonly ContactMethod[] }) {
  return (
    <dl className="mt-6 space-y-5">
      {methods.map((method) => (
        <div key={method.label}>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D8D99]">
            {method.label}
          </dt>
          <dd className="mt-2">
            <a
              href={method.href}
              className="break-words text-base font-semibold text-[#F7F2FF] underline decoration-[#6A3FB5] decoration-2 underline-offset-4 transition-colors hover:text-[#C8B2F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8D63D2] sm:text-lg"
            >
              {method.value}
            </a>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function GetInTouchSection() {
  const { getInTouch } = contactPageContent;

  return (
    <section
      aria-labelledby="get-in-touch-title"
      className="bg-[#0F0F15] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div id="get-in-touch-title">
          <SectionTitle
            title={getInTouch.title}
            description={getInTouch.description}
            centered
          />
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-8">
          <article className="relative overflow-hidden rounded-lg border border-white/10 bg-[#16161D] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[#8D63D2]/70"
            />

            <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              {getInTouch.office.title}
            </h3>
            <ContactMethods methods={getInTouch.office.methods} />

            <div className="mt-8 border-t border-white/10 pt-8">
              <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                {getInTouch.pastoral.title}
              </h3>
              <ContactMethods methods={getInTouch.pastoral.methods} />
            </div>
          </article>

          <article className="relative overflow-hidden rounded-lg border border-white/10 bg-[#16161D] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[#8D63D2]/70"
            />

            <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              {getInTouch.social.title}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#BDBDBD]">
              {getInTouch.social.description}
            </p>

            <ul className="mt-8 grid gap-3">
              {getInTouch.social.links.map((socialLink) => (
                <li key={socialLink.platform}>
                  <a
                    href={socialLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block min-h-32 cursor-pointer rounded-lg border border-white/10 bg-[#0F0F15] px-5 py-5 transition-colors duration-200 hover:border-[#8D63D2]/70 hover:bg-[#8D63D2]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8D63D2] motion-reduce:transition-none"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span
                        aria-hidden="true"
                        className={[
                          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-transform duration-200 group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none",
                          socialLink.platform === "Facebook"
                            ? "text-[#1877F2]"
                            : "text-[#FF0033]",
                        ].join(" ")}
                      >
                        <SocialPlatformIcon platform={socialLink.platform} />
                      </span>
                      <span className="min-w-0 text-sm font-semibold text-[#C8B2F0]">
                        {socialLink.platform}
                      </span>
                      <span
                        aria-hidden="true"
                        className="ml-auto shrink-0 text-[#8D63D2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                      >
                        <ExternalLinkIcon />
                      </span>
                    </span>

                    <span className="mt-4 block break-words font-heading text-base font-bold text-white transition-colors duration-200 group-hover:text-[#F7F2FF] motion-reduce:transition-none sm:text-lg">
                      {socialLink.displayName}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-[#BDBDBD]">
                      {socialLink.ctaLabel}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
