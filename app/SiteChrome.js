import { sitePath } from "./sitePath";

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
      <a href={sitePath("/")} aria-label="eSIM Global Travel home"><BrandLogo /></a>
      <nav aria-label="Main navigation">
        <a href={sitePath("/#compare")}>Compare plans</a>
        <a href={sitePath("/#how-it-works")}>How it works</a>
        <a href={sitePath("/#about")}>About</a>
      </nav>
      <a className="headerCta" href={sitePath("/#compare")}>Find an eSIM <span aria-hidden="true">↘</span></a>
    </header>
  );
}

const destinationGroups = {
  Europe: [{ name: "France", href: "/france/" }, { name: "Italy", href: "/italy/" }, { name: "Spain", href: "/spain/" }, { name: "Türkiye", href: "/turkey/" }],
  Asia: [{ name: "Japan", href: "/japan/" }, { name: "Türkiye", href: "/turkey/" }],
  "Europe & Asia": [{ name: "Türkiye", href: "/turkey/" }, { name: "France", href: "/france/" }, { name: "Italy", href: "/italy/" }, { name: "Spain", href: "/spain/" }, { name: "Japan", href: "/japan/" }],
  "North America": [{ name: "United States", href: "/united-states/" }],
};

export function CountryBreadcrumbs({ region, country }) {
  const regionalDestinations = destinationGroups[region] || [];
  const allDestinations = [{ name: "France", href: "/france/" }, { name: "Italy", href: "/italy/" }, { name: "Spain", href: "/spain/" }, { name: "Türkiye", href: "/turkey/" }, { name: "Japan", href: "/japan/" }, { name: "United States", href: "/united-states/" }];
  return (
    <nav className="breadcrumbs breadcrumbMenu" aria-label="Breadcrumb">
      <a href={sitePath("/")}>Global eSIMs</a><span>/</span>
      <details><summary>{region}<i aria-hidden="true">⌄</i></summary><div className="crumbPopover"><small>Browse this region</small>{regionalDestinations.map((item) => <a href={sitePath(item.href)} key={item.href}>{item.name}<b aria-hidden="true">↗</b></a>)}</div></details><span>/</span>
      <details><summary className="currentCrumb">{country}<i aria-hidden="true">⌄</i></summary><div className="crumbPopover countryPopover"><small>Switch destination</small>{allDestinations.map((item) => <a href={sitePath(item.href)} key={item.href} aria-current={item.name === country ? "page" : undefined}>{item.name}<b aria-hidden="true">↗</b></a>)}</div></details>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="siteFooter" id="about">
      <div className="footerLead">
        <a href={sitePath("/")} aria-label="eSIM Global Travel home"><BrandLogo inverted /></a>
        <p>One clear view of the world’s travel eSIM options.</p>
        <a className="footerCta" href={sitePath("/#compare")}>Compare your destination <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footerNav">
        <div><h2>Explore</h2><a href={sitePath("/#compare")}>Compare eSIM plans</a><a href={sitePath("/#how-it-works")}>How travel eSIMs work</a><a href={sitePath("/#compare")}>Global coverage</a></div>
        <div><h2>Popular countries</h2><a href={sitePath("/france/")}>France eSIMs</a><a href={sitePath("/italy/")}>Italy eSIMs</a><a href={sitePath("/spain/")}>Spain eSIMs</a><a href={sitePath("/turkey/")}>Türkiye eSIMs</a><a href={sitePath("/japan/")}>Japan eSIMs</a><a href={sitePath("/united-states/")}>United States eSIMs</a></div>
        <div><h2>Marketplace</h2><span>Independent comparisons</span><span>Provider terms apply</span><span>Prices shown in USD</span></div>
      </div>
      <div className="footerBase"><span>© {new Date().getFullYear()} eSIM Global Travel</span><span>Compare before you connect.</span><span>Istanbul · Worldwide</span></div>
    </footer>
  );
}
