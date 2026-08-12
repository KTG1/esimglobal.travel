import { notFound } from "next/navigation";
import { countryPages, countrySlugs } from "../countryPages";
import { HeroArrivalBrief, HeroQuickAnswer } from "../CountryHeroContent";
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
    <div className="pageShell countryPage">
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
          <h1 id={heroTitleId}>Find the best eSIM for {destination.name}.</h1>
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
        <div><p className="eyebrow">BEFORE YOU CONNECT</p><h2 id={essentialsTitleId}>Using a travel eSIM in {destination.name}</h2></div>
        <dl><div><dt>Networks</dt><dd>{destination.networks}</dd></div><div><dt>Coverage</dt><dd>{destination.coverage}</dd></div><div><dt>Installation</dt><dd>Install on Wi-Fi before departure, then activate the data line after arrival.</dd></div></dl>
      </section>

      <section className="franceFaq" aria-labelledby={faqId}>
        <header><div><p className="eyebrow">{destination.name.toUpperCase()} ESIM FAQ</p><h2 id={faqId}>Questions before you connect</h2></div><span>07 practical answers</span></header>
        <div className="faqList">
          <details open><summary><span>01</span>What is the best eSIM for {destination.name}?<i aria-hidden="true">+</i></summary><p>The best option depends on your trip length, data use, budget and required features. Compare coverage, allowance, validity, hotspot rules and support—not only price.</p></details>
          <details><summary><span>02</span>How much data do I need?<i aria-hidden="true">+</i></summary><p>Light navigation and messaging may use 1–3 GB per week. Regular social media, video calls or hotspot use can require 5–10 GB or an unlimited plan.</p></details>
          <details><summary><span>03</span>When should I install and activate it?<i aria-hidden="true">+</i></summary><p>Install over Wi-Fi before departure, but check when validity begins. Some plans activate after connecting locally; others begin at installation or purchase.</p></details>
          <details><summary><span>04</span>Can I keep my regular number?<i aria-hidden="true">+</i></summary><p>Yes. Use the travel eSIM for data while keeping your primary SIM available for calls or messages, subject to your home carrier’s roaming charges.</p></details>
          <details><summary><span>05</span>Are calls and SMS included?<i aria-hidden="true">+</i></summary><p>Many travel eSIMs are data-only. You can use WhatsApp, FaceTime or Signal, or select a plan that explicitly includes a phone number.</p></details>
          <details><summary><span>06</span>Can I share data through a hotspot?<i aria-hidden="true">+</i></summary><p>This depends on the product. Fixed-data plans often allow tethering, while unlimited plans may impose a daily sharing limit.</p></details>
          <details><summary><span>07</span>Will this eSIM work in nearby countries?<i aria-hidden="true">+</i></summary><p>A country-only plan may stop working at the border. For a multi-country itinerary, compare regional plans and verify every destination in the coverage list.</p></details>
        </div>
      </section>
      </main>
      <SiteFooter />
    </div>
  );
}
