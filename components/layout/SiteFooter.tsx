import Link from "next/link";
import { MessageCircle, SendHorizontal, CreditCard, ShieldCheck, Zap, Phone, ArrowRight } from "lucide-react";

const footerLinks = [
  { href: "/packages", label: "Packages" },
  { href: "/channels", label: "Channels" },
  { href: "/devices", label: "Devices" },
  { href: "/reseller", label: "Reseller" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/refund", label: "Refund" }
];

const socialLinks = [
  { href: "https://wa.me/47380600578", icon: MessageCircle, label: "WhatsApp" },
  { href: "https://t.me/+447449881139", icon: SendHorizontal, label: "Telegram" },
];

const features = [
  { icon: ShieldCheck, title: "Secured" },
  { icon: Zap, title: "Fast" },
  { icon: Phone, title: "24/7" },
  { icon: CreditCard, title: "Safe" }
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5 bg-midnight-900 pt-24 pb-16 overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.03),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Brand Column - Spans 4 columns */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-2.5 mb-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 shadow-lg shadow-gold-500/20 transition-transform group-hover:scale-105">
                <Zap size={22} fill="currentColor" className="text-midnight-900" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Aussie<span className="text-gold-500">-iptv</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-white/90 mb-10 max-w-sm">
              Australia's premium streaming service. True 4K quality with local infrastructure and expert support.
            </p>

            {/* Compact Premium Badges */}
            <div className="inline-flex flex-wrap gap-2 mb-10">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
                >
                  <feature.icon size={12} className="text-gold-500" />
                  <span className="text-[9px] font-semibold tracking-wider text-white/90 uppercase">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.06] text-white/70 transition-all hover:bg-gold-500/10 hover:border-gold-500/30 hover:text-gold-500"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Spans 6 columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 mb-8">
                Navigation
              </h4>
              <ul className="space-y-4">
                {footerLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/90 transition-colors hover:text-gold-400 inline-flex items-center gap-2 group"
                    >
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 mb-8">
                Support
              </h4>
              <ul className="space-y-4">
                {footerLinks.slice(4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/90 transition-colors hover:text-gold-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 mb-8">
              Newsletter
            </h4>
            <p className="text-sm text-white/90 mb-6 leading-relaxed">
              Exclusive updates on Australian channels.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full h-11 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-gold-500/30 focus:bg-white/[0.05] transition-all"
                required
              />
              <button
                type="submit"
                className="w-full h-11 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-midnight-900 text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] tracking-wide text-white/70 uppercase">
            © {new Date().getFullYear()} Aussie-iptv — Premium Streaming
          </p>

          <div className="flex items-center gap-6 opacity-60">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-3 brightness-200"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-5 brightness-200"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-3 brightness-200"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
