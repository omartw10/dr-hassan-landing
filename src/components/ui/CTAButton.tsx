import type { ReactNode } from "react";

type CTAHref = `tel:${string}` | `https://wa.me/${string}`;

type CTAButtonProps = {
  href: CTAHref;
  variant: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  locale?: string;
};

export function CTAButton({ href, variant, children, className = "", locale = "ar" }: CTAButtonProps) {
  const isArabic = locale === "ar";
  const labelClass = isArabic
    ? "text-sm tracking-[0.08em]"
    : "text-sm uppercase tracking-[0.16em]";
  const classes =
    variant === "primary"
      ? "bg-[var(--color-cta-primary-bg)] text-[var(--color-cta-primary-text)] border-transparent shadow-[0_14px_36px_var(--color-card-shadow)] hover:-translate-y-0.5 hover:opacity-90"
      : "border-[var(--color-cta-secondary-border)] bg-[var(--color-cta-secondary-bg)] text-[var(--color-cta-secondary-text)] hover:-translate-y-0.5 hover:border-[var(--color-gold)]";

  return (
    <a
      href={href}
      className={`inline-flex min-h-13 items-center justify-center rounded-full border px-6 py-3 font-semibold transition-all duration-300 ${labelClass} ${classes} ${className}`}
    >
      {children}
    </a>
  );
}
