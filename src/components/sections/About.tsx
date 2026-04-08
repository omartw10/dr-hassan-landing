import Image from "next/image";

type AboutProps = {
  locale: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export function About({ locale, eyebrow, title, paragraphs }: AboutProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";
  const eyebrowClass = isArabic
    ? "text-sm tracking-[0.08em] text-[var(--color-text-muted)]"
    : "text-sm uppercase tracking-[0.3em] text-[var(--color-text-muted)]";
  const labelClass = isArabic
    ? "text-xs tracking-[0.08em] text-[var(--color-text-muted)]"
    : "text-xs uppercase tracking-[0.22em] text-[var(--color-text-muted)]";
  const dossierLabel = isArabic ? "مرتكزات الممارسة" : "Practice foundations";
  const leadParagraph = paragraphs[0];
  const supportingParagraphs = paragraphs.slice(1);

  return (
    <section id="about" data-reveal className="section-divider border-t border-[var(--color-border)] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <article data-reveal className="card-glow rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-7 shadow-[0_20px_50px_var(--color-card-shadow)] sm:p-9">
          <p className={eyebrowClass}>{eyebrow}</p>
          <h2 className={`mt-6 max-w-lg text-4xl leading-tight text-[var(--color-text)] sm:text-5xl ${displayFont}`}>
            {title}
          </h2>
          <div data-reveal-line className="mt-8 h-px w-24 bg-[var(--color-gold)]" aria-hidden="true" />
          <p className="mt-8 text-xl leading-9 text-[var(--color-text)] sm:text-2xl sm:leading-10">
            {leadParagraph}
          </p>
          <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
            <p className={labelClass}>{dossierLabel}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-[var(--color-gold-text)]">01</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {isArabic ? "دكتوراه في أصول الفقه — الجامعة الإسلامية" : "PhD in Usul al-Fiqh — Islamic University of Madinah"}
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--color-gold-text)]">02</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {isArabic ? "مترجم قانوني معتمد — عربي وإنجليزي" : "Certified legal translator — Arabic & English"}
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--color-gold-text)]">03</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {isArabic ? "استشارات تشريعية وصياغة سياسات تنظيمية" : "Legislative advisory & regulatory policy drafting"}
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="grid gap-5">
          {supportingParagraphs.map((paragraph, index) => (
            <article
              data-reveal
              data-service-float
              key={paragraph}
              className="card-glow rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-7"
            >
              <p className={labelClass}>0{index + 2}</p>
              <p className="mt-4 text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl sm:leading-9">{paragraph}</p>
            </article>
          ))}

          <a
            href="https://www.youtube.com/channel/UC_hwMppTwwQxHqwunS7UzBw"
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            data-service-float
            className="card-glow group relative block overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] sm:p-7"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/youtub-dr-hassan.png"
                alt="YouTube Background"
                fill
                className="scale-105 object-cover opacity-[0.22] grayscale-[0.4] transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-[0.35] group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlays for text protection */}
              <div
                className={`absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-bg-elevated)_0%,transparent_50%,var(--color-bg-elevated)_100%)]`}
                aria-hidden="true"
              />
              <div
                className={`absolute inset-0 bg-[linear-gradient(to_right,var(--color-bg-elevated)_0%,transparent_70%,var(--color-bg-elevated)_100%)] ${isArabic ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
              {/* YouTube themed accent glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.04),transparent_60%)]" aria-hidden="true" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4">
                <p className={labelClass}>
                  {isArabic ? "المحاضرات العلمية" : "Academic Lectures"}
                </p>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold-dim)] bg-[var(--color-gold-dim)] text-[var(--color-gold-text)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF0000] group-hover:border-[#FF0000] group-hover:text-white">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
              </div>

              <h3 className={`mt-5 text-xl leading-tight text-[var(--color-text)] sm:text-2xl transition-colors duration-300 group-hover:text-[var(--color-gold-text)] ${isArabic ? "font-[family-name:var(--font-arabic-display)]" : "font-[family-name:var(--font-english-display)]"}`}>
                {isArabic ? "محاضرات في أصول الفقه والسيرة النبوية" : "Lectures in Jurisprudence & Seerah"}
              </h3>

              <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
                {isArabic
                  ? "سلسلة محاضرات مرئية ودروس علمية في أصول الفقه والسيرة النبوية والتاريخ الإسلامي، تعكس العمق الأكاديمي والمكانة العلمية الرصينة."
                  : "A published series of academic lectures and scholarly lessons in jurisprudence, prophetic biography, and Islamic history, reflecting deep academic authority."}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--color-gold-text)]">
                <span>{isArabic ? "شاهد القناة الرسمية" : "Visit official channel"}</span>
                <svg className={`h-4 w-4 transition-transform duration-300 ${isArabic ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d={isArabic ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
