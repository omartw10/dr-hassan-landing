type ContactProps = {
  locale: string;
  title: string;
  subtitle: string;
  whatsappLabel: string;
  callLabel: string;
  emailLabel: string;
  locationLabel: string;
  availabilityLabel: string;
  consultationLabel: string;
  location: string;
  hours: string;
  emailValue: string;
};

export function Contact({
  locale,
  title,
  subtitle,
  whatsappLabel,
  callLabel,
  emailLabel,
  locationLabel,
  availabilityLabel,
  consultationLabel,
  location,
  hours,
  emailValue,
}: ContactProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";
  const headingMetaClass = isArabic
    ? "text-sm tracking-[0.08em] text-[var(--color-gold-text)]"
    : "text-sm uppercase tracking-[0.3em] text-[var(--color-gold-text)]";
  const labelClass = isArabic
    ? "text-xs tracking-[0.08em] text-[var(--color-gold-text)]"
    : "text-xs uppercase tracking-[0.24em] text-[var(--color-gold-text)]";
  const buttonClass = isArabic
    ? "text-sm tracking-[0.08em]"
    : "text-sm uppercase tracking-[0.16em]";
  const hasRealEmail = !emailValue.includes("[domain]");
  const mapsUrl = "https://www.google.com/maps?q=21.517202,39.182590";
  const mapsLabel = isArabic ? "افتح في خرائط Google" : "Open in Google Maps";

  return (
    <section id="contact" data-reveal className="section-divider px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.12fr_0.88fr]">
        <div data-reveal className="card-glow overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8 shadow-[0_26px_80px_var(--color-card-shadow)] sm:p-10">
          <p className={headingMetaClass}>{consultationLabel}</p>
          <h2 className={`mt-5 max-w-3xl text-4xl leading-tight text-[var(--color-text)] sm:text-5xl ${displayFont}`}>{title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl sm:leading-9">{subtitle}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/966508089886"
              className={`inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[var(--color-cta-primary-bg)] px-6 py-3 font-semibold text-[var(--color-cta-primary-text)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 ${buttonClass}`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {whatsappLabel}
            </a>
            <a
              href="tel:+966508089886"
              className={`inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-[var(--color-cta-secondary-border)] bg-[var(--color-cta-secondary-bg)] px-6 py-3 font-semibold text-[var(--color-cta-secondary-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-gold)] ${buttonClass}`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              <span dir="ltr">+966 50 808 9886</span>
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { num: "01", text: isArabic ? "تواصل مباشر دون نماذج أو خطوات معقدة." : "Direct access without forms or unnecessary friction." },
              { num: "02", text: isArabic ? "قنوات مناسبة للمؤسسات والأفراد المستثمرين." : "Suitable channels for institutions and private investors." },
              { num: "03", text: isArabic ? "استجابة مصممة لملفات تتطلب وضوحاً ومهنية عالية." : "Response calibrated for matters that require clarity and discretion." },
            ].map((item) => (
              <article key={item.num} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
                <p className={labelClass}>{item.num}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          {hasRealEmail ? (
            <article data-reveal className="card-glow rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-7">
              <p className={labelClass}>{emailLabel}</p>
              <a href={`mailto:${emailValue}`} className="mt-4 block text-xl text-[var(--color-text)] transition-all duration-300 hover:opacity-75 hover:underline">{emailValue}</a>
            </article>
          ) : null}
          <article data-reveal className="card-glow rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-7">
            <p className={labelClass}>{locationLabel}</p>
            <p className="mt-4 text-lg leading-8 text-[var(--color-text-secondary)]">{location}</p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              {isArabic ? "المبنى 6677 — الرمز البريدي 23216" : "Building 6677 — Postal Code 23216"}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-gold-text)] transition-all duration-300 hover:opacity-75"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {mapsLabel}
            </a>
          </article>
          <article data-reveal className="card-glow rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-7">
            <p className={labelClass}>{availabilityLabel}</p>
            <p className="mt-4 text-lg leading-8 text-[var(--color-text-secondary)]">{hours}</p>
          </article>

          {/* Google Maps Embed */}
          <article data-reveal className="card-glow overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3710.6!2d39.18259!3d21.517202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sar!2ssa!4v1712620000000!5m2!1sar!2ssa"
              width="100%"
              height="200"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={isArabic ? "موقع المكتب على الخريطة" : "Office location on map"}
            />
          </article>
        </div>
      </div>
    </section>
  );
}
