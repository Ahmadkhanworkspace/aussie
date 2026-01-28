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
        <div className="text-center lg:text-left">
          <h1 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-white/70 mx-auto lg:mx-0 max-w-2xl">{subtitle}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              {primaryCta && (
                <ButtonLink href={primaryCta.href} className="w-full sm:w-auto">
                  {primaryCta.label}
                </ButtonLink>
              )}
              {secondaryCta && (
                <ButtonLink href={secondaryCta.href} variant="outline" className="w-full sm:w-auto">
                  {secondaryCta.label}
                </ButtonLink>
              )}
            </div>
          )}
        </div>
        <PlaceholderPanel
          label={imageLabel ?? "Hero image placeholder"}
          className="min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]"
        />
      </div>
    </section>
  );
}
