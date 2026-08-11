"use client";

import { useMemo, useState } from "react";
import world from "@svg-maps/world";
import { continents, countries } from "countries-list";

const regionOrder = ["NA", "SA", "EU", "AF", "AS", "OC", "AN"];
const regionLabels = { ...continents, AN: "Antarctica" };
const regionViewBoxes = {
  NA: "0 20 480 390",
  SA: "170 245 330 415",
  EU: "380 170 270 240",
  AF: "360 245 350 410",
  AS: "480 65 530 430",
  OC: "690 300 320 330",
  AN: "0 510 1010 156",
};
const regionPlans = {
  NA: [{ name: "Quick trip", data: "1 GB", days: 7, price: 4.5 }, { name: "Best value", data: "5 GB", days: 30, price: 16 }, { name: "Always on", data: "10 GB", days: 30, price: 27 }],
  SA: [{ name: "Quick trip", data: "1 GB", days: 7, price: 5.5 }, { name: "Best value", data: "5 GB", days: 30, price: 18 }, { name: "Always on", data: "10 GB", days: 30, price: 31 }],
  EU: [{ name: "Quick trip", data: "1 GB", days: 7, price: 4 }, { name: "Best value", data: "5 GB", days: 30, price: 14 }, { name: "Always on", data: "10 GB", days: 30, price: 24 }],
  AF: [{ name: "Quick trip", data: "1 GB", days: 7, price: 6 }, { name: "Best value", data: "5 GB", days: 30, price: 20 }, { name: "Always on", data: "10 GB", days: 30, price: 34 }],
  AS: [{ name: "Quick trip", data: "1 GB", days: 7, price: 4.5 }, { name: "Best value", data: "5 GB", days: 30, price: 15 }, { name: "Always on", data: "10 GB", days: 30, price: 25 }],
  OC: [{ name: "Quick trip", data: "1 GB", days: 7, price: 5 }, { name: "Best value", data: "5 GB", days: 30, price: 17 }, { name: "Always on", data: "10 GB", days: 30, price: 29 }],
  AN: [{ name: "Expedition", data: "1 GB", days: 7, price: 19 }, { name: "Field work", data: "3 GB", days: 30, price: 42 }, { name: "Extended", data: "5 GB", days: 30, price: 59 }],
};

const mapCountries = world.locations
  .map((location) => {
    const code = location.id.toUpperCase();
    const details = countries[code];
    return details ? { ...location, code, ...details } : null;
  })
  .filter(Boolean);

export default function WorldMap() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const visibleCountries = useMemo(() => {
    if (!selectedRegion) return [];
    const query = search.trim().toLowerCase();
    return mapCountries
      .filter((country) => country.continent === selectedRegion)
      .filter((country) => !query || country.name.toLowerCase().includes(query))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [search, selectedRegion]);

  function chooseRegion(region) {
    setSelectedRegion(region);
    setSelectedCountry(null);
    setSearch("");
    setSelectedPlan(region ? regionPlans[region][1] : null);
  }

  function chooseCountry(country) {
    if (country.continent !== selectedRegion) setSelectedPlan(regionPlans[country.continent][1]);
    setSelectedRegion(country.continent);
    setSelectedCountry(country);
    setSearch("");
  }

  function countryPrice(country) {
    const base = regionPlans[country.continent][0].price;
    const adjustment = ((country.code.charCodeAt(0) + country.code.charCodeAt(1)) % 3) * 0.5;
    return (base + adjustment).toFixed(2);
  }

  function handleCountryKey(event, country) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      chooseCountry(country);
    }
  }

  return (
    <section className="destinationFinder" aria-labelledby="destination-title">
      <div className="finderTopline">
        <div>
          <p className="finderStep">Global coverage explorer</p>
          <h2 id="destination-title">
            {selectedCountry?.name || (selectedRegion ? regionLabels[selectedRegion] : "Where are you landing?")}
          </h2>
        </div>
        <p className="coverageCount">
          <strong>{mapCountries.length}</strong>
          <span>mapped destinations</span>
        </p>
      </div>

      <nav className="continentTabs" aria-label="Filter the map by continent">
        <button
          type="button"
          className={!selectedRegion ? "active" : ""}
          onClick={() => chooseRegion(null)}
          aria-pressed={!selectedRegion}
        >
          World
        </button>
        {regionOrder.map((region) => (
          <button
            key={region}
            type="button"
            className={selectedRegion === region ? "active" : ""}
            onClick={() => chooseRegion(region)}
            aria-pressed={selectedRegion === region}
          >
            {regionLabels[region]}
          </button>
        ))}
      </nav>

      <div className={`mapWorkspace ${selectedRegion ? "isExploring" : ""}`}>
        <div className="mapCanvas">
          {selectedRegion && (
            <div className="mapPlanOverlay" aria-label={`Best eSIM options for ${regionLabels[selectedRegion]}`}>
              <p>Best regional eSIMs <span>Preview pricing</span></p>
              <div>
                {regionPlans[selectedRegion].map((plan) => (
                  <button
                    key={plan.name}
                    type="button"
                    className={selectedPlan?.name === plan.name ? "selected" : ""}
                    onClick={() => setSelectedPlan(plan)}
                    aria-pressed={selectedPlan?.name === plan.name}
                  >
                    <span>{plan.name}</span>
                    <strong>${plan.price.toFixed(2)}</strong>
                    <small>{plan.data} · {plan.days} days</small>
                  </button>
                ))}
              </div>
            </div>
          )}
          <svg
            className="countryMap"
            viewBox={selectedRegion ? regionViewBoxes[selectedRegion] : world.viewBox}
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Interactive world map. Select a country or choose a continent above."
          >
            <g>
              {mapCountries.map((country) => {
                const isSelected = selectedCountry?.code === country.code;
                const isInRegion = selectedRegion === country.continent;
                const isMuted = selectedRegion && !isInRegion;
                return (
                  <path
                    key={country.id}
                    d={country.path}
                    className={`mapCountry${isInRegion ? " inRegion" : ""}${isSelected ? " selected" : ""}${isMuted ? " muted" : ""}`}
                    role="button"
                    tabIndex={selectedRegion && !isInRegion ? -1 : 0}
                    aria-label={`${country.name}, ${regionLabels[country.continent]}`}
                    aria-pressed={isSelected}
                    onClick={() => chooseCountry(country)}
                    onKeyDown={(event) => handleCountryKey(event, country)}
                  >
                    <title>{country.name}</title>
                  </path>
                );
              })}
            </g>
          </svg>
          <div className="mapLegend" aria-hidden="true">
            <span><i className="legendAvailable" /> Selectable</span>
            <span><i className="legendSelected" /> Selected</span>
          </div>
          {!selectedRegion && (
            <p className="mapInstruction">Choose a continent above or select any country on the map.</p>
          )}
        </div>

        {selectedRegion && (
          <aside className="countryManifest" aria-live="polite">
            <div className="manifestHeader">
              <div>
                <p className="finderStep">Destination manifest</p>
                <h3>{regionLabels[selectedRegion]}</h3>
              </div>
              <span>{visibleCountries.length}</span>
            </div>

            <div className="manifestPlans" aria-label="Regional eSIM plan options">
              {regionPlans[selectedRegion].map((plan) => (
                <button
                  key={plan.name}
                  type="button"
                  className={selectedPlan?.name === plan.name ? "selected" : ""}
                  onClick={() => setSelectedPlan(plan)}
                  aria-pressed={selectedPlan?.name === plan.name}
                >
                  <span><strong>{plan.data}</strong><small>{plan.days} days</small></span>
                  <b>${plan.price.toFixed(2)}</b>
                </button>
              ))}
              <p>Preview pricing · taxes may vary</p>
            </div>

            <label className="countrySearch">
              <span className="srOnly">Search countries in {regionLabels[selectedRegion]}</span>
              <input
                type="search"
                placeholder="Search countries"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <span aria-hidden="true">⌕</span>
            </label>

            <div className="countryList">
              {visibleCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  className={selectedCountry?.code === country.code ? "selected" : ""}
                  onClick={() => chooseCountry(country)}
                  aria-pressed={selectedCountry?.code === country.code}
                >
                  <span className="countryCode">{country.code}</span>
                  <span>{country.name}</span>
                  <span className="countryPrice">from <b>${countryPrice(country)}</b></span>
                  <span className="countryArrow" aria-hidden="true">
                    {selectedCountry?.code === country.code ? "✓" : "↗"}
                  </span>
                </button>
              ))}
              {!visibleCountries.length && <p className="noCountries">No matching destination.</p>}
            </div>

            {selectedCountry && (
              <div className="countryTicket">
                <span>Selected destination</span>
                <strong>{selectedCountry.name}</strong>
                <small>{selectedPlan ? `${selectedPlan.data} · ${selectedPlan.days} days · $${selectedPlan.price.toFixed(2)}` : `Plans from $${countryPrice(selectedCountry)}`}</small>
              </div>
            )}
          </aside>
        )}
      </div>
    </section>
  );
}
