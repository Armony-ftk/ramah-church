import Link from "next/link";
import Container from "@/components/layout/Container";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Sermons", href: "/sermons" },
  { label: "Give", href: "/give" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-[#0B0B0F]">
      <Container className="flex min-h-20 items-center justify-between gap-8">
        <Link href="/" className="font-heading text-xl font-bold tracking-wide">
          RAMAH
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-[#BDBDBD]">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
