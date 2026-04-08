type TestimonialsProps = {
  locale: string;
};

const testimonials = {
  ar: [
    {
      text: "تعاملت مع الدكتور حسن في ملف استثمار أجنبي معقد، وكان أداؤه استثنائياً في فهم المتطلبات النظامية وتقديم حلول عملية واضحة.",
      source: "عميل مؤسسي — قطاع الاستثمار",
    },
    {
      text: "الترجمة القانونية التي قدمها المكتب كانت دقيقة واحترافية — لم نحتج لأي مراجعة إضافية عند تقديم العقود للجهات الرسمية.",
      source: "شركة دولية — قطاع التجارة",
    },
    {
      text: "ما يميز الدكتور حسن هو الجمع بين العمق الأكاديمي والخبرة العملية. رأيه القانوني لا يكتفي بالإجراء، بل يفسّر الأثر التشريعي.",
      source: "مستشار مالي — القطاع المصرفي",
    },
  ],
  en: [
    {
      text: "Dr. Hassan handled a complex foreign investment file with exceptional understanding of the regulatory requirements and delivered clear, practical solutions.",
      source: "Institutional Client — Investment Sector",
    },
    {
      text: "The certified legal translation provided by the office was precise and professional — no additional revisions were needed when submitting contracts to authorities.",
      source: "International Firm — Trade Sector",
    },
    {
      text: "What sets Dr. Hassan apart is the combination of academic depth and practical expertise. His legal opinions go beyond procedure to explain the legislative impact.",
      source: "Financial Advisor — Banking Sector",
    },
  ],
};

export function Testimonials({ locale }: TestimonialsProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";
  const eyebrowClass = isArabic
    ? "text-sm tracking-[0.08em] text-[var(--color-gold-text)]"
    : "text-sm uppercase tracking-[0.3em] text-[var(--color-gold-text)]";
  const items = isArabic ? testimonials.ar : testimonials.en;
  const sectionTitle = isArabic ? "ما يقوله العملاء" : "Client Testimonials";
  const eyebrow = isArabic ? "شهادات الثقة" : "Trust & Credibility";

  return (
    <section data-reveal className="section-divider relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-gold-dim),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-5 text-start">
          <p className={eyebrowClass}>{eyebrow}</p>
          <h2 className={`text-4xl leading-tight text-[var(--color-text)] sm:text-5xl ${displayFont}`}>
            {sectionTitle}
          </h2>
          <div data-reveal-line className="h-0.5 w-20 bg-[var(--color-gold)]" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              data-reveal
              key={index}
              className="card-glow group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-7 sm:p-8"
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,var(--color-gold-dim),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-6">
                {/* Quote mark */}
                <svg
                  className="h-8 w-8 text-[var(--color-gold)] opacity-40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>

                {/* Quote text */}
                <p className="text-lg leading-8 text-[var(--color-text)] sm:text-xl sm:leading-9">
                  {item.text}
                </p>

                {/* Source */}
                <div className="border-t border-[var(--color-border)] pt-5">
                  <p className="text-sm font-medium text-[var(--color-gold-text)]">
                    {item.source}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
