"use client";

import { useState } from "react";

const regions = {
  "North America": ["Canada", "Mexico", "United States", "Costa Rica", "Dominican Republic", "Jamaica"],
  "South America": ["Argentina", "Brazil", "Chile", "Colombia", "Ecuador", "Peru", "Uruguay"],
  Europe: ["France", "Germany", "Greece", "Italy", "Netherlands", "Portugal", "Spain", "Switzerland", "Türkiye", "United Kingdom"],
  Africa: ["Egypt", "Kenya", "Morocco", "Nigeria", "South Africa", "Tanzania", "Tunisia"],
  Asia: ["China", "India", "Indonesia", "Japan", "Malaysia", "Singapore", "South Korea", "Thailand", "United Arab Emirates", "Vietnam"],
  Oceania: ["Australia", "Fiji", "New Zealand"],
};

const pins = [
  { name: "North America", x: 18, y: 31, short: "N. America" },
  { name: "South America", x: 31, y: 66, short: "S. America" },
  { name: "Europe", x: 52, y: 27, short: "Europe" },
  { name: "Africa", x: 53, y: 54, short: "Africa" },
  { name: "Asia", x: 70, y: 35, short: "Asia" },
  { name: "Oceania", x: 83, y: 73, short: "Oceania" },
];

export default function WorldMap() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  function chooseRegion(region) {
    setSelectedRegion(region);
    setSelectedCountry(null);
  }

  return (
    <section className="destinationFinder" aria-labelledby="destination-title">
      <div className="finderHeader">
        <div>
          <p className="finderStep">Choose your destination</p>
          <h2 id="destination-title">
            {selectedRegion ? selectedRegion : "Where are you landing?"}
          </h2>
        </div>
        {selectedRegion && (
          <button className="resetMap" type="button" onClick={() => chooseRegion(null)}>
            View all continents
          </button>
        )}
      </div>

      <div className={`mapLayout ${selectedRegion ? "hasSelection" : ""}`}>
        <div className="mapStage" aria-label="Select a continent from the world map">
          <svg className="worldSilhouette" viewBox="0 0 1000 500" aria-hidden="true">
            <path d="M80 115 137 65l102 10 45 54-20 47-45 2-28 44-72-8-49-47Z" />
            <path d="m237 239 70 22 36 63-22 91-37 55-25-103-43-58Z" />
            <path d="m423 117 83-43 92 20 41 55-67 37-40-22-55 18-66-22Z" />
            <path d="m475 210 87-15 60 64-30 103-55 76-40-117-44-51Z" />
            <path d="m596 113 115-57 151 36 82 83-74 61-98-24-54 44-73-29-49-60Z" />
            <path d="m783 331 96-29 78 54-42 82-108-13-49-52Z" />
          </svg>

          {pins.map((pin) => (
            <button
              className={`mapPin ${selectedRegion === pin.name ? "active" : ""}`}
              key={pin.name}
              type="button"
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              onClick={() => chooseRegion(pin.name)}
              aria-pressed={selectedRegion === pin.name}
            >
              <span>{pin.short}</span>
            </button>
          ))}
        </div>

        {selectedRegion && (
          <div className="countryPanel" aria-live="polite">
            <p className="countryPrompt">Now choose a country</p>
            <div className="countryList">
              {regions[selectedRegion].map((country) => (
                <button
                  key={country}
                  type="button"
                  className={selectedCountry === country ? "selected" : ""}
                  onClick={() => setSelectedCountry(country)}
                  aria-pressed={selectedCountry === country}
                >
                  <span>{country}</span>
                  <span aria-hidden="true">{selectedCountry === country ? "✓" : "↗"}</span>
                </button>
              ))}
            </div>
            {selectedCountry && (
              <p className="selectionNote">
                <strong>{selectedCountry}</strong> selected. Plans will be available at launch.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
