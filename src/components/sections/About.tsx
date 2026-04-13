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
    <section id="about" data-reveal className="relative border-t border-[var(--color-border)]/50 bg-[var(--color-bg)] px-6 py-24 sm:px-8 lg:px-12 lg:py-32 overflow-hidden">
      
      {/* Background Ambient element */}
      <div className="absolute -start-24 top-1/4 h-96 w-96 bg-[var(--color-gold)] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          
          <div data-reveal className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-gold)]" />
                <p className={eyebrowClass}>{eyebrow}</p>
              </div>
              <h2 className={`text-[2.5rem] sm:text-[3.5rem] leading-[1.2] text-[var(--color-text)] ${displayFont}`}>
                {title}
              </h2>
            </div>

            <p className="text-[1.25rem] sm:text-[1.5rem] leading-[1.8] text-[var(--color-text-secondary)] font-light border-s-2 border-[var(--color-gold)]/30 ps-6">
              {leadParagraph}
            </p>

            <div className="grid gap-8 pt-4">
              {[
                { 
                  num: "01", 
                  text: isArabic ? "دكتوراه في أصول الفقه — الجامعة الإسلامية" : "PhD in Usul al-Fiqh — Islamic University of Madinah",
                  label: isArabic ? "الخلفية الأكاديمية" : "Academic Background"
                },
                { 
                  num: "02", 
                  text: isArabic ? "مترجم قانوني معتمد — عربي وإنجليزي" : "Certified legal translator — Arabic & English",
                  label: isArabic ? "اللغة والترجمة" : "Linguistic Expertise"
                },
                { 
                  num: "03", 
                  text: isArabic ? "استشارات تشريعية وصياغة سياسات تنظيمية" : "Legislative advisory & regulatory policy drafting",
                  label: isArabic ? "الخبرة التنظيمية" : "Regulatory Authority"
                }
              ].map((foundation) => (
                <div key={foundation.num} className="group flex gap-6">
                  <span className="text-xl font-medium text-[var(--color-gold)] opacity-40 group-hover:opacity-100 transition-opacity">{foundation.num}</span>
                  <div className="space-y-1">
                    <p className="text-[10px] tracking-widest uppercase text-[var(--color-text-muted)] font-semibold">{foundation.label}</p>
                    <p className="text-lg text-[var(--color-text)] font-light leading-relaxed">{foundation.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {supportingParagraphs.map((paragraph, index) => (
              <div 
                key={index} 
                data-reveal 
                className="bg-[var(--color-bg-elevated)]/70 border border-[var(--color-border)]/60 rounded-2xl p-8 sm:p-10 shadow-sm hover:border-[var(--color-gold)]/30 transition-colors"
              >
                <p className="text-lg sm:text-[1.2rem] leading-[1.9] text-[var(--color-text-secondary)] font-light">
                  {paragraph}
                </p>
              </div>
            ))}

            <a
              href="https://www.youtube.com/channel/UC_hwMppTwwQxHqwunS7UzBw"
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              data-service-float
              className="card-glow group relative block overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] sm:p-7"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src="/youtub-dr-hassan.png"
                  alt="YouTube Background"
                  fill
                  className="scale-105 object-cover opacity-[0.22] grayscale-[0.4] transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-[0.35] group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={50}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-bg-elevated)_0%,transparent_50%,var(--color-bg-elevated)_100%)]" aria-hidden="true" />
                <div className={`absolute inset-0 bg-[linear-gradient(to_right,var(--color-bg-elevated)_0%,transparent_70%,var(--color-bg-elevated)_100%)] ${isArabic ? "rotate-180" : ""}`} aria-hidden="true" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.04),transparent_60%)]" aria-hidden="true" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <p className={labelClass}>{isArabic ? "المحاضرات العلمية" : "Academic Lectures"}</p>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold-dim)] bg-[var(--color-gold-dim)] text-[var(--color-gold-text)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FF0000] group-hover:border-[#FF0000] group-hover:text-white">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  </div>
                </div>
                <h3 className={`mt-6 text-xl sm:text-2xl leading-tight text-[var(--color-text)] transition-colors duration-500 group-hover:text-[var(--color-gold-light)] ${displayFont}`}>{isArabic ? "محاضرات في أصول الفقه والسيرة" : "Lectures in Jurisprudence & Seerah"}</h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] font-light opacity-80">{isArabic ? "سلسلة محاضرات علمية تعكس العمق الأكاديمي والمكانة البحثية المتميزة." : "A published series reflecting deep academic authority and distinguished research."}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[var(--color-gold)] opacity-80 group-hover:opacity-100 transition-all">
                  <span>{isArabic ? "تصفح القناة الرسمية" : "Visit official channel"}</span>
                  <svg className={`h-4 w-4 transition-transform duration-500 ${isArabic ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={isArabic ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} /></svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
