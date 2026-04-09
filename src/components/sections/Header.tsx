"use client";

import { useState } from "react";

import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ScalesIcon } from "@/components/ui/ScalesIcon";
import { AvailabilityIndicator } from "@/components/ui/AvailabilityIndicator";

type HeaderProps = {
  locale: string;
  brand: string;
  navItems: Array<{ href: string; label: string }>;
  callLabel: string;
};

export function Header({ locale, brand, navItems, callLabel }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isArabic = locale === "ar";
  const navLabelClass = isArabic
    ? "text-sm tracking-[0.08em]"
    : "text-xs uppercase tracking-[0.18em]";

  return (
    <header data-reveal="hero" className="sticky top-0 z-30 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[var(--color-header-border)] bg-[var(--color-header-bg)] shadow-[0_12px_36px_var(--color-card-shadow)] backdrop-blur-xl transition-colors duration-400">
        <div className="px-5 sm:px-8 lg:px-10">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4 py-4">
            <a href={`/${locale}`} className="flex items-center gap-3 text-[var(--color-text)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold-dim)] text-[var(--color-gold-text)]">
                <ScalesIcon size={18} />
              </span>
              <span className="text-base font-semibold sm:text-lg">{brand}</span>
            </a>

            <div className="hidden lg:block">
              <AvailabilityIndicator locale={locale} />
            </div>

            <div className="flex items-center gap-2">
              <a
                href="tel:+966508089886"
                dir="ltr"
                className="hidden min-h-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-gold)] sm:inline-flex"
              >
                +966 50 808 9886
              </a>
              <LanguageToggle locale={locale} />

              {/* Mobile hamburger */}
              <button
                type="button"
                onPointerDown={(e) => {
                  e.preventDefault();
                  setMobileOpen((prev) => !prev);
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                }}
                className="relative z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-lg transition-all duration-200 hover:border-[var(--color-gold)] active:scale-95 lg:hidden"
                style={{ touchAction: "manipulation" }}
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
              >
                <svg className="pointer-events-none h-5 w-5 text-[var(--color-text)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {mobileOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="4" y1="8" x2="20" y2="8" />
                      <line x1="4" y1="16" x2="20" y2="16" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden gap-2 border-t border-[var(--color-border)] py-3 lg:flex lg:justify-center lg:gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:text-[var(--color-text)] ${navLabelClass}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile dropdown */}
          <div
            id="mobile-navigation"
            className="overflow-hidden transition-all duration-300 ease-in-out lg:hidden"
            style={{
              maxHeight: mobileOpen ? "500px" : "0px",
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            <div className="flex flex-col gap-2 border-t border-[var(--color-border)] py-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-gold)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+966508089886"
                className="mt-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-center text-sm font-medium text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-gold)]"
              >
                {callLabel}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* VERSION INDICATOR - REMOVE AFTER FIX */}
      <div className="fixed bottom-4 left-4 z-[9999] rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg pointer-events-none">
        v3
      </div>
    </header>
  );
}
