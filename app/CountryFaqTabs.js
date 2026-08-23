"use client";

import { useRef, useState } from "react";
import { buildCountryFaqGroups } from "./countryFaqData";

export default function CountryFaqTabs({ country, bestPlan, networks, coverage }) {
  const groups = buildCountryFaqGroups({ country, bestPlan, networks, coverage });
  const [activeTab, setActiveTab] = useState(groups[0].id);
  const tabRefs = useRef([]);
  const idPrefix = country.toLowerCase().replaceAll(" ", "-");

  function selectByKeyboard(event, index) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const lastIndex = groups.length - 1;
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? lastIndex
        : (index + (event.key === "ArrowRight" ? 1 : -1) + groups.length) % groups.length;
    setActiveTab(groups[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <>
      <div className="faqTabs" role="tablist" aria-label={`${country} eSIM question categories`}>
        {groups.map((group, index) => (
          <button
            key={group.id}
            ref={(element) => { tabRefs.current[index] = element; }}
            type="button"
            role="tab"
            id={`${idPrefix}-faq-tab-${group.id}`}
            aria-controls={`${idPrefix}-faq-panel-${group.id}`}
            aria-selected={activeTab === group.id}
            tabIndex={activeTab === group.id ? 0 : -1}
            onClick={() => setActiveTab(group.id)}
            onKeyDown={(event) => selectByKeyboard(event, index)}
          >
            <span>0{index + 1}</span>
            <strong>{group.label}</strong>
            <small>{group.summary}</small>
            <em>{group.questions.length} answers</em>
          </button>
        ))}
      </div>

      <div className="faqPanels">
        {groups.map((group) => (
          <section
            key={group.id}
            className="faqPanel"
            id={`${idPrefix}-faq-panel-${group.id}`}
            role="tabpanel"
            aria-labelledby={`${idPrefix}-faq-tab-${group.id}`}
            hidden={activeTab !== group.id}
          >
            <header><span>{group.label}</span><p>{group.summary}</p></header>
            <div className="faqList">
              {group.questions.map((item, index) => (
                <details key={item.number} open={index === 0}>
                  <summary><span>{item.number}</span>{item.question}<i aria-hidden="true">+</i></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
