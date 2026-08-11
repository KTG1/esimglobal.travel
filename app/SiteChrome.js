export function BrandLogo({ inverted = false }) {
  return (
    <span className={`brandLogo ${inverted ? "inverted" : ""}`}>
      <span className="logoGlyph" aria-hidden="true"><b>e</b><i /></span>
      <span className="logoType"><strong>eSIM</strong><span>GLOBAL</span><small>.TRAVEL</small></span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <a href="/" aria-label="eSIM Global Travel home"><BrandLogo /></a>
      <nav aria-label="Main navigation">
        <a href="/#compare">Compare plans</a>
        <a href="/#how-it-works">How it works</a>
        <a href="/#about">About</a>
      </nav>
      <a className="headerCta" href="/#compare">Find an eSIM <span aria-hidden="true">↘</span></a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="siteFooter" id="about">
      <div className="footerLead">
        <a href="/" aria-label="eSIM Global Travel home"><BrandLogo inverted /></a>
        <p>One clear view of the world’s travel eSIM options.</p>
        <a className="footerCta" href="/#compare">Compare your destination <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footerNav">
        <div><h2>Explore</h2><a href="/#compare">Compare eSIM plans</a><a href="/#how-it-works">How travel eSIMs work</a><a href="/#compare">Global coverage</a></div>
        <div><h2>Popular regions</h2><a href="/france/">France eSIMs</a><a href="/#compare">Europe eSIMs</a><a href="/#compare">Asia eSIMs</a></div>
        <div><h2>Marketplace</h2><span>Independent comparisons</span><span>Provider terms apply</span><span>Prices shown in USD</span></div>
      </div>
      <div className="footerBase"><span>© {new Date().getFullYear()} eSIM Global Travel</span><span>Compare before you connect.</span><span>Istanbul · Worldwide</span></div>
    </footer>
  );
}
