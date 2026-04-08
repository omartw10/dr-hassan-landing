type AuthorityItem = {
  value: string;
  label: string;
};

type AuthorityBarProps = {
  items: AuthorityItem[];
};

export function AuthorityBar({ items }: AuthorityBarProps) {
  return (
    <section data-reveal className="relative px-6 py-6 sm:px-8 lg:px-12">
      {/* Background soft glow behind the bar */}
      <div className="absolute inset-x-24 top-1/2 h-12 -translate-y-1/2 bg-[var(--color-gold)] opacity-5 blur-[100px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-[0_22px_60px_var(--color-card-shadow)] md:grid-cols-2 xl:grid-cols-4">
        {/* Animated shimmer overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(110deg,transparent_35%,rgba(201,168,76,0.06)_50%,transparent_65%)] bg-[length:200%_100%] transition-opacity duration-1000 [animation:shimmer_5s_infinite_linear]" aria-hidden="true" />

        {items.map((item, index) => {
          const compact = item.value.length > 18;

          return (
            <article
              key={item.label}
              className="group relative border-b border-[var(--color-border)] px-6 py-8 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 xl:border-b-0 xl:border-e xl:last:border-e-0"
            >
              {/* Individual cell hover glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-gold-dim),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              
              <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)] opacity-20 group-hover:opacity-50 transition-opacity duration-300" aria-hidden="true" />
              
              <div className="relative z-20">
                <p className="text-xs font-medium tracking-[0.12em] text-[var(--color-text-muted)] group-hover:text-[var(--color-gold-text)] transition-colors duration-300">
                  {item.label}
                </p>
                <p className={`mt-3 font-semibold leading-tight text-[var(--color-text)] transition-transform duration-500 group-hover:translate-x-1 sm:group-hover:translate-x-2 ${compact ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl"}`}>
                  {item.value}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
