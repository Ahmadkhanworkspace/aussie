import Link from "next/link";
import { ButtonLink } from "../ui/ButtonLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/channels", label: "Channels" },
  { href: "/devices", label: "Devices" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/reseller", label: "Reseller" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-midnight-900/80 backdrop-blur">
      <div className="mx-auto flex min-h-[96px] max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="font-display text-lg font-semibold text-white">
          Aussie-iptv
        </Link>
        <nav className="flex flex-1 items-center justify-center gap-3 overflow-x-auto text-xs font-semibold text-white md:gap-4 md:text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gold-300">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="/packages">Get Started</ButtonLink>
        </div>
      </div>
    </header>
  );
}
