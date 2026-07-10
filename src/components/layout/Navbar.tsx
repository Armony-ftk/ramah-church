"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";
import { navigationItems, type NavigationItem } from "@/data/navigation";

const SCROLLED_THRESHOLD = 12;

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function getDesktopLinkClasses(isActive: boolean) {
  return [
    "relative inline-flex py-2 transition-colors hover:text-white",
    isActive ? "text-[#C8B2F0]" : "text-[#BDBDBD]",
    isActive
      ? "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-5 after:-translate-x-1/2 after:rounded-full after:bg-[#8D63D2]"
      : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function getMobileLinkClasses(isActive: boolean) {
  return [
    "flex items-center justify-between rounded-lg border px-4 py-3 text-base font-semibold transition-colors",
    isActive
      ? "border-[#6A3FB5] bg-[#6A3FB5]/10 text-[#C8B2F0]"
      : "border-white/10 text-[#BDBDBD] hover:border-white/20 hover:text-white",
  ]
    .filter(Boolean)
    .join(" ");
}

function NavLink({
  item,
  pathname,
  mobile = false,
  onClick,
}: {
  item: NavigationItem;
  pathname: string;
  mobile?: boolean;
  onClick?: () => void;
}) {
  const active = isActivePath(pathname, item.href);

  return (
    <Link
      href={item.href}
      className={mobile ? getMobileLinkClasses(active) : getDesktopLinkClasses(active)}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
    >
      <span>{item.label}</span>
      {mobile && active ? (
        <span className="h-2 w-2 rounded-full bg-[#8D63D2]" aria-hidden="true" />
      ) : null}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function updateScrollState() {
      const nextIsScrolled = window.scrollY > SCROLLED_THRESHOLD;

      setIsScrolled((current) => {
        if (current === nextIsScrolled) {
          return current;
        }

        return nextIsScrolled;
      });
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        isScrolled
          ? "border-white/15 bg-[#0B0B0F] shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-white/10 bg-[#0B0B0F]/95 shadow-none backdrop-blur-0",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container className="flex min-h-20 items-center justify-between gap-8">
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-wide"
          onClick={() => setIsMenuOpen(false)}
        >
          RAMAH
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <NavLink item={item} pathname={pathname} />
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-[#8D63D2] hover:text-[#C8B2F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D63D2] md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>
          <span className="flex h-5 w-5 flex-col justify-center gap-1.5" aria-hidden="true">
            <span
              className={[
                "h-0.5 w-5 rounded-full bg-current transition-transform",
                isMenuOpen ? "translate-y-2 rotate-45" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            />
            <span
              className={[
                "h-0.5 w-5 rounded-full bg-current transition-opacity",
                isMenuOpen ? "opacity-0" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            />
            <span
              className={[
                "h-0.5 w-5 rounded-full bg-current transition-transform",
                isMenuOpen ? "-translate-y-2 -rotate-45" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          </span>
        </button>
      </Container>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#0B0B0F] md:hidden"
        >
          <Container className="py-4">
            <ul className="grid gap-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    item={item}
                    pathname={pathname}
                    mobile
                    onClick={() => setIsMenuOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
