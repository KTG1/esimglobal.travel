import WorldMap from "./WorldMap";

function BrandLogo({ inverted = false }) {
  return (
    <span className={`brandLogo ${inverted ? "inverted" : ""}`}>
      <span className="logoGlyph" aria-hidden="true"><b>e</b><i /></span>
      <span className="logoType">
        <strong>eSIM</strong><span>GLOBAL</span><small>.TRAVEL</small>
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="siteHeader">
        <a href="/" aria-label="eSIM Global Travel home"><BrandLogo /></a>
        <nav aria-label="Main navigation">
          <a href="#compare">Compare plans</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
        </nav>
        <a className="headerCta" href="#compare">Find an eSIM <span aria-hidden="true">↘</span></a>
      </header>

      <section className="hero">
        <div className="route" aria-hidden="true">
          <span className="point pointA" />
          <span className="point pointB" />
          <span className="plane">✦</span>
        </div>

        <p className="eyebrow">COMPARE TRAVEL ESIMS ACROSS 190+ DESTINATIONS</p>
        <h1>Global eSIM plans for international travel.</h1>
        <p className="heroLead">
          Compare prepaid travel eSIM providers, data allowances, validity and prices for countries worldwide. Find the best international eSIM for your trip and connect as soon as you land—without roaming fees or a physical SIM card.
        </p>
        <WorldMap />
        <p className="intro">
          Explore local, regional and global eSIM data plans from established providers. Choose your destination to compare coverage, 4G and 5G availability, plan duration and price side by side.
        </p>

        <div className="availability" id="how-it-works" aria-label="How eSIM Global works">
          <div><strong>01</strong><span>Choose a destination</span></div>
          <div><strong>02</strong><span>Compare eSIM plans</span></div>
          <div><strong>03</strong><span>Install before landing</span></div>
        </div>
      </section>

      <footer className="siteFooter" id="about">
        <div className="footerLead">
          <a href="#top" aria-label="Back to eSIM Global Travel home"><BrandLogo inverted /></a>
          <p>One clear view of the world’s travel eSIM options.</p>
          <a className="footerCta" href="#compare">Compare your destination <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footerNav">
          <div>
            <h2>Explore</h2>
            <a href="#compare">Compare eSIM plans</a>
            <a href="#how-it-works">How travel eSIMs work</a>
            <a href="#compare">Global coverage</a>
          </div>
          <div>
            <h2>Popular regions</h2>
            <a href="#compare">Europe eSIMs</a>
            <a href="#compare">Asia eSIMs</a>
            <a href="#compare">North America eSIMs</a>
          </div>
          <div>
            <h2>Marketplace</h2>
            <span>Independent comparisons</span>
            <span>Provider terms apply</span>
            <span>Prices shown in USD</span>
          </div>
        </div>
        <div className="footerBase">
          <span>© {new Date().getFullYear()} eSIM Global Travel</span>
          <span>Compare before you connect.</span>
          <span>Istanbul · Worldwide</span>
        </div>
      </footer>
    </main>
  );
}
