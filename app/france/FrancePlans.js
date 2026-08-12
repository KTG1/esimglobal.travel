"use client";

import { useMemo, useState } from "react";

export const francePlans = [
  { brand: "Saily", product: "France", data: 5, dataLabel: "5 GB", days: 30, price: 11.99, network: "3G / 4G / LTE / 5G", color: "#3626a7", note: "Best overall" },
  { brand: "Airalo", product: "Bonbon Mobile", data: 10, dataLabel: "10 GB", days: 30, price: 23, network: "5G", color: "#ff6b4a", note: "Popular data plan" },
  { brand: "Holafly", product: "France Unlimited", data: 999, dataLabel: "Unlimited", days: 7, price: 27.5, network: "5G", color: "#7b2dff", note: "Unlimited pick" },
  { brand: "Nomad", product: "France", data: 10, dataLabel: "10 GB", days: 30, price: 15, network: "5G", color: "#6f5cff", note: "Best price per GB" },
  { brand: "Saily", product: "France Mini", data: 1, dataLabel: "1 GB", days: 7, price: 3.99, network: "4G / 5G", color: "#3626a7", note: "Short-trip pick" },
  { brand: "Airalo", product: "Bonbon Mobile", data: 3, dataLabel: "3 GB", days: 30, price: 8.5, network: "5G", color: "#ff6b4a", note: "Light-use plan" },
];

const filterOptions = {
  data: [{ label: "Any data", value: 0 }, { label: "3 GB+", value: 3 }, { label: "5 GB+", value: 5 }, { label: "10 GB+", value: 10 }],
  days: [{ label: "Any validity", value: 0 }, { label: "7+ days", value: 7 }, { label: "14+ days", value: 14 }, { label: "30 days", value: 30 }],
  price: [{ label: "Any price", value: 999 }, { label: "Under $10", value: 10 }, { label: "Under $20", value: 20 }, { label: "Under $30", value: 30 }],
};

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <div>{options.map((option) => <button key={option.label} type="button" className={value === option.value ? "active" : ""} onClick={() => onChange(option.value)} aria-pressed={value === option.value}>{option.label}</button>)}</div>
    </fieldset>
  );
}

export function HeroPlanStrip({ country, plans }) {
  const headingId = `top-plans-${country.toLowerCase().replaceAll(" ", "-")}`;
  return (
    <section className="heroPlanBoard" aria-labelledby={headingId}>
      <header className="heroPlanBoardLabel"><span>LIVE SHORTLIST</span><h2 id={headingId}>Top 5 for {country}</h2><small>Preview prices · verify before purchase</small></header>
      <ol className="heroPlanRail">
        {plans.slice(0, 5).map((plan, index) => (
          <li key={`${plan.brand}-${plan.product}-${index}`}><a href="#plans" style={{ "--plan-color": plan.color }}>
            <span className="heroPlanRank">0{index + 1}</span>
            <div><b><i />{plan.brand}</b><small>{plan.product}</small></div>
            <dl><div><dt>Data</dt><dd>{plan.dataLabel}</dd></div><div><dt>Valid</dt><dd>{plan.days}d</dd></div></dl>
            <strong>${plan.price.toFixed(2)}</strong><span className="heroPlanAction">Read more <em aria-hidden="true">↗</em></span>
          </a></li>
        ))}
      </ol>
    </section>
  );
}

export default function FrancePlans({ country = "France", plans = francePlans }) {
  const [data, setData] = useState(0);
  const [days, setDays] = useState(0);
  const [price, setPrice] = useState(999);
  const bestPlan = plans.find((plan) => plan.brand === "Saily") || plans[0];
  const isFrance = country === "France";
  const bestPickIntro = isFrance
    ? "Saily is our best overall France eSIM because it combines nationwide usability, automatic arrival activation, hotspot sharing and built-in security tools with a flexible 30-day data plan."
    : `Saily stands out in this comparison because it balances a practical data allowance, long validity and a competitive preview price without forcing most travelers into an unlimited plan.`;
  const bestReasons = isFrance ? [
    { title: "France-wide travel coverage", text: "The plan is designed for use across France, including major cities. Connection quality and 3G, 4G, LTE or 5G speed depend on the available local partner network." },
    { title: "Automatic activation on arrival", text: "Buy and install before departure; the plan activates when the eSIM first connects in France. Standard plans must be activated within 30 days of purchase." },
    { title: "Practical 5 GB / 30-day fit", text: "A good middle ground for Google Maps, train bookings, translation, messaging and regular browsing. At $11.99, the preview cost is about $2.40 per GB." },
    { title: "Hotspot and easy top-ups", text: "Hotspot sharing is supported, and additional data can be purchased in the app. A new plan can activate when the current allowance runs out." },
    { title: "Travel security extras", text: "Saily includes optional ad blocking and web protection, which can reduce intrusive ads, trackers and access to known malicious websites." },
  ] : [
    { title: "Useful allowance", text: `${bestPlan.dataLabel} is a sensible fit for maps, messages and everyday browsing.` },
    { title: "Trip-friendly validity", text: `${bestPlan.days} days gives travelers flexibility without rushing to use the plan.` },
    { title: "Balanced connectivity", text: `${bestPlan.network} availability and straightforward digital delivery cover the essentials.` },
  ];

  const filteredPlans = useMemo(() => plans.filter((plan) => plan.data >= data && plan.days >= days && plan.price <= price), [data, days, price]);

  return (
    <>
      <section className="bestPickPanel" aria-labelledby="best-pick-title" style={{ "--plan-color": bestPlan.color }}>
        <div className="bestPickLead">
          <div className="bestPickSeal"><span>EDITOR’S CHOICE</span><b>01</b></div>
          <p className="eyebrow">BEST OVERALL FOR MOST TRAVELERS</p>
          <h2 id="best-pick-title">Our best {country} eSIM pick: <em>Saily</em></h2>
          <p>{bestPickIntro}</p>
          <a href="#plans">See the Saily plan <span aria-hidden="true">↓</span></a>
        </div>
        <div className="bestPickReasons">
          <header><span>Why it leads</span><strong>${bestPlan.price.toFixed(2)}</strong></header>
          {bestReasons.map((reason, index) => <article key={reason.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{reason.title}</h3><p>{reason.text}</p></div><i aria-hidden="true">↗</i></article>)}
          <small>Editorial recommendation based on the displayed plan attributes. Verify current provider terms and pricing. {isFrance && <a href="https://saily.com/esim-france/" target="_blank" rel="noreferrer">Provider specifications ↗</a>}</small>
        </div>
      </section>
      <section className="featuredFrancePlans" aria-labelledby="featured-title">
        <header><div><p className="eyebrow">EDITOR’S SHORTLIST</p><h2 id="featured-title">Popular {country} eSIM plans</h2></div><p>Example marketplace pricing. Verify the provider’s current rate and terms before purchasing.</p></header>
        <ol className="featuredPlanGrid">
          {plans.slice(0, 3).map((plan, index) => (
            <li key={plan.brand}><article style={{ "--plan-color": plan.color }} aria-labelledby={`featured-${country.toLowerCase().replaceAll(" ", "-")}-${index}`}>
              <span className="planRank">0{index + 1} / {plan.note}</span>
              <div className="providerName"><i />{plan.brand}</div>
              <h3 id={`featured-${country.toLowerCase().replaceAll(" ", "-")}-${index}`}>{plan.product}</h3>
              <strong>${plan.price.toFixed(2)}</strong>
              <dl><div><dt>Data</dt><dd>{plan.dataLabel}</dd></div><div><dt>Validity</dt><dd>{plan.days} days</dd></div><div><dt>Network</dt><dd>{plan.network}</dd></div></dl>
              <a href="#plans">View plan <span aria-hidden="true">↗</span></a>
            </article></li>
          ))}
        </ol>
      </section>

      <section className="francePlanExplorer" id="plans" aria-labelledby="plans-title">
        <header><div><p className="eyebrow">FILTER AND COMPARE</p><h2 id="plans-title">Find a {country} eSIM for your trip</h2></div><span>{filteredPlans.length} matching plans</span></header>
        <div className="planFilters">
          <FilterGroup title="Total data" options={filterOptions.data} value={data} onChange={setData} />
          <FilterGroup title="Validity" options={filterOptions.days} value={days} onChange={setDays} />
          <FilterGroup title="Maximum price" options={filterOptions.price} value={price} onChange={setPrice} />
        </div>
        <ol className="planResults" aria-live="polite" aria-label={`${country} eSIM search results`}>
          {filteredPlans.map((plan) => (
            <li key={`${plan.brand}-${plan.dataLabel}`}><article style={{ "--plan-color": plan.color }}>
              <div className="providerName"><i />{plan.brand}<small>{plan.note}</small></div>
              <div><span>Product</span><strong>{plan.product}</strong></div>
              <div><span>Data</span><strong>{plan.dataLabel}</strong></div>
              <div><span>Validity</span><strong>{plan.days} days</strong></div>
              <div><span>Network</span><strong>{plan.network}</strong></div>
              <div className="resultPrice"><span>Preview price</span><strong>${plan.price.toFixed(2)}</strong></div>
              <span className="resultArrow" aria-hidden="true">↗</span>
            </article></li>
          ))}
          {!filteredPlans.length && <li className="noPlanResults">No plans match these filters. Try increasing the price or reducing the data requirement.</li>}
        </ol>
      </section>
    </>
  );
}
