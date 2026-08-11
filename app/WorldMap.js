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
const brandOffers = {
  NA: [{ brand: "Saily", product: "North America", data: "5 GB", days: 30, price: 16.99, color: "#3626a7" }, { brand: "Airalo", product: "North America Regional", data: "3 GB", days: 30, price: 12, color: "#ff6b4a" }, { brand: "Holafly", product: "North America Unlimited", data: "Unlimited", days: 7, price: 29, color: "#7b2dff" }],
  SA: [{ brand: "Saily", product: "Latin America", data: "3 GB", days: 30, price: 15.99, color: "#3626a7" }, { brand: "Airalo", product: "Latamlink", data: "5 GB", days: 30, price: 27, color: "#ff6b4a" }, { brand: "Holafly", product: "Latin America Unlimited", data: "Unlimited", days: 7, price: 34, color: "#7b2dff" }],
  EU: [{ brand: "Airalo", product: "Eurolink", data: "3 GB", days: 30, price: 11, color: "#ff6b4a", verified: true }, { brand: "Saily", product: "Europe", data: "3 GB", days: 30, price: 12.49, color: "#3626a7", verified: true }, { brand: "Holafly", product: "Europe Unlimited", data: "Unlimited", days: 7, price: 27.5, color: "#7b2dff", verified: true }],
  AF: [{ brand: "Saily", product: "Africa", data: "3 GB", days: 30, price: 19.99, color: "#3626a7" }, { brand: "Airalo", product: "Hello Africa", data: "3 GB", days: 30, price: 14, color: "#ff6b4a" }, { brand: "Holafly", product: "Africa Unlimited", data: "Unlimited", days: 7, price: 39, color: "#7b2dff" }],
  AS: [{ brand: "Saily", product: "Asia & Oceania", data: "3 GB", days: 30, price: 12.49, color: "#3626a7" }, { brand: "Nomad", product: "APAC", data: "5 GB", days: 30, price: 15, color: "#6f5cff" }, { brand: "Airalo", product: "Asialink", data: "10 GB", days: 30, price: 37, color: "#ff6b4a" }],
  OC: [{ brand: "Saily", product: "Oceania", data: "5 GB", days: 30, price: 19.99, color: "#3626a7" }, { brand: "Nomad", product: "Oceania", data: "5 GB", days: 30, price: 16, color: "#6f5cff" }, { brand: "Airalo", product: "Island Hopper", data: "3 GB", days: 30, price: 12, color: "#ff6b4a" }],
  AN: [],
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
  const [selectedOffer, setSelectedOffer] = useState(null);

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
    setSelectedOffer(region ? brandOffers[region][0] || null : null);
  }

  function chooseCountry(country) {
    if (country.continent !== selectedRegion) setSelectedOffer(brandOffers[country.continent][0] || null);
    setSelectedRegion(country.continent);
    setSelectedCountry(country);
    setSearch("");
  }

  function countryPrice(country) {
    const base = brandOffers[country.continent][0]?.price;
    if (!base) return null;
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
                {brandOffers[selectedRegion].map((offer) => (
                  <button
                    key={offer.brand}
                    type="button"
                    className={selectedOffer?.brand === offer.brand ? "selected" : ""}
                    style={{ "--brand-color": offer.color }}
                    onClick={() => setSelectedOffer(offer)}
                    aria-pressed={selectedOffer?.brand === offer.brand}
                  >
                    <span className="brandName"><i />{offer.brand}</span>
                    <strong>${offer.price.toFixed(2)}</strong>
                    <small>{offer.product} · {offer.data} · {offer.days}d</small>
                  </button>
                ))}
                {!brandOffers[selectedRegion].length && <p className="noOffers">No consumer regional plans found.</p>}
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
              {brandOffers[selectedRegion].map((offer) => (
                <button
                  key={offer.brand}
                  type="button"
                  className={selectedOffer?.brand === offer.brand ? "selected" : ""}
                  style={{ "--brand-color": offer.color }}
                  onClick={() => setSelectedOffer(offer)}
                  aria-pressed={selectedOffer?.brand === offer.brand}
                >
                  <span><strong><i />{offer.brand}</strong><small>{offer.product} · {offer.data} / {offer.days}d</small></span>
                  <b>${offer.price.toFixed(2)}</b>
                </button>
              ))}
              {!brandOffers[selectedRegion].length && <p className="noOffers">No comparable consumer offers</p>}
              <p>{selectedRegion === "EU" ? "Verified provider pricing" : "Marketplace preview · verify before purchase"}</p>
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
                  <span className="countryPrice">{countryPrice(country) ? <>from <b>${countryPrice(country)}</b></> : "Coverage check"}</span>
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
                <small>{selectedOffer ? `${selectedOffer.brand} ${selectedOffer.product} · ${selectedOffer.data} · ${selectedOffer.days} days · $${selectedOffer.price.toFixed(2)}` : "No comparable consumer plan found"}</small>
              </div>
            )}
          </aside>
        )}
      </div>
    </section>
  );
}
