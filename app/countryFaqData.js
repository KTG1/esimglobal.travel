export function buildCountryFaqGroups({ country, bestPlan, networks, coverage }) {
  return [
    {
      id: "choose",
      label: "Choose a plan",
      summary: "Price, data and validity",
      questions: [
        {
          number: "01",
          question: `What is the best eSIM for ${country}?`,
          answer: `${bestPlan.brand} ${bestPlan.product} is the balanced benchmark in this comparison at $${bestPlan.price.toFixed(2)} for ${bestPlan.dataLabel} and ${bestPlan.days} days. The best option still depends on your trip length, expected data use, hotspot needs and preferred network.`,
        },
        {
          number: "02",
          question: `How much eSIM data do I need in ${country}?`,
          answer: "Light navigation and messaging may use 1–3 GB per week. Regular social media, video calls or hotspot use can require 5–10 GB or an unlimited plan. Check any fair-use or speed policy attached to unlimited data.",
        },
        {
          number: "03",
          question: `How long should my ${country} eSIM remain valid?`,
          answer: `Choose validity that covers your full trip plus a small arrival or departure buffer. The highlighted ${bestPlan.brand} plan remains valid for ${bestPlan.days} days; shorter and longer options are listed in the comparison above.`,
        },
      ],
    },
    {
      id: "setup",
      label: "Set up your eSIM",
      summary: "Networks and activation",
      questions: [
        {
          number: "04",
          question: `Which mobile networks and speeds are available in ${country}?`,
          answer: `${networks} ${coverage} The displayed plan labels are comparison references, so confirm the exact partner network and supported speed before purchase.`,
        },
        {
          number: "05",
          question: `When should I install and activate my ${country} eSIM?`,
          answer: "Install the eSIM over Wi-Fi before departure, but check when validity begins. Some plans activate after connecting locally; others begin at installation or purchase.",
        },
      ],
    },
    {
      id: "use",
      label: "Use it abroad",
      summary: "Calls, hotspot and borders",
      questions: [
        {
          number: "06",
          question: `Do ${country} eSIM plans include calls and SMS?`,
          answer: "Many travel eSIMs are data-only. Calls and messages can still work through apps such as WhatsApp, FaceTime or Signal. Choose a plan with a phone number only when traditional calls or SMS are required.",
        },
        {
          number: "07",
          question: `Can I share ${country} eSIM data through a hotspot?`,
          answer: "Hotspot sharing depends on the provider and product. Fixed-data plans often permit tethering, while unlimited plans may apply a daily sharing limit. Verify the plan terms before purchase.",
        },
        {
          number: "08",
          question: `Will one ${country} eSIM work in nearby countries?`,
          answer: `A ${country}-only plan may stop working after you cross the border. If your itinerary includes multiple countries, choose a regional eSIM and verify that every destination appears in its coverage list.`,
        },
      ],
    },
  ];
}
