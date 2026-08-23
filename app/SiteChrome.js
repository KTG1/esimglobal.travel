import { sitePath } from "./sitePath";
import { countryPages } from "./countryPages";

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
    <>
      <a className="skipLink" href="#main-content">Skip to main content</a>
      <header className="siteHeader">
        <a href={sitePath("/")} aria-label="eSIM Global Travel home"><BrandLogo /></a>
        <nav aria-label="Primary navigation">
          <ul>
            <li><a href={sitePath("/#compare")}>Compare plans</a></li>
            <li><a href={sitePath("/#how-it-works")}>How it works</a></li>
            <li><a href={sitePath("/#about")}>About</a></li>
          </ul>
        </nav>
        <a className="headerCta" href={sitePath("/#compare")}>Find an eSIM <span aria-hidden="true">↘</span></a>
      </header>
    </>
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
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbMenu">
        <li><a className="breadcrumbHome" href={sitePath("/")}>Global eSIMs</a></li>
        <li><details><summary>{region}<i aria-hidden="true">⌄</i></summary><div className="crumbPopover"><small>Browse this region</small>{regionalDestinations.map((item) => <a href={sitePath(item.href)} key={item.href}>{item.name}<b aria-hidden="true">↗</b></a>)}</div></details></li>
        <li><details><summary className="currentCrumb" aria-current="location">{country}<i aria-hidden="true">⌄</i></summary><div className="crumbPopover countryPopover"><small>Switch destination</small>{allDestinations.map((item) => <a href={sitePath(item.href)} key={item.href} aria-current={item.name === country ? "page" : undefined}>{item.name}<b aria-hidden="true">↗</b></a>)}</div></details></li>
      </ol>
    </nav>
  );
}

const footerDestinations = [
  { slug: "france", name: "France", region: "Europe" },
  ...Object.entries(countryPages).map(([slug, destination]) => ({ slug, name: destination.name, region: destination.region })),
];

export function SiteFooter({ region, country }) {
  const contextualDestinations = region
    ? footerDestinations.filter((item) => item.region === region && item.name !== country).slice(0, 6)
    : footerDestinations.filter((item) => ["France", "Japan", "United States", "Australia", "Brazil", "South Africa"].includes(item.name));
  const destinationTitle = region ? `${region} guides` : "Popular destinations";
  return (
    <footer className="siteFooter" id="about">
      <div className="footerLead">
        <a href={sitePath("/")} aria-label="eSIM Global Travel home"><BrandLogo inverted /></a>
        <p>Independent travel eSIM research, organized for clearer decisions.</p>
        <small className="footerCompanyDefinition">eSIM Global Travel is an Istanbul-based comparison publisher. We organize provider-published plan data, destination coverage and practical setup guidance for international travelers.</small>
        <a className="footerCta" href={sitePath("/#compare")}>Compare your destination <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footerNav">
        <nav aria-labelledby="footer-explore-title"><h2 id="footer-explore-title">Explore</h2><ul><li><a href={sitePath("/#compare")}>Compare eSIM plans</a></li><li><a href={sitePath("/#how-it-works")}>How travel eSIMs work</a></li><li><a href={sitePath("/#compare")}>Global coverage</a></li></ul></nav>
        <nav aria-labelledby="footer-countries-title"><h2 id="footer-countries-title">{destinationTitle}</h2><ul>{contextualDestinations.map((item) => <li key={item.slug}><a href={sitePath(`/${item.slug}/`)}>{item.name} eSIMs</a></li>)}</ul></nav>
        <section aria-labelledby="footer-marketplace-title"><h2 id="footer-marketplace-title">Marketplace</h2><ul><li>Independent comparisons</li><li>Provider terms apply</li><li>Prices shown in USD</li></ul></section>
      </div>
      <div className="footerBase"><span>© {new Date().getFullYear()} eSIM Global Travel</span><span>Compare before you connect.</span><span>Istanbul · Worldwide</span></div>
    </footer>
  );
}
