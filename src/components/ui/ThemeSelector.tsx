"use client";

import { useState, useEffect } from "react";

const THEMES = [
  {
    id: "blue",
    name: "أزرق ملكي (أساسي)",
    vars: {
      "--color-primary": "#0a1628",
      "--color-surface": "#111d35",
      "--color-gold": "#c9a84c",
      "--color-gold-light": "#e8c96d",
      "--color-text": "#f5f0e8",
      "--color-text-muted": "#8a9bb8",
      "--color-border": "#1e2d4a",
      "--color-header-bg": "rgba(10,22,40,0.82)",
      "--color-bg-subtle": "#0d1a31",
    }
  },
  {
    id: "burgundy",
    name: "عنابي داكن",
    vars: {
      "--color-primary": "#140508",
      "--color-surface": "#1e0a10",
      "--color-gold": "#c9a84c",
      "--color-gold-light": "#e8c96d",
      "--color-text": "#f5ede8",
      "--color-text-muted": "#a07a80",
      "--color-border": "#3a1520",
      "--color-header-bg": "rgba(20,5,8,0.88)",
      "--color-bg-subtle": "#110406",
    }
  },
  {
    id: "forest",
    name: "أخضر زمردي",
    vars: {
      "--color-primary": "#0a1f14",
      "--color-surface": "#0f2b1a",
      "--color-gold": "#c9a84c",
      "--color-gold-light": "#e8c96d",
      "--color-text": "#f0ede4",
      "--color-text-muted": "#7aa88a",
      "--color-border": "#1a3a28",
      "--color-header-bg": "rgba(10,31,20,0.85)",
      "--color-bg-subtle": "#07160e",
    }
  },
  {
    id: "charcoal",
    name: "أسود داكن",
    vars: {
      "--color-primary": "#111111",
      "--color-surface": "#1c1c1c",
      "--color-gold": "#d4a853",
      "--color-gold-light": "#e8c070",
      "--color-text": "#f2ede4",
      "--color-text-muted": "#888888",
      "--color-border": "#2a2a2a",
      "--color-header-bg": "rgba(17,17,17,0.88)",
      "--color-bg-subtle": "#0a0a0a",
    }
  },
  {
    id: "warm-brown",
    name: "بني دافئ",
    vars: {
      "--color-primary": "#13100a",
      "--color-surface": "#1e1810",
      "--color-gold": "#d4a843",
      "--color-gold-light": "#e8c060",
      "--color-text": "#f5efe0",
      "--color-text-muted": "#9a8a6a",
      "--color-border": "#2e2416",
      "--color-header-bg": "rgba(19,16,10,0.88)",
      "--color-bg-subtle": "#0c0a06",
    }
  },
  {
    id: "night-forest",
    name: "غابة ليلية",
    vars: {
      "--color-primary": "#050f09",
      "--color-surface": "#0a1a10",
      "--color-gold": "#d4a843",
      "--color-gold-light": "#e8c060",
      "--color-text": "#ecf5ec",
      "--color-text-muted": "#5a8a6a",
      "--color-border": "#102818",
      "--color-header-bg": "rgba(5,15,9,0.90)",
      "--color-bg-subtle": "#030805",
    }
  },
  {
    id: "dark-teal",
    name: "أزرق مخضر",
    vars: {
      "--color-primary": "#041210",
      "--color-surface": "#071e1b",
      "--color-gold": "#c9a84c",
      "--color-gold-light": "#e8c96d",
      "--color-text": "#edf5f4",
      "--color-text-muted": "#6a9a95",
      "--color-border": "#0f2e2a",
      "--color-header-bg": "rgba(4,18,16,0.88)",
      "--color-bg-subtle": "#020a09",
    }
  },
  {
    id: "dark-olive",
    name: "زيتوني داكن",
    vars: {
      "--color-primary": "#0f0f0c",
      "--color-surface": "#18180f",
      "--color-gold": "#c4a55a",
      "--color-gold-light": "#dcc070",
      "--color-text": "#ede8db",
      "--color-text-muted": "#888070",
      "--color-border": "#252518",
      "--color-header-bg": "rgba(15,15,12,0.90)",
      "--color-bg-subtle": "#090907",
    }
  },
  {
    id: "light",
    name: "فاتح (Light Mode)",
    vars: {
      "--color-primary": "#f8f9fa",
      "--color-surface": "#ffffff",
      "--color-gold": "#b8953b",
      "--color-gold-light": "#c9a84c",
      "--color-text": "#1a202c",
      "--color-text-muted": "#4a5568",
      "--color-border": "#e2e8f0",
      "--color-header-bg": "rgba(248,249,250,0.88)",
      "--color-bg-subtle": "#edf2f7",
    }
  }
];

export function ThemeSelector() {
  const [activeTheme, setActiveTheme] = useState("blue");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const theme = THEMES.find((t) => t.id === activeTheme);
    if (!theme) return;
    
    // Apply CSS variables to root to override globals.css dynamically
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [activeTheme]);

  return (
    <div className="fixed bottom-4 left-4 z-[9999]" dir="rtl">
      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 w-48 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-2 shadow-[0_12px_36px_var(--color-card-shadow)] backdrop-blur-xl transition-all">
          <p className="mb-2 px-2 pt-1 text-xs font-bold text-[var(--color-text-muted)]">معاينة الألوان للعميل</p>
          <div className="flex flex-col gap-1">
            {THEMES.map((t) => (
              <button
                type="button"
                key={t.id}
                onClick={() => {
                  setActiveTheme(t.id);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-[var(--color-bg)] ${
                  activeTheme === t.id ? "text-[var(--color-gold)] font-bold bg-[var(--color-bg)]" : "text-[var(--color-text)]"
                }`}
              >
                <span 
                  className="h-3 w-3 rounded-full border border-[var(--color-border)] shadow-sm" 
                  style={{ backgroundColor: t.vars["--color-primary"] }} 
                />
                {t.name}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-text)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[var(--color-gold)] focus:outline-none"
        aria-label="خيارات الألوان"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>
    </div>
  );
}
