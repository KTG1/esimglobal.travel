export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="/" aria-label="eSIM Global home">
          <span className="brandMark" aria-hidden="true">e</span>
          <span>eSIM GLOBAL</span>
        </a>
        <span className="status"><i /> Preparing for departure</span>
      </header>

      <section className="hero">
        <div className="route" aria-hidden="true">
          <span className="point pointA" />
          <span className="point pointB" />
          <span className="plane">✦</span>
        </div>

        <p className="eyebrow">ESIMGLOBAL.TRAVEL / ARRIVING SOON</p>
        <h1>Land connected.</h1>
        <p className="intro">
          Mobile data for the places you are going—ready before you leave.
          No roaming surprises, no plastic SIM cards, no airport queues.
        </p>

        <div className="availability" aria-label="Service highlights">
          <div><strong>190+</strong><span>destinations</span></div>
          <div><strong>5 min</strong><span>to get online</span></div>
          <div><strong>0</strong><span>physical SIMs</span></div>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} eSIM Global</span>
        <span>Istanbul · Everywhere</span>
      </footer>
    </main>
  );
}
