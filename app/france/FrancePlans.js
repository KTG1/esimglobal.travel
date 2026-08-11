"use client";

import { useMemo, useState } from "react";

export const francePlans = [
  { brand: "Saily", product: "France", data: 5, dataLabel: "5 GB", days: 30, price: 12.99, network: "5G", color: "#3626a7", note: "Balanced pick" },
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
  return (
    <div className="heroPlanBoard" aria-label={`Top five eSIM options for ${country}`}>
      <div className="heroPlanBoardLabel"><span>LIVE SHORTLIST</span><strong>Top 5 for {country}</strong><small>Preview prices · verify before purchase</small></div>
      <div className="heroPlanRail">
        {plans.slice(0, 5).map((plan, index) => (
          <a href="#plans" key={`${plan.brand}-${plan.product}-${index}`} style={{ "--plan-color": plan.color }}>
            <span className="heroPlanRank">0{index + 1}</span>
            <div><b><i />{plan.brand}</b><small>{plan.product}</small></div>
            <dl><div><dt>Data</dt><dd>{plan.dataLabel}</dd></div><div><dt>Valid</dt><dd>{plan.days}d</dd></div></dl>
            <strong>${plan.price.toFixed(2)}</strong><span className="heroPlanAction">Read more <em aria-hidden="true">↗</em></span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function FrancePlans({ country = "France", plans = francePlans }) {
  const [data, setData] = useState(0);
  const [days, setDays] = useState(0);
  const [price, setPrice] = useState(999);

  const filteredPlans = useMemo(() => plans.filter((plan) => plan.data >= data && plan.days >= days && plan.price <= price), [data, days, price]);

  return (
    <>
      <section className="featuredFrancePlans" aria-labelledby="featured-title">
        <header><div><p className="eyebrow">EDITOR’S SHORTLIST</p><h2 id="featured-title">Popular {country} eSIM plans</h2></div><p>Example marketplace pricing. Verify the provider’s current rate and terms before purchasing.</p></header>
        <div className="featuredPlanGrid">
          {plans.slice(0, 3).map((plan, index) => (
            <article key={plan.brand} style={{ "--plan-color": plan.color }}>
              <span className="planRank">0{index + 1} / {plan.note}</span>
              <div className="providerName"><i />{plan.brand}</div>
              <h3>{plan.product}</h3>
              <strong>${plan.price.toFixed(2)}</strong>
              <dl><div><dt>Data</dt><dd>{plan.dataLabel}</dd></div><div><dt>Validity</dt><dd>{plan.days} days</dd></div><div><dt>Network</dt><dd>{plan.network}</dd></div></dl>
              <button type="button">View plan <span aria-hidden="true">↗</span></button>
            </article>
          ))}
        </div>
      </section>

      <section className="francePlanExplorer" id="plans" aria-labelledby="plans-title">
        <header><div><p className="eyebrow">FILTER AND COMPARE</p><h2 id="plans-title">Find a {country} eSIM for your trip</h2></div><span>{filteredPlans.length} matching plans</span></header>
        <div className="planFilters">
          <FilterGroup title="Total data" options={filterOptions.data} value={data} onChange={setData} />
          <FilterGroup title="Validity" options={filterOptions.days} value={days} onChange={setDays} />
          <FilterGroup title="Maximum price" options={filterOptions.price} value={price} onChange={setPrice} />
        </div>
        <div className="planResults" aria-live="polite">
          {filteredPlans.map((plan) => (
            <article key={`${plan.brand}-${plan.dataLabel}`} style={{ "--plan-color": plan.color }}>
              <div className="providerName"><i />{plan.brand}<small>{plan.note}</small></div>
              <div><span>Product</span><strong>{plan.product}</strong></div>
              <div><span>Data</span><strong>{plan.dataLabel}</strong></div>
              <div><span>Validity</span><strong>{plan.days} days</strong></div>
              <div><span>Network</span><strong>{plan.network}</strong></div>
              <div className="resultPrice"><span>Preview price</span><strong>${plan.price.toFixed(2)}</strong></div>
              <button type="button" aria-label={`View ${plan.brand} ${plan.product}`}>↗</button>
            </article>
          ))}
          {!filteredPlans.length && <p className="noPlanResults">No plans match these filters. Try increasing the price or reducing the data requirement.</p>}
        </div>
      </section>
    </>
  );
}
