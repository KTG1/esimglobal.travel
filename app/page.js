import WorldMap from "./WorldMap";
import EsimGuide from "./EsimGuide";
import { HeadingReadMore, HeadingSignal } from "./EditorialHeading";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export default function Home() {
  return (
    <div className="pageShell" id="top">
      <SiteHeader />
      <main id="main-content">
      <div className="hero">
        <div className="route" aria-hidden="true">
          <span className="point pointA" />
          <span className="point pointB" />
          <span className="plane">✦</span>
        </div>

        <p className="eyebrow">COMPARE TRAVEL ESIMS ACROSS 190+ DESTINATIONS</p>
        <h1><HeadingSignal />Global eSIM plans for international travel.</h1>
        <HeadingReadMore className="heroLead" href="#compare" label="Explore the map">
          Compare prepaid travel eSIM providers, data allowances, validity and prices for countries worldwide. Find the best international eSIM for your trip and connect as soon as you land—without roaming fees or a physical SIM card.
        </HeadingReadMore>
        <WorldMap />
        <EsimGuide />
        <p className="intro">
          Explore local, regional and global eSIM data plans from established providers. Choose your destination to compare coverage, 4G and 5G availability, plan duration and price side by side.
        </p>

        <section className="availability" id="how-it-works" aria-labelledby="how-it-works-title">
          <h2 className="srOnly" id="how-it-works-title">How eSIM Global works</h2>
          <ol><li><strong>01</strong><span>Choose a destination</span></li><li><strong>02</strong><span>Compare eSIM plans</span></li><li><strong>03</strong><span>Install before landing</span></li></ol>
        </section>
      </div>
      </main>
      <SiteFooter />
    </div>
  );
}
