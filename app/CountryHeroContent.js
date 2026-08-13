import { HeadingReadMore } from "./EditorialHeading";

export function HeroQuickAnswer({ country, plan, summary, reason }) {
  const headingId = `${country.toLowerCase().replaceAll(" ", "-")}-quick-answer`;

  return (
    <>
      <HeadingReadMore className="heroIntro" href="#plans" label="Compare plans">{summary}</HeadingReadMore>
      <section className="heroQuickAnswer" aria-labelledby={headingId}>
        <header>
          <span>Quick answer</span>
          <small>Best overall for most travelers</small>
        </header>
        <div className="heroQuickAnswerTitle">
          <h2 id={headingId}>Our {country} pick: {plan.brand}</h2>
          <strong>${plan.price.toFixed(2)}</strong>
        </div>
        <dl aria-label={`${plan.brand} ${country} plan summary`}>
          <div><dt>Data</dt><dd>{plan.dataLabel}</dd></div>
          <div><dt>Validity</dt><dd>{plan.days} days</dd></div>
          <div><dt>Network</dt><dd>{plan.network}</dd></div>
        </dl>
        <p><strong>Why it ranks first:</strong> {reason}</p>
      </section>
      <a href="#plans">Compare {country} plans <span aria-hidden="true">↓</span></a>
    </>
  );
}

export function HeroArrivalBrief({ country, networks, coverage, network, titleId }) {
  return (
    <aside className="heroArrivalBrief" aria-labelledby={titleId}>
      <header><h2 id={titleId}>{country} connection brief</h2><span>04 trip checks</span></header>
      <dl>
        <div><dt>Local operators</dt><dd>{networks}</dd><i aria-hidden="true">↗</i></div>
        <div><dt>Typical coverage</dt><dd>{coverage}</dd><i aria-hidden="true">↗</i></div>
        <div><dt>Plan speed</dt><dd>{network}</dd><i aria-hidden="true">↗</i></div>
        <div><dt>Setup</dt><dd>Install over Wi-Fi before departure; activate after arrival.</dd><i aria-hidden="true">↗</i></div>
      </dl>
      <a href="#country-essentials">Read the full connection guide <span aria-hidden="true">→</span></a>
    </aside>
  );
}
