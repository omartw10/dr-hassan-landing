type ServiceItem = {
  key: string;
  title: string;
  description: string;
};

type ServicesProps = {
  locale: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
};

export function Services({ locale, eyebrow, title, subtitle, items }: ServicesProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";
  const eyebrowClass = isArabic
    ? "text-sm tracking-[0.08em] text-[var(--color-text-muted)]"
    : "text-sm uppercase tracking-[0.32em] text-[var(--color-text-muted)]";
  const cardMetaClass = isArabic
    ? "text-xs tracking-[0.08em] text-[var(--color-text-muted)]"
    : "text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]";
  const note = isArabic
    ? "بنية خدمات مصاغة للملفات التي تتطلب قراءة تنظيمية دقيقة وصياغة متوازنة."
    : "An advisory structure designed for matters that demand regulatory precision and balanced drafting.";

  return (
    <section id="services" data-reveal className="section-divider relative px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-14 h-56 bg-[radial-gradient(circle_at_center,var(--color-gold-dim),transparent_62%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div className="space-y-6 text-start lg:sticky lg:top-32">
          <p className={eyebrowClass}>{eyebrow}</p>
          <h2 className={`max-w-xl text-4xl leading-tight text-[var(--color-text)] sm:text-5xl ${displayFont}`}>{title}</h2>
          <p className="max-w-lg text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">{subtitle}</p>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-6">
            <p className="text-sm leading-8 text-[var(--color-text-secondary)]">{note}</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <article
              data-reveal
              data-service-card
              key={item.key}
              className={`card-glow group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-7 ${index % 2 === 1 ? "md:translate-y-10" : ""}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-gold-dim),transparent_48%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <div data-service-float className="relative will-change-transform">
                <div data-parallax-number className="absolute -end-3 top-3 text-7xl leading-none text-[var(--color-gold)] opacity-[0.1]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative z-10 h-px w-16 bg-[var(--color-gold)]" aria-hidden="true" />
                <h3 className={`relative z-10 mt-7 max-w-xs text-2xl leading-tight text-[var(--color-text)] sm:text-3xl ${displayFont}`}>{item.title}</h3>
                <p className="relative z-10 mt-5 max-w-md text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">{item.description}</p>
                <div className={`relative z-10 mt-8 flex items-center justify-between ${cardMetaClass}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{isArabic ? "استشارة مركزة" : "Focused advisory"}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
