"use client";

import { useMemo, useState } from "react";
import { HeadingReadMore, HeadingSignal } from "../EditorialHeading";
import { francePlans } from "./plans";

const filterOptions = {
  data: [{ label: "Any data", value: 0 }, { label: "3 GB+", value: 3 }, { label: "5 GB+", value: 5 }, { label: "10 GB+", value: 10 }],
  days: [{ label: "Any validity", value: 0 }, { label: "7+ days", value: 7 }, { label: "14+ days", value: 14 }, { label: "30 days", value: 30 }],
  price: [{ label: "Any price", value: 999 }, { label: "Under $10", value: 10 }, { label: "Under $20", value: 20 }, { label: "Under $30", value: 30 }],
};

const providerUrls = {
  Saily: "https://saily.com/",
  Airalo: "https://www.airalo.com/",
  Holafly: "https://esim.holafly.com/",
  Nomad: "https://www.nomadesim.com/",
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
      <header className="heroPlanBoardLabel"><span>VERIFIED OFFERS</span><h2 id={headingId}><HeadingSignal />eSIM plans for {country}</h2><HeadingReadMore href="#plans" label="See plans">Saily leads; every displayed package has a published provider price.</HeadingReadMore><small>Checked 24 August 2026</small></header>
      <ol className="heroPlanRail">
        {plans.slice(0, 5).map((plan, index) => (
          <li key={`${plan.brand}-${plan.product}-${index}`} className={index === 0 ? "recommended" : undefined}><a href="#plans" style={{ "--plan-color": plan.color }} aria-label={`${plan.brand} ${plan.product}: ${plan.dataLabel} for ${plan.days} days, $${plan.price.toFixed(2)}`}>
            <div className="heroPlanMeta"><span className="heroPlanRank">0{index + 1}</span><small>{index === 0 ? "Source checked" : plan.note}</small></div>
            <div className="heroPlanProvider"><b><i />{plan.brand}</b><small>{plan.product}</small></div>
            <dl><div><dt>Data</dt><dd>{plan.dataLabel}</dd></div><div><dt>Valid</dt><dd>{plan.days}d</dd></div></dl>
            <div className="heroPlanFooter"><strong>${plan.price.toFixed(2)}</strong><span className="heroPlanAction">Compare <em aria-hidden="true">⌁</em></span></div>
          </a></li>
        ))}
      </ol>
    </section>
  );
}

export default function FrancePlans({ country = "France", plans = francePlans, sourceUrl = "https://saily.com/esim-france/", sourceChecked = "2026-08-24" }) {
  const [data, setData] = useState(0);
  const [days, setDays] = useState(0);
  const [price, setPrice] = useState(999);
  const bestPlan = plans.find((plan) => plan.brand === "Saily") || plans[0];
  const bestPickIntro = `Saily is prioritized because its official destination page publishes a current ${country} plan with a traceable data allowance, validity period and starting price.`;
  const bestReasons = [
    { title: "Useful allowance", text: `${bestPlan.dataLabel} is a sensible fit for maps, messages and everyday browsing.` },
    { title: "Trip-friendly validity", text: `${bestPlan.days} days gives travelers flexibility without rushing to use the plan.` },
    { title: "Published connectivity", text: `Saily lists ${bestPlan.network} speeds, depending on the available local provider, device and location.` },
  ];

  const filteredPlans = useMemo(() => plans.filter((plan) => plan.data >= data && plan.days >= days && plan.price <= price), [data, days, price]);

  return (
    <>
      <section className="bestPickPanel" aria-labelledby="best-pick-title" style={{ "--plan-color": bestPlan.color }}>
        <div className="bestPickLead">
          <div className="bestPickSeal"><span>VERIFIED SOURCE</span><b>01</b></div>
          <p className="routeKicker">PUBLISHED STARTING OFFER</p>
          <h2 id="best-pick-title"><HeadingSignal />Our best {country} eSIM pick: <em>Saily</em></h2>
          <HeadingReadMore href="#plans" label="Review the plan">{bestPickIntro}</HeadingReadMore>
          <a href="#plans">See the Saily plan <span aria-hidden="true">↓</span></a>
        </div>
        <div className="bestPickReasons">
          <header><span>Why it leads</span><strong>${bestPlan.price.toFixed(2)}</strong></header>
          {bestReasons.map((reason, index) => <article key={reason.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{reason.title}</h3><p>{reason.text}</p></div><i aria-hidden="true">⌁</i></article>)}
          <small>Verified against Saily's official destination page on {sourceChecked}. Prices can change. <a href={sourceUrl} target="_blank" rel="noreferrer">Provider specifications ⌁</a></small>
        </div>
      </section>
      <section className="commercialComparison" aria-labelledby="commercial-comparison-title">
        <header>
          <div>
            <p className="routeKicker">PUBLISHED PLAN RECORD</p>
            <h2 id="commercial-comparison-title"><HeadingSignal />Compare {country} eSIM offers</h2>
          </div>
          <p>Compare the displayed allowance, validity, network access and preview price before checking the provider’s current offer.</p>
        </header>
        <ol className="commercialPlanList">
          {plans.map((plan, index) => (
            <li key={`${plan.brand}-${plan.product}-${plan.dataLabel}`}>
              <article style={{ "--plan-color": plan.color }}>
                <div className="commercialProvider">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong><i />{plan.brand}</strong><small>{plan.note}</small></div>
                </div>
                <div><span>Plan</span><strong>{plan.product}</strong></div>
                <div><span>Data</span><strong>{plan.dataLabel}</strong></div>
                <div><span>Validity</span><strong>{plan.days} days</strong></div>
                <div><span>Network</span><strong>{plan.network}</strong></div>
                <div className="commercialPrice"><span>Preview price</span><strong>${plan.price.toFixed(2)}</strong></div>
                <a href={plan.url || providerUrls[plan.brand]} target="_blank" rel="noreferrer" aria-label={`Check the latest ${plan.brand} offer for ${country}`}>
                  Check latest price <span aria-hidden="true">⌁</span>
                </a>
              </article>
            </li>
          ))}
        </ol>
        <footer>Published USD starting price checked on {sourceChecked}. Verify the final price, taxes, network, fair-use terms and compatibility before purchasing. <a href={sourceUrl} target="_blank" rel="noreferrer">Official Saily source ⌁</a></footer>
      </section>
      <section className="featuredFrancePlans" aria-labelledby="featured-title">
        <header><div><p className="routeKicker">PLAN SNAPSHOT</p><h2 id="featured-title"><HeadingSignal />Popular {country} eSIM plans</h2><HeadingReadMore href="#plans" label="View every plan">Compare the leading choices by allowance, validity, network access and total preview price.</HeadingReadMore></div><p>Example marketplace pricing. Verify the provider’s current rate and terms before purchasing.</p></header>
        <ol className="featuredPlanGrid">
          {plans.slice(0, 3).map((plan, index) => (
            <li key={`${plan.brand}-${plan.product}-${plan.days}`}><article style={{ "--plan-color": plan.color }} aria-labelledby={`featured-${country.toLowerCase().replaceAll(" ", "-")}-${index}`}>
              <span className="planRank">0{index + 1} / {plan.note}</span>
              <div className="providerName"><i />{plan.brand}</div>
              <h3 id={`featured-${country.toLowerCase().replaceAll(" ", "-")}-${index}`}>{plan.product}</h3>
              <strong>${plan.price.toFixed(2)}</strong>
              <dl><div><dt>Data</dt><dd>{plan.dataLabel}</dd></div><div><dt>Validity</dt><dd>{plan.days} days</dd></div><div><dt>Network</dt><dd>{plan.network}</dd></div></dl>
              <a href="#plans">View plan <span aria-hidden="true">⌁</span></a>
            </article></li>
          ))}
        </ol>
      </section>

      <section className="francePlanExplorer" id="plans" aria-labelledby="plans-title">
        <header><div><p className="routeKicker">SET YOUR REQUIREMENTS</p><h2 id="plans-title"><HeadingSignal />Find a {country} eSIM for your trip</h2><HeadingReadMore href="#country-essentials" label="Connection guide">Adjust data, validity and budget to qualify the plans that match how you will travel.</HeadingReadMore></div><span>{filteredPlans.length} matching plans</span></header>
        <div className="planFilters">
          <FilterGroup title="Total data" options={filterOptions.data} value={data} onChange={setData} />
          <FilterGroup title="Validity" options={filterOptions.days} value={days} onChange={setDays} />
          <FilterGroup title="Maximum price" options={filterOptions.price} value={price} onChange={setPrice} />
        </div>
        <ol className="planResults" aria-live="polite" aria-label={`${country} eSIM search results`}>
          {filteredPlans.map((plan) => (
            <li key={`${plan.brand}-${plan.product}-${plan.days}`}><article style={{ "--plan-color": plan.color }}>
              <div className="providerName"><i />{plan.brand}<small>{plan.note}</small></div>
              <div><span>Product</span><strong>{plan.product}</strong></div>
              <div><span>Data</span><strong>{plan.dataLabel}</strong></div>
              <div><span>Validity</span><strong>{plan.days} days</strong></div>
              <div><span>Network</span><strong>{plan.network}</strong></div>
              <div className="resultPrice"><span>Preview price</span><strong>${plan.price.toFixed(2)}</strong></div>
              <span className="resultArrow" aria-hidden="true">⌁</span>
            </article></li>
          ))}
          {!filteredPlans.length && <li className="noPlanResults">No plans match these filters. Try increasing the price or reducing the data requirement.</li>}
        </ol>
      </section>
    </>
  );
}
