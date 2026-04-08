type WhyItem = {
  key: string;
  title: string;
  description: string;
};

type WhyChooseProps = {
  locale: string;
  eyebrow: string;
  title: string;
  items: WhyItem[];
};

export function WhyChoose({ locale, eyebrow, title, items }: WhyChooseProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";
  const eyebrowClass = isArabic
    ? "text-sm tracking-[0.08em] text-[var(--color-gold-text)]"
    : "text-sm uppercase tracking-[0.34em] text-[var(--color-gold-text)]";
  const indexClass = isArabic
    ? "text-xs tracking-[0.08em] text-[var(--color-gold-text)]"
    : "text-xs uppercase tracking-[0.28em] text-[var(--color-gold-text)]";

  return (
    <section id="why" data-reveal className="section-divider relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-gold-dim),transparent_55%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-5 text-start">
          <p className={eyebrowClass}>{eyebrow}</p>
          <h2 className={`text-4xl leading-tight text-[var(--color-text)] sm:text-5xl ${displayFont}`}>{title}</h2>
          <div data-reveal-line className="h-0.5 w-20 bg-[var(--color-gold)]" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              data-reveal
              key={item.key}
              className="card-glow group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-7 sm:p-8"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,var(--color-gold-dim),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

              <div className="relative z-10">
                <p className={indexClass}>
                  0{index + 1}
                </p>
                <h3 className={`mt-6 max-w-xs text-2xl leading-tight text-[var(--color-text)] sm:text-3xl ${displayFont}`}>
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
                  {item.description}
                </p>
                <div className="mt-8 h-px w-full bg-[linear-gradient(90deg,var(--color-gold),transparent_70%)] opacity-30 transition-opacity duration-300 group-hover:opacity-60" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
