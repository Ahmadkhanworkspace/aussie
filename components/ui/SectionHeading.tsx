type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true
}: SectionHeadingProps) {
  return (
    <div className={`mx-auto mb-12 max-w-3xl ${center ? "text-center" : ""}`}>
      <p className="font-display text-sm uppercase tracking-[0.4em] text-gold-400">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base text-white/70 md:text-lg">{subtitle}</p>
    </div>
  );
}
