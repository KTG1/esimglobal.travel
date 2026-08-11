import FrancePlans from "./FrancePlans";
import { SiteFooter, SiteHeader } from "../SiteChrome";

export const metadata = {
  title: "Best eSIM for France: Compare Data Plans & Prices | eSIM Global",
  description: "Compare travel eSIM plans for France by provider, data, validity, network and price. Find prepaid France eSIM options for your trip.",
  alternates: { canonical: "https://esimglobal.travel/france/" },
};

export default function FrancePage() {
  return (
    <main className="countryPage">
      <SiteHeader />
      <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Global eSIMs</a><span>/</span><a href="/#compare">Europe</a><span>/</span><span>France</span></nav>

      <section className="franceHero">
        <div className="franceHeroCopy">
          <div className="franceFlag" aria-label="Flag of France"><i /><i /><i /></div>
          <p className="eyebrow">FRANCE ESIM COMPARISON / UPDATED AUGUST 2026</p>
          <h1>Find the best eSIM for France.</h1>
          <p>Compare prepaid France eSIM plans from leading travel providers. Review mobile data, validity, 4G and 5G coverage, included features and price before you fly.</p>
          <a href="#plans">Compare France plans <span aria-hidden="true">↓</span></a>
        </div>
        <div className="franceVisual" aria-hidden="true">
          <div className="parisStamp"><span>PAR</span><strong>48.8566° N</strong><small>02.3522° E</small></div>
          <div className="eiffelMark"><i /><i /><i /><i /></div>
          <span className="routeLabel">CDG → Connected</span>
        </div>
      </section>

      <FrancePlans />

      <section className="franceEssentials">
        <div><p className="eyebrow">BEFORE YOU CONNECT</p><h2>Using a travel eSIM in France</h2></div>
        <dl><div><dt>Networks</dt><dd>Orange, SFR, Bouygues Telecom and Free Mobile operate nationwide networks.</dd></div><div><dt>Coverage</dt><dd>4G is widely available; 5G availability depends on location and the selected plan.</dd></div><div><dt>Installation</dt><dd>Install on Wi-Fi before departure, then activate the data line after arrival.</dd></div></dl>
      </section>
      <SiteFooter />
    </main>
  );
}
