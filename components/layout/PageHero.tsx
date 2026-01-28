import { ButtonLink } from "../ui/ButtonLink";
import { PlaceholderPanel } from "../ui/PlaceholderPanel";

type PageHeroProps = {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageLabel?: string;
};

export function PageHero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageLabel
}: PageHeroProps) {
  return (
    <section className="px-6 pb-14 pt-16 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-white/70">{subtitle}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta && (
                <ButtonLink href={primaryCta.href}>
                  {primaryCta.label}
                </ButtonLink>
              )}
              {secondaryCta && (
                <ButtonLink href={secondaryCta.href} variant="outline">
                  {secondaryCta.label}
                </ButtonLink>
              )}
            </div>
          )}
        </div>
        <PlaceholderPanel
          label={imageLabel ?? "Hero image placeholder"}
          className="min-h-[220px]"
        />
      </div>
    </section>
  );
}
