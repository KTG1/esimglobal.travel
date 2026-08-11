import WorldMap from "./WorldMap";
import EsimGuide from "./EsimGuide";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

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
        <EsimGuide />
        <p className="intro">
          Explore local, regional and global eSIM data plans from established providers. Choose your destination to compare coverage, 4G and 5G availability, plan duration and price side by side.
        </p>

        <div className="availability" id="how-it-works" aria-label="How eSIM Global works">
          <div><strong>01</strong><span>Choose a destination</span></div>
          <div><strong>02</strong><span>Compare eSIM plans</span></div>
          <div><strong>03</strong><span>Install before landing</span></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
