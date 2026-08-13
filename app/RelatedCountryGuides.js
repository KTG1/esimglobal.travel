import Link from "next/link";
import { countryPages } from "./countryPages";
import { HeadingReadMore, HeadingSignal } from "./EditorialHeading";
import { francePlans } from "./france/plans";

const franceGuide = {
  slug: "france",
  name: "France",
  flag: "🇫🇷",
  code: "FR",
  region: "Europe",
  city: "Paris",
  networks: "Orange, SFR, Bouygues Telecom and Free Mobile",
  plans: francePlans,
};

const countryGuides = [
  franceGuide,
  ...Object.entries(countryPages).map(([slug, destination]) => ({ slug, ...destination })),
];

function operatorNames(text) {
  return text
    .replace(/ operate.*$/i, "")
    .replace(/ provide.*$/i, "")
    .replace(/ and (?=[^,]+$)/, " · ")
    .replaceAll(", ", " · ");
}

export default function RelatedCountryGuides({ currentCountry }) {
  const relatedGuides = countryGuides.filter((guide) => guide.name !== currentCountry);
  const headingId = `${currentCountry.toLowerCase().replaceAll(" ", "-")}-related-guides-title`;

  return (
    <section className="relatedCountryGuides" id="related-destinations" aria-labelledby={headingId}>
      <header>
        <div><p className="eyebrow">CONTINUE YOUR ROUTE</p><h2 id={headingId}><HeadingSignal />Compare eSIMs for other destinations</h2><HeadingReadMore href="#top" label="Back to top">Planning another stop? Open a country guide to compare local networks, plan allowances, validity and preview prices.</HeadingReadMore></div>
        <span className="headingMetric">06 country guides · worldwide routes</span>
      </header>
      <nav aria-label={`Other country eSIM guides from ${currentCountry}`}>
        <ul>
          {relatedGuides.map((guide) => {
            const startingPrice = Math.min(...guide.plans.map((plan) => plan.price));
            return (
              <li key={guide.slug}>
                <Link href={`/${guide.slug}/`} aria-label={`Compare eSIM plans for ${guide.name}`}>
                  <span className="relatedCountryFlag" role="img" aria-label={`Flag of ${guide.name}`}>{guide.flag}</span>
                  <span className="relatedCountryCode">{guide.code}</span>
                  <span className="relatedCountryRegion">{guide.region}</span>
                  <strong>{guide.name}</strong>
                  <small>{guide.city} connection guide</small>
                  <span className="relatedCountryNetworks">{operatorNames(guide.networks)}</span>
                  <span className="relatedCountryPrice"><small>Plans from</small><b>${startingPrice.toFixed(2)}</b></span>
                  <span className="relatedCountryAction">Compare {guide.name} <i aria-hidden="true">↗</i></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
