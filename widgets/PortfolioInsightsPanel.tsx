"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Search, X } from "lucide-react";
import { portfolioInsights, searchInsights, type PortfolioInsight } from "@/utils/portfolioInsights";

const categoryLabels: Record<PortfolioInsight["category"], string> = {
  design: "Design",
  content: "Content",
  tech: "Tech",
  ux: "UX",
  senior: "Senior",
};

function InsightCard({ insight }: { insight: PortfolioInsight }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="rounded-xl border border-[var(--border-primary)] bg-[var(--surface-elevated)] p-4 text-left transition-colors hover:border-[var(--border-secondary)]"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-full bg-[var(--surface-tertiary)] px-2 py-0.5 text-xs font-medium text-[var(--text-tertiary)]">
          {categoryLabels[insight.category]}
        </span>
      </div>
      <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-1.5">
        {insight.title}
      </h4>
      <p className="text-body text-[var(--text-secondary)] leading-relaxed text-sm">
        {insight.body}
      </p>
    </motion.article>
  );
}

export default function PortfolioInsightsPanel() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchInsights(query), [query]);

  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open]);

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 left-4 z-40 flex items-center gap-2 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-elevated)] px-3 py-2.5 text-[var(--text-secondary)] shadow-lg transition-colors hover:border-[var(--border-secondary)] hover:text-[var(--text-primary)] sm:bottom-6 sm:left-6 sm:px-4 sm:py-3 md:bottom-8 md:left-8"
        aria-label="Open portfolio ideas and senior dev standards"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
      >
        <Globe className="h-5 w-5 shrink-0" aria-hidden />
        <span className="hidden text-sm font-medium sm:inline">Portfolio insights</span>
      </motion.button>

      {/* Panel overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              role="presentation"
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-label="Portfolio ideas and senior dev standards"
              className="fixed inset-x-4 top-1/2 z-50 mx-auto max-h-[85vh] w-full max-w-lg -translate-y-1/2 overflow-hidden rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-primary)] shadow-2xl sm:inset-x-auto sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:max-w-xl"
              initial={{ opacity: 0, scale: 0.96, y: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: "-50%" }}
              exit={{ opacity: 0, scale: 0.96, y: "-50%" }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="flex items-center justify-between border-b border-[var(--border-primary)] p-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-[var(--accent-primary)]" aria-hidden />
                  <h2 className="font-semibold text-[var(--text-primary)]">
                    Portfolio ideas & senior standards
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-tertiary)] hover:text-[var(--text-primary)]"
                  aria-label="Close panel"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="border-b border-[var(--border-muted)] px-4 py-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" aria-hidden />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search ideas (e.g. outcomes, animation, SEO…)"
                    className="w-full rounded-xl border border-[var(--border-primary)] bg-[var(--surface-tertiary)] py-2.5 pl-10 pr-4 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/20"
                    aria-label="Search portfolio insights"
                  />
                </div>
              </div>

              <div className="overflow-y-auto p-4 max-h-[calc(85vh-140px)]">
                <p className="mb-3 text-xs text-[var(--text-muted)]">
                  {results.length} {results.length === 1 ? "idea" : "ideas"}
                </p>
                <motion.div
                  className="grid gap-3 sm:gap-4"
                  layout
                >
                  <AnimatePresence mode="popLayout">
                    {results.length > 0 ? (
                      results.map((insight) => (
                        <InsightCard key={insight.id} insight={insight} />
                      ))
                    ) : (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-8 text-center text-[var(--text-muted)] text-sm"
                      >
                        No matches. Try &quot;senior&quot;, &quot;animation&quot;, or &quot;SEO&quot;.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
