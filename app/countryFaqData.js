const countryProfiles = {
  France: { places: "Paris, Lyon, Nice and journeys between regions", geography: "cities, smaller towns and many major rail corridors", onward: "Belgium, Spain, Italy, Germany or another European destination", arrival: "before boarding your flight or train to France" },
  Italy: { places: "Rome, Milan, Florence and multi-city rail trips", geography: "major cities and populated regions, with more variation in remote or mountainous areas", onward: "France, Switzerland, Austria, Slovenia or another European destination", arrival: "before leaving for Italy, while you still have dependable Wi-Fi" },
  Spain: { places: "Madrid, Barcelona, Seville and island trips", geography: "mainland cities and popular coastal destinations; island and rural coverage can vary", onward: "Portugal, France, Andorra or another European destination", arrival: "before departure, then switch the data line on after landing in Spain" },
  "Türkiye": { places: "Istanbul, Antalya, Cappadocia and longer intercity journeys", geography: "large cities and tourist regions, with greater variation on remote mountain or coastal routes", onward: "Greece, Bulgaria, Georgia or another nearby country", arrival: "before flying to Türkiye, then connect after arrival" },
  Japan: { places: "Tokyo, Kyoto, Osaka and intercity rail travel", geography: "major urban areas and transport corridors, with possible differences in rural, mountainous or island locations", onward: "South Korea, Taiwan or another Asian destination", arrival: "before departure so maps and transport apps are ready when you land in Japan" },
  "United States": { places: "New York, Los Angeles, business travel and multi-state road trips", geography: "cities and populated areas; coverage can change considerably across rural highways, national parks and remote regions", onward: "Canada, Mexico or another destination in the Americas", arrival: "before departure, especially when you need connectivity immediately after landing" },
};

export function buildCountryFaqGroups({ country, bestPlan, networks, coverage, plans = [] }) {
  const profile = countryProfiles[country] || { places: `major destinations across ${country}`, geography: "cities and populated areas, with possible variation in remote regions", onward: "a neighbouring country", arrival: "before departure while reliable Wi-Fi is available" };
  const displayedPlans = plans.length ? plans : [bestPlan];
  const lowestPrice = Math.min(...displayedPlans.map((plan) => plan.price));
  const highestPrice = Math.max(...displayedPlans.map((plan) => plan.price));
  const hasUnlimited = displayedPlans.some((plan) => plan.data >= 999);

  return [
    { id: "plans", label: "Plans and pricing", summary: "Cost, data and validity", questions: [
      { number: "01", question: `Which eSIM is the strongest all-round choice for ${country}?`, answer: `${bestPlan.brand} ${bestPlan.product} is the balanced reference in our current comparison: ${bestPlan.dataLabel}, ${bestPlan.days} days and a preview price of $${bestPlan.price.toFixed(2)}. Compare it with the other offers if you need more data, a lower entry price or different network access.` },
      { number: "02", question: `What should I expect to pay for a travel eSIM in ${country}?`, answer: `The offers currently displayed range from $${lowestPrice.toFixed(2)} to $${highestPrice.toFixed(2)}. Final checkout prices, taxes and promotions can change, so use these figures as comparison snapshots and confirm the total with the provider.` },
      { number: "03", question: `How much mobile data is practical for ${profile.places}?`, answer: "For maps, messaging and bookings, 1–3 GB per week may be enough. Frequent social media, video calls, streaming or hotspot use often makes 5–10 GB—or an unlimited option—a safer choice." },
      { number: "04", question: `Can I buy an unlimited-data eSIM for ${country}?`, answer: hasUnlimited ? `Yes. The current comparison includes an unlimited-data option for ${country}. Check its fair-use policy, hotspot allowance and possible speed restrictions before treating “unlimited” as unrestricted use.` : `No unlimited plan is currently shown in this comparison. Provider inventories change, so check the latest offers if unlimited data is essential for your trip.` },
    ] },
    { id: "coverage", label: "Networks and coverage", summary: "Operators, 4G and 5G", questions: [
      { number: "05", question: `Which local networks can support an eSIM connection in ${country}?`, answer: `${networks} A travel eSIM may use one or more partner networks, but access depends on the specific provider and plan rather than the country alone.` },
      { number: "06", question: `Should I expect 4G or 5G while travelling around ${country}?`, answer: `${coverage} Your phone, plan terms, congestion and exact location also affect the connection technology and speed you receive.` },
      { number: "07", question: `How reliable is eSIM coverage beyond the main destinations in ${country}?`, answer: `Coverage is generally strongest across ${profile.geography}. Before visiting a remote area, check the provider’s partner network against that operator’s local coverage map and keep offline maps available.` },
    ] },
    { id: "activation", label: "Installation", summary: "Install, start and connect", questions: [
      { number: "08", question: `When is the safest time to install my ${country} eSIM?`, answer: `Install it ${profile.arrival}. Keep the new line disabled for mobile data until the provider’s activation instructions say it is safe to connect.` },
      { number: "09", question: "When does the plan’s validity period actually start?", answer: "That rule varies by provider. Some plans start when the eSIM first connects to a supported local network, while others begin at installation or purchase. Read the activation policy before scanning the QR code." },
      { number: "10", question: `Can I wait until I arrive in ${country} to activate it?`, answer: "Usually, yes, and many plans are designed to activate on their first supported local connection. Installation is still easier on reliable Wi-Fi, so complete that step before departure when possible." },
    ] },
    { id: "usage", label: "Calls and usage", summary: "Number, hotspot and top-ups", questions: [
      { number: "11", question: `Will a ${country} travel eSIM give me a phone number for calls and texts?`, answer: "Most travel eSIMs in this comparison are data-only. WhatsApp, FaceTime, Signal and similar apps can use the data connection, but traditional calls and SMS require a plan that explicitly includes a number and voice service." },
      { number: "12", question: "Can I keep my normal SIM and phone number switched on?", answer: "Yes, on a dual-SIM compatible device. Set the travel eSIM as the mobile-data line and review roaming settings on your primary SIM to avoid unexpected charges for calls, texts or background data." },
      { number: "13", question: `Is hotspot sharing allowed on ${country} eSIM plans?`, answer: "Many fixed-data plans allow tethering. Unlimited plans are more likely to impose daily hotspot limits or fair-use restrictions, so confirm the exact product terms before relying on it for a laptop or multiple devices." },
      { number: "14", question: "What can I do if the plan runs out of data?", answer: "Some providers let you top up the existing eSIM in their app; others require a new package. Check whether add-ons are available before purchase if you want to avoid installing a second eSIM during the trip." },
    ] },
    { id: "travel", label: "Travel and devices", summary: "Borders, phones and refunds", questions: [
      { number: "15", question: `Will the same plan continue working if I travel from ${country} to ${profile.onward}?`, answer: `A ${country}-only package may stop at the border. Choose a regional plan when your itinerary covers several countries, and confirm that every destination is named in the provider’s coverage list.` },
      { number: "16", question: `Which phones can use a travel eSIM in ${country}?`, answer: "The device must support eSIM technology and be unlocked from its home carrier. Compatibility can vary by model, country of purchase and carrier variant, so verify the exact model—not only the phone family." },
      { number: "17", question: "What happens to unused data when the package expires?", answer: "Unused allowance normally expires with the plan and is not transferred automatically. Some providers sell extensions or add-ons, but these must be confirmed in the product terms before the validity period ends." },
      { number: "18", question: "Can I request a refund if the eSIM fails to connect?", answer: "Refund rules differ by provider and may depend on whether the QR code was installed, the plan was activated or data was consumed. Contact support before deleting the eSIM and keep screenshots of the error and troubleshooting steps." },
    ] },
  ];
}
