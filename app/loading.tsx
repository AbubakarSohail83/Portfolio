export default function Loading() {
  return (
    <main className="portfolio-loading" aria-label="Loading portfolio">
      <div className="portfolio-loading__shell">
        <div className="portfolio-loading__nav" />
        <div className="portfolio-loading__grid">
          <div className="portfolio-loading__copy">
            <div className="skeleton skeleton--eyebrow" />
            <div className="skeleton skeleton--title" />
            <div className="skeleton skeleton--title skeleton--short" />
            <div className="skeleton skeleton--line" />
            <div className="skeleton skeleton--line skeleton--mid" />
          </div>
          <div className="portfolio-loading__card">
            <div className="skeleton skeleton--media" />
            <div className="skeleton skeleton--line" />
            <div className="skeleton skeleton--line skeleton--short" />
          </div>
        </div>
      </div>
    </main>
  );
}
