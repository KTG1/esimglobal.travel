import { notFound } from "next/navigation";
import { countryPages, countrySlugs } from "../countryPages";
import { HeroArrivalBrief, HeroQuickAnswer } from "../CountryHeroContent";
import CountryFaqTabs from "../CountryFaqTabs";
import { HeadingReadMore, HeadingSignal } from "../EditorialHeading";
import RelatedCountryGuides from "../RelatedCountryGuides";
import FrancePlans, { HeroPlanStrip } from "../france/FrancePlans";
import { CountryBreadcrumbs, SiteFooter, SiteHeader } from "../SiteChrome";
import { sitePath, siteUrl } from "../sitePath";

export function generateStaticParams() {
  return countrySlugs.map((country) => ({ country }));
}

export async function generateMetadata({ params }) {
  const { country } = await params;
  const destination = countryPages[country];
  if (!destination) return {};
  return {
    title: `Best eSIM for ${destination.name}: Compare Plans & Prices | eSIM Global`,
    description: `Compare travel eSIM plans for ${destination.name} by provider, data, validity, network and price. Find the right prepaid eSIM for your trip.`,
    alternates: { canonical: `https://esimglobal.travel/${country}/` },
    openGraph: {
      title: `Best eSIM for ${destination.name}: Compare Plans & Prices`,
      description: `Compare prepaid ${destination.name} eSIM plans, coverage, data, validity and prices before you travel.`,
      url: siteUrl(`/${country}/`),
      siteName: "eSIM Global Travel",
      type: "website",
      images: [{ url: siteUrl(destination.heroImage), width: destination.heroWidth, height: destination.heroHeight, alt: destination.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Best eSIM for ${destination.name}`,
      description: `Compare prepaid ${destination.name} eSIM plans, coverage, data and prices.`,
      images: [siteUrl(destination.heroImage)],
    },
  };
}

export default async function CountryPage({ params }) {
  const { country } = await params;
  const destination = countryPages[country];
  if (!destination) notFound();
  const faqId = `${country}-faq-title`;
  const heroTitleId = `${country}-hero-title`;
  const essentialsTitleId = `${country}-essentials-title`;

  return (
    <div className="pageShell countryPage" id="top">
      <SiteHeader />
      <main id="main-content">
      <CountryBreadcrumbs region={destination.region} country={destination.name} />
      <section
        className="franceHero countryHero countryDestinationHero"
        aria-labelledby={heroTitleId}
        style={{
          backgroundImage: `url("${sitePath(destination.heroImage)}")`,
          "--hero-position": destination.heroPosition,
        }}
      >
        <div className="franceHeroCopy">
          <span className="countryEmojiFlag" role="img" aria-label={`Flag of ${destination.name}`}>{destination.flag}</span>
          <p className="eyebrow">{destination.name.toUpperCase()} ESIM COMPARISON / UPDATED <time dateTime="2026-08-12">AUGUST 2026</time></p>
          <h1 id={heroTitleId}><HeadingSignal />Find the best eSIM for {destination.name}.</h1>
          <HeroQuickAnswer country={destination.name} plan={destination.plans[0]} summary={destination.heroSummary} reason={destination.pickReason} />
        </div>
        <figure className="franceVisual genericCountryVisual" data-code={destination.code}>
          <figcaption className="srOnly">{destination.heroAlt}</figcaption>
          <div className="parisStamp" aria-label={`${destination.city}: ${destination.coordinates.join(", ")}`}><span>{destination.city.slice(0, 3).toUpperCase()}</span><strong>{destination.coordinates[0]}</strong><small>{destination.coordinates[1]}</small></div>
          <div className="countrySignal" aria-hidden="true"><i /><i /><i /><i /></div>
          <HeroArrivalBrief country={destination.name} networks={destination.networks} coverage={destination.coverage} network={destination.plans[0].network} titleId={`${country}-arrival-title`} />
          <span className="routeLabel">{destination.airport} → Connected</span>
        </figure>
        <HeroPlanStrip country={destination.name} plans={destination.plans} />
      </section>

      <FrancePlans country={destination.name} plans={destination.plans} />

      <section className="franceEssentials" id="country-essentials" aria-labelledby={essentialsTitleId}>
        <div><p className="eyebrow">BEFORE YOU CONNECT</p><h2 id={essentialsTitleId}><HeadingSignal />Using a travel eSIM in {destination.name}</h2><HeadingReadMore href="#country-faq" label="Read the FAQs">Review local operators, expected coverage and the safest time to install and activate your travel eSIM.</HeadingReadMore></div>
        <dl><div><dt>Networks</dt><dd>{destination.networks}</dd></div><div><dt>Coverage</dt><dd>{destination.coverage}</dd></div><div><dt>Installation</dt><dd>Install on Wi-Fi before departure, then activate the data line after arrival.</dd></div></dl>
      </section>

      <section className="franceFaq" id="country-faq" aria-labelledby={faqId}>
        <header><div><p className="eyebrow">{destination.name.toUpperCase()} ESIM FAQ</p><h2 id={faqId}><HeadingSignal />Questions before you connect</h2><HeadingReadMore href="#related-destinations" label="More destinations">Check plan choice, setup, calls, hotspot use and regional coverage before purchasing.</HeadingReadMore></div><span>07 practical answers</span></header>
        <CountryFaqTabs country={destination.name} />
      </section>
      <RelatedCountryGuides currentCountry={destination.name} />
      </main>
      <SiteFooter />
    </div>
  );
}
