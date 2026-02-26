import Link from "next/link";

const footerLinks = [
  { href: "/packages", label: "Packages" },
  { href: "/channels", label: "Channels" },
  { href: "/devices", label: "Devices" },
  { href: "/reseller", label: "Reseller" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/refund", label: "Refund" }
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-16 text-sm text-white/70 md:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_60%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold text-white">
              Aussie-iptv
            </p>
            <p className="mt-3 max-w-sm text-sm text-white/60">
              Premium streaming built for Australia. Buffer-free delivery,
              instant activation, and local support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                99.9% Uptime
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Australian Servers
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                24/7 Support
              </span>
              <span className="rounded-full border border-gold-400/30 bg-gold-500/10 px-3 py-1 text-gold-300">
                4K Ultra HD
              </span>
            </div>
          </div>

          <div>
            <p className="font-display text-base font-semibold text-white">
              Quick Links
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-gold-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-base font-semibold text-white">
              Support
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href="mailto:Aussiesupportservice56@gmail.com"
                className="block hover:text-gold-300"
              >
                Aussiesupportservice56@gmail.com
              </a>
              <a
                href="https://wa.me/47380600578"
                className="block hover:text-gold-300"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: +47 3806 00578
              </a>
              <a
                href="https://t.me/+447449881139"
                className="block hover:text-gold-300"
                target="_blank"
                rel="noreferrer"
              >
                Telegram: +44 7449 881139
              </a>
              <p>Hours: 24/7</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© Aussie-iptv. All rights reserved.</p>
          <p>Secure payments and privacy-first streaming.</p>
        </div>
      </div>
    </footer>
  );
}
