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
        <section className="availability" id="how-it-works" aria-labelledby="how-it-works-title">
          <header className="availabilityHeading">
            <p className="availabilityKicker"><span aria-hidden="true">✦</span> Your eSIM departure brief</p>
            <h2 id="how-it-works-title">From destination to data in three clear steps.</h2>
            <p>Compare established providers, choose the right allowance for your trip, and arrive ready to connect—without roaming surprises.</p>
          </header>
          <ol>
            <li>
              <div className="availabilityIcon" aria-hidden="true">
                <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="10"/><path d="M6.5 15.5h19M16 6c3.2 3 4.7 6.3 4.7 10S19.2 23 16 26c-3.2-3-4.7-6.3-4.7-10S12.8 9 16 6Z"/></svg>
              </div>
              <span className="availabilityStep">01 / Destination</span>
              <h3>Choose where you’re landing</h3>
              <p>Search the map by continent or country and see plans built for your route.</p>
            </li>
            <li>
              <div className="availabilityIcon" aria-hidden="true">
                <svg viewBox="0 0 32 32"><path d="M7 9h18M7 16h18M7 23h18"/><circle cx="12" cy="9" r="2.5"/><circle cx="21" cy="16" r="2.5"/><circle cx="15" cy="23" r="2.5"/></svg>
              </div>
              <span className="availabilityStep">02 / Compare</span>
              <h3>Compare plans side by side</h3>
              <p>Weigh price, data, validity, networks and included features in one view.</p>
            </li>
            <li>
              <div className="availabilityIcon" aria-hidden="true">
                <svg viewBox="0 0 32 32"><rect x="9" y="4.5" width="14" height="23" rx="2.5"/><path d="M13 9.5h6M13 14h6M12 20l2.5 2.5L20 17"/></svg>
              </div>
              <span className="availabilityStep">03 / Connect</span>
              <h3>Install before you fly</h3>
              <p>Receive your digital eSIM, install on Wi-Fi, then activate after arrival.</p>
            </li>
          </ol>
          <footer className="availabilityFooter">
            <span>Instant digital delivery</span>
            <a href="#compare">Start with your destination <b aria-hidden="true">↗</b></a>
          </footer>
        </section>
      </div>
      </main>
      <SiteFooter />
    </div>
  );
}
