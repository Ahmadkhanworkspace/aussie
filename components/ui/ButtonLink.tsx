import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-gold-500 text-midnight-900 shadow-glow hover:bg-gold-400"
      : "border border-white/20 text-white/90 hover:border-gold-400 hover:text-gold-300";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
