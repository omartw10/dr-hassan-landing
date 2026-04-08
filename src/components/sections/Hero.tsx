import Image from "next/image";

import { HeroReveal } from "@/components/ui/HeroReveal";
import { ScalesIcon } from "@/components/ui/ScalesIcon";
import { CTAButton } from "../ui/CTAButton";

type HeroProps = {
  locale: string;
  badge: string;
  eyebrow: string;
  name: string;
  title: string;
  specialization: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  panelTitle: string;
  panelText: string;
  locationLabel: string;
  locationValue: string;
  accessLabel: string;
  accessValue: string;
  counselLabel?: string;
  counselText?: string;
  positioningLabel?: string;
  metricYears?: string;
  metricCities?: string;
  metricBilingual?: string;
  profileAlt?: string;
  licenceBadge?: string;
};

export function Hero({
  locale,
  badge,
  eyebrow,
  name,
  title,
  specialization,
  subheadline,
  primaryCta,
  secondaryCta,
  panelTitle,
  panelText,
  locationLabel,
  locationValue,
  accessLabel,
  accessValue,
  counselLabel,
  counselText,
  positioningLabel,
  metricYears,
  metricCities,
  metricBilingual,
  profileAlt,
  licenceBadge,
}: HeroProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";
  const eyebrowClass = isArabic
    ? "text-sm tracking-[0.08em] text-[var(--color-text-muted)]"
    : "text-sm uppercase tracking-[0.34em] text-[var(--color-text-muted)]";
  const labelClass = isArabic
    ? "text-xs tracking-[0.08em] text-[var(--color-text-muted)]"
    : "text-xs uppercase tracking-[0.22em] text-[var(--color-text-muted)]";
  const statusClass = isArabic
    ? "text-xs tracking-[0.08em] text-[var(--color-text-muted)]"
    : "text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]";
  const underlineOrigin = isArabic ? "origin-right" : "origin-left";

  // Fallbacks for optional i18n props (backwards compat)
  const _counselLabel = counselLabel ?? (isArabic ? "مستشار تشريعي وباحث أكاديمي" : "Legislative Consultant & Scholar");
  const _counselText = counselText ?? (isArabic
    ? "توجيه قانوني مبني على خلفية أكاديمية في أصول الفقه وخبرة عملية في القانون المالي والتشريعي."
    : "Legal counsel grounded in academic scholarship in jurisprudence and practical expertise in financial and legislative law.");
  const _positioningLabel = positioningLabel ?? (isArabic ? "المؤهلات المهنية" : "Professional Credentials");
  const _metricYears = metricYears ?? (isArabic ? "سنوات من الممارسة القانونية" : "Years of legal practice");
  const _metricCities = metricCities ?? (isArabic ? "مناطق رئيسية تُخدم" : "Key regions served");
  const _metricBilingual = metricBilingual ?? (isArabic ? "ترجمة قانونية معتمدة" : "Certified legal translation");
  const _profileAlt = profileAlt ?? (isArabic
    ? "الدكتور حسن هاشم المالكي — محامٍ ومستشار قانوني مرخص"
    : "Dr. Hassan Hashem Al-Maliki — Licensed Attorney & Legal Consultant");
  const _licenceBadge = licenceBadge ?? (isArabic ? "محامٍ مرخص — 3531" : "Licence No. 3531");

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-10 sm:px-8 lg:px-12 lg:pb-24 lg:pt-12">
      <div className="bg-ambient-glow pointer-events-none absolute inset-x-0 top-8 h-[32rem] bg-[radial-gradient(circle_at_top,var(--color-gold-dim),transparent_56%)]" />
      <div data-reveal-line className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)]" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:items-center">
          {/* ─── Left: Text Content ─── */}
          <HeroReveal className="relative order-2 space-y-8 lg:order-1 lg:pe-10" data-reveal="hero">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-2 text-sm text-[var(--color-text-secondary)] backdrop-blur-sm">
              <span data-badge-pulse className="h-2 w-2 rounded-full bg-[var(--color-gold)] shadow-[0_0_0_rgba(184,151,47,0.35)] will-change-transform" aria-hidden="true" />
              {badge}
            </div>

            <div className="space-y-6">
              <p className={eyebrowClass}>{eyebrow}</p>
              <h1 data-hero-title className={`max-w-5xl text-5xl leading-[1.02] text-[var(--color-text)] sm:text-6xl lg:text-[5.5rem] ${displayFont}`}>
                {name}
              </h1>
              <div className="w-full max-w-xs sm:max-w-sm">
                <div data-hero-underline className={`h-0.5 scale-x-0 bg-[var(--color-gold)] ${underlineOrigin}`} />
              </div>
              <div className="grid gap-4 border-s border-[var(--color-gold)] ps-5 text-start">
                <p className="text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
                  {title}
                </p>
                <p className="max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-2xl sm:leading-9">
                  {specialization}
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_12rem] lg:items-end">
              <p className="max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl sm:leading-9">
                {subheadline}
              </p>
              <div className="hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 text-start shadow-[0_14px_34px_var(--color-card-shadow)] lg:block">
                <p className={labelClass}>{_counselLabel}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {_counselText}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-stretch">
              <CTAButton 
                href="https://wa.me/966508089886" 
                variant="primary" 
                className="cta-pulse min-h-[4rem] px-8 text-base" 
                locale={locale}
              >
                {primaryCta}
              </CTAButton>
              <CTAButton 
                href="tel:+966508089886" 
                variant="secondary" 
                locale={locale} 
                className="flex flex-col items-center justify-center min-h-[4rem] px-8 py-2"
              >
                <span className="text-[10px] uppercase tracking-widest opacity-60 mb-1">{secondaryCta}</span>
                <span dir="ltr" className="text-base font-semibold tabular-nums">+966 50 808 9886</span>
              </CTAButton>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 shadow-[0_14px_34px_var(--color-card-shadow)]">
                <p data-count-up data-count-end="15" data-count-prefix="+" className="text-lg font-semibold tabular-nums text-[var(--color-gold-text)]">+15</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">{_metricYears}</p>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 shadow-[0_14px_34px_var(--color-card-shadow)]">
                <p data-count-up data-count-end="3" className="text-lg font-semibold tabular-nums text-[var(--color-gold-text)]">3</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">{_metricCities}</p>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 shadow-[0_14px_34px_var(--color-card-shadow)]">
                <p data-count-up data-count-end="1" data-count-final="AR/EN" className="text-lg font-semibold tabular-nums text-[var(--color-gold-text)]">AR/EN</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">{_metricBilingual}</p>
              </div>
            </div>
          </HeroReveal>

          {/* ─── Right: Portrait + Info Panel ─── */}
          <HeroReveal delay={0.18} className="relative order-1 lg:order-2" data-reveal="hero">
            {/* Outer decorative ring */}
            <div className="absolute -inset-3 rounded-3xl border border-[var(--color-gold-dim)]" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-[0_32px_90px_var(--color-card-shadow)]">
              {/* Gold accent line at top */}
              <div className="absolute inset-x-8 top-0 z-10 h-px bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)]" />

              {/* ─── Portrait section ─── */}
              <div className="relative">
                {/* Photo container with overlay */}
                <div className="relative aspect-[4/3.5] w-full overflow-hidden">
                  {/* Gold gradient overlay — fades to elevated bg at the bottom */}
                  <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_40%,var(--color-bg-elevated)_96%)]" />
                  {/* Side vignette for depth */}
                  <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_50%,var(--color-bg-elevated)_100%)] opacity-50" />
                  {/* Subtle gold tint */}
                  <div className="absolute inset-0 z-10 bg-[var(--color-gold)] opacity-[0.04] mix-blend-overlay" />

                  <Image
                    src="/hassan_profile_pic.png"
                    alt={_profileAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </div>

                {/* Gold ring badge overlapping the photo bottom */}
                <div className="absolute bottom-0 start-6 z-20 translate-y-1/2 sm:start-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-bg-elevated)] shadow-[0_8px_24px_var(--color-card-shadow)]">
                    <ScalesIcon size={24} />
                  </div>
                </div>

                {/* Status label floating at bottom right */}
                <div className="absolute bottom-2 end-6 z-20 sm:end-8">
                  <div className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 shadow-[0_4px_16px_var(--color-card-shadow)] backdrop-blur-sm ${statusClass}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" aria-hidden="true" />
                    {_licenceBadge}
                  </div>
                </div>
              </div>

              {/* ─── Content below photo ─── */}
              <div className="space-y-5 px-6 pb-6 pt-10 sm:px-8 sm:pb-8">
                {/* Quote panel */}
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
                  <p className={labelClass}>{panelTitle}</p>
                  <p className={`mt-4 text-xl leading-relaxed text-[var(--color-text)] sm:text-2xl ${displayFont}`}>
                    {panelText}
                  </p>
                </div>

                {/* Location + Access row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                    <p className={labelClass}>{locationLabel}</p>
                    <p className="mt-2 text-lg text-[var(--color-text)]">{locationValue}</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                    <p className={labelClass}>{accessLabel}</p>
                    <p className="mt-2 text-lg text-[var(--color-text)]">{accessValue}</p>
                  </div>
                </div>

                {/* Metrics row */}
                <div data-hero-panel className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                  <p className={labelClass}>{_positioningLabel}</p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-xl font-semibold text-[var(--color-gold-text)]">15+</p>
                      <p className="mt-1 text-xs leading-5 text-[var(--color-text-secondary)]">{_metricYears}</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-[var(--color-gold-text)]">3</p>
                      <p className="mt-1 text-xs leading-5 text-[var(--color-text-secondary)]">{_metricCities}</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-[var(--color-gold-text)]">AR/EN</p>
                      <p className="mt-1 text-xs leading-5 text-[var(--color-text-secondary)]">{_metricBilingual}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
}
