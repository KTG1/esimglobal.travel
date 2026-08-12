"use client";

import { useRef, useState } from "react";

function buildFaqGroups(country) {
  const isFrance = country === "France";

  return [
    {
      id: "choose",
      label: "Choose a plan",
      summary: "Best option and data",
      questions: [
        {
          number: "01",
          question: `What is the best eSIM for ${country}?`,
          answer: isFrance
            ? "The best France eSIM depends on your trip length, expected data use, budget and required features. Compare network coverage, allowance, validity, hotspot rules and support—not only the headline price."
            : `The best ${country} eSIM depends on your trip length, data use, budget and required features. Compare coverage, allowance, validity, hotspot rules and support—not only price.`,
        },
        {
          number: "02",
          question: `How much data do I need${isFrance ? " for a trip to France" : ""}?`,
          answer: isFrance
            ? "Light navigation and messaging may use 1–3 GB per week. Regular social media, video, calls or hotspot use can require 5–10 GB or an unlimited plan. Check any fair-use or speed policy attached to unlimited data."
            : "Light navigation and messaging may use 1–3 GB per week. Regular social media, video calls or hotspot use can require 5–10 GB or an unlimited plan.",
        },
      ],
    },
    {
      id: "setup",
      label: "Set up your eSIM",
      summary: "Install and activate",
      questions: [
        {
          number: "03",
          question: `When should I install and activate my ${country} eSIM?`,
          answer: isFrance
            ? "Install the eSIM over Wi-Fi before departure, but confirm when its validity begins. Many travel plans activate after connecting to a supported French network; others may begin at installation or purchase."
            : "Install the eSIM over Wi-Fi before departure, but check when validity begins. Some plans activate after connecting locally; others begin at installation or purchase.",
        },
        {
          number: "04",
          question: "Can I keep using my regular number?",
          answer: isFrance
            ? "Yes. Installing a travel eSIM does not normally change the phone number connected to WhatsApp. Use the eSIM for mobile data and keep your primary SIM enabled for messages if needed."
            : "Yes. Use the travel eSIM for data while keeping your primary SIM available for calls or messages, subject to your home carrier’s roaming charges.",
        },
      ],
    },
    {
      id: "use",
      label: "Use it abroad",
      summary: "Calls, hotspot and borders",
      questions: [
        {
          number: "05",
          question: `Do ${country} eSIM plans include calls and SMS?`,
          answer: "Many travel eSIMs are data-only. Calls and messages can still work through apps such as WhatsApp, FaceTime or Signal. Choose a plan with a phone number only when traditional calls or SMS are required.",
        },
        {
          number: "06",
          question: `Can I share ${country} eSIM data through a hotspot?`,
          answer: "Hotspot sharing depends on the provider and product. Fixed-data plans often permit tethering, while unlimited plans may apply a daily sharing limit. Verify the plan terms before purchase.",
        },
        {
          number: "07",
          question: `Will one ${country} eSIM work in nearby countries?`,
          answer: `A ${country}-only plan may stop working after you cross the border. If your itinerary includes multiple countries, choose a regional eSIM and verify that every destination appears in its coverage list.`,
        },
      ],
    },
  ];
}

export default function CountryFaqTabs({ country }) {
  const groups = buildFaqGroups(country);
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
