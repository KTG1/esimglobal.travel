import FrancePlans, { francePlans, HeroPlanStrip } from "./FrancePlans";
import { CountryBreadcrumbs, SiteFooter, SiteHeader } from "../SiteChrome";

export const metadata = {
  title: "Best eSIM for France: Compare Data Plans & Prices | eSIM Global",
  description: "Compare travel eSIM plans for France by provider, data, validity, network and price. Find prepaid France eSIM options for your trip.",
  alternates: { canonical: "https://esimglobal.travel/france/" },
};

export default function FrancePage() {
  return (
    <main className="countryPage">
      <SiteHeader />
      <CountryBreadcrumbs region="Europe" country="France" />

      <section className="franceHero franceDestinationHero">
        <div className="franceHeroCopy">
          <div className="franceFlag" aria-label="Flag of France"><i /><i /><i /></div>
          <p className="eyebrow">FRANCE ESIM COMPARISON / UPDATED AUGUST 2026</p>
          <h1>Find the best eSIM for France.</h1>
          <p>Compare prepaid France eSIM plans from leading travel providers. Review mobile data, validity, 4G and 5G coverage, included features and price before you fly.</p>
          <a href="#plans">Compare France plans <span aria-hidden="true">↓</span></a>
        </div>
        <div className="franceVisual">
          <div className="parisStamp"><span>PAR</span><strong>48.8566° N</strong><small>02.3522° E</small></div>
          <div className="eiffelMark"><i /><i /><i /><i /></div>
          <aside className="heroArrivalBrief"><header><p>ARRIVAL BRIEF</p><span>03 essentials</span></header><dl><div><dt>Local networks</dt><dd>Orange · SFR · Bouygues · Free</dd><i aria-hidden="true">↗</i></div><div><dt>Expected speed</dt><dd>4G / 5G</dd><i aria-hidden="true">↗</i></div><div><dt>Setup</dt><dd>Install before departure</dd><i aria-hidden="true">↗</i></div></dl><a href="#country-essentials">Read the connection guide <span aria-hidden="true">→</span></a></aside>
          <span className="routeLabel">CDG → Connected</span>
        </div>
        <HeroPlanStrip country="France" plans={francePlans} />
      </section>

      <FrancePlans />

      <section className="franceEssentials" id="country-essentials">
        <div><p className="eyebrow">BEFORE YOU CONNECT</p><h2>Using a travel eSIM in France</h2></div>
        <dl><div><dt>Networks</dt><dd>Orange, SFR, Bouygues Telecom and Free Mobile operate nationwide networks.</dd></div><div><dt>Coverage</dt><dd>4G is widely available; 5G availability depends on location and the selected plan.</dd></div><div><dt>Installation</dt><dd>Install on Wi-Fi before departure, then activate the data line after arrival.</dd></div></dl>
      </section>

      <section className="franceFaq" aria-labelledby="france-faq-title">
        <header>
          <div><p className="eyebrow">FRANCE ESIM FAQ</p><h2 id="france-faq-title">Questions before you connect</h2></div>
          <span>07 practical answers</span>
        </header>
        <div className="faqList">
          <details open><summary><span>01</span>What is the best eSIM for France?<i aria-hidden="true">+</i></summary><p>The best France eSIM depends on your trip length, expected data use, budget and required features. Compare network coverage, allowance, validity, hotspot rules and support—not only the headline price.</p></details>
          <details><summary><span>02</span>How much data do I need for a trip to France?<i aria-hidden="true">+</i></summary><p>Light navigation and messaging may use 1–3 GB per week. Regular social media, video, calls or hotspot use can require 5–10 GB or an unlimited plan. Check any fair-use or speed policy attached to unlimited data.</p></details>
          <details><summary><span>03</span>When should I install and activate my France eSIM?<i aria-hidden="true">+</i></summary><p>Install the eSIM over Wi-Fi before departure, but confirm when its validity begins. Many travel plans activate after connecting to a supported French network; others may begin at installation or purchase.</p></details>
          <details><summary><span>04</span>Can I keep using WhatsApp with my regular number?<i aria-hidden="true">+</i></summary><p>Yes. Installing a travel eSIM does not normally change the phone number connected to WhatsApp. Use the eSIM for mobile data and keep your primary SIM enabled for messages if needed.</p></details>
          <details><summary><span>05</span>Do France eSIM plans include calls and SMS?<i aria-hidden="true">+</i></summary><p>Many travel eSIMs are data-only. Calls and messages can still work through apps such as WhatsApp, FaceTime or Signal. Choose a plan with a phone number only when traditional calls or SMS are required.</p></details>
          <details><summary><span>06</span>Can I share France eSIM data through a hotspot?<i aria-hidden="true">+</i></summary><p>Hotspot sharing depends on the provider and product. Fixed-data plans often permit tethering, while unlimited plans may apply a daily sharing limit. Verify the plan terms before purchase.</p></details>
          <details><summary><span>07</span>Will one France eSIM work elsewhere in Europe?<i aria-hidden="true">+</i></summary><p>A France-only plan may stop working after you cross the border. If your itinerary includes multiple countries, choose a Europe regional eSIM and check that every destination is included in its coverage list.</p></details>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
