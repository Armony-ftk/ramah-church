import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B0F]">
      <Container className="flex flex-col gap-3 py-8 text-sm text-[#BDBDBD] sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} The RAMAH Church.</p>
        <p>Love for God. Love for his people. Excellence in service</p>
      </Container>
    </footer>
  );
}

