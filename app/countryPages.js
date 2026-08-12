const plan = (brand, product, data, dataLabel, days, price, network, color, note) => ({ brand, product, data, dataLabel, days, price, network, color, note });

export const countryPages = {
  italy: {
    name: "Italy", flag: "🇮🇹", code: "IT", region: "Europe", city: "Rome", airport: "FCO", coordinates: ["41.9028° N", "12.4964° E"],
    heroImage: "/images/italy-esim-hero.jpg", heroWidth: 1200, heroHeight: 630, heroPosition: "center 48%", heroAlt: "The Colosseum illuminated at blue hour in Rome, Italy",
    networks: "TIM, Vodafone Italia, WindTre and iliad operate nationwide networks.",
    coverage: "4G is widespread across cities and populated regions; 5G availability varies by place and plan.",
    plans: [plan("Saily", "Italy", 5, "5 GB", 30, 12.99, "5G", "#3626a7", "Balanced pick"), plan("Airalo", "Mamma Mia", 10, "10 GB", 30, 22, "5G", "#ff6b4a", "Popular data plan"), plan("Holafly", "Italy Unlimited", 999, "Unlimited", 7, 27.5, "5G", "#7b2dff", "Unlimited pick"), plan("Nomad", "Italy", 10, "10 GB", 30, 15, "5G", "#6f5cff", "Best price per GB"), plan("Saily", "Italy Mini", 1, "1 GB", 7, 3.99, "4G / 5G", "#3626a7", "Short-trip pick"), plan("Airalo", "Mamma Mia", 3, "3 GB", 30, 8.5, "5G", "#ff6b4a", "Light-use plan")],
  },
  spain: {
    name: "Spain", flag: "🇪🇸", code: "ES", region: "Europe", city: "Madrid", airport: "MAD", coordinates: ["40.4168° N", "03.7038° W"],
    heroImage: "/images/spain-esim-hero.jpg", heroWidth: 1200, heroHeight: 630, heroPosition: "center 51%", heroAlt: "Puerta de Alcalá illuminated at blue hour in Madrid, Spain",
    networks: "Movistar, Orange, Vodafone and Yoigo provide mobile service across Spain.",
    coverage: "4G is widely available; 5G is strongest in cities and major travel destinations.",
    plans: [plan("Saily", "Spain", 5, "5 GB", 30, 12.99, "5G", "#3626a7", "Balanced pick"), plan("Airalo", "Guay Mobile", 10, "10 GB", 30, 20, "5G", "#ff6b4a", "Popular data plan"), plan("Holafly", "Spain Unlimited", 999, "Unlimited", 7, 27.5, "5G", "#7b2dff", "Unlimited pick"), plan("Nomad", "Spain", 10, "10 GB", 30, 14, "5G", "#6f5cff", "Best price per GB"), plan("Saily", "Spain Mini", 1, "1 GB", 7, 3.99, "4G / 5G", "#3626a7", "Short-trip pick"), plan("Airalo", "Guay Mobile", 3, "3 GB", 30, 7.5, "5G", "#ff6b4a", "Light-use plan")],
  },
  turkey: {
    name: "Türkiye", flag: "🇹🇷", code: "TR", region: "Europe & Asia", city: "Istanbul", airport: "IST", coordinates: ["41.0082° N", "28.9784° E"],
    heroImage: "/images/turkey-esim-hero.jpg", heroWidth: 1200, heroHeight: 630, heroPosition: "center 53%", heroAlt: "Hagia Sophia and the Bosphorus at blue hour in Istanbul, Türkiye",
    networks: "Turkcell, Türk Telekom and Vodafone Türkiye operate the country’s mobile networks.",
    coverage: "4G/LTE is broadly available; provider wording and local 5G availability should be checked before purchase.",
    plans: [plan("Saily", "Türkiye", 5, "5 GB", 30, 14.99, "4G / LTE", "#3626a7", "Balanced pick"), plan("Airalo", "Merhaba", 10, "10 GB", 30, 18, "4G / LTE", "#ff6b4a", "Popular data plan"), plan("Holafly", "Türkiye Unlimited", 999, "Unlimited", 7, 27.5, "4G / LTE", "#7b2dff", "Unlimited pick"), plan("Nomad", "Türkiye", 10, "10 GB", 30, 16, "4G / LTE", "#6f5cff", "Best price per GB"), plan("Saily", "Türkiye Mini", 1, "1 GB", 7, 3.99, "4G / LTE", "#3626a7", "Short-trip pick"), plan("Airalo", "Merhaba", 3, "3 GB", 30, 8, "4G / LTE", "#ff6b4a", "Light-use plan")],
  },
  japan: {
    name: "Japan", flag: "🇯🇵", code: "JP", region: "Asia", city: "Tokyo", airport: "HND", coordinates: ["35.6762° N", "139.6503° E"],
    heroImage: "/images/japan-esim-hero.jpg", heroWidth: 1200, heroHeight: 630, heroPosition: "center 47%", heroAlt: "Tokyo Tower and the city skyline at blue hour in Japan",
    networks: "NTT Docomo, au, SoftBank and Rakuten Mobile operate mobile networks in Japan.",
    coverage: "Fast 4G is extensive and 5G is available in many urban areas, subject to plan and device support.",
    plans: [plan("Saily", "Japan", 5, "5 GB", 30, 13.99, "5G", "#3626a7", "Balanced pick"), plan("Airalo", "Moshi Moshi", 10, "10 GB", 30, 18, "5G", "#ff6b4a", "Popular data plan"), plan("Holafly", "Japan Unlimited", 999, "Unlimited", 7, 27.5, "5G", "#7b2dff", "Unlimited pick"), plan("Nomad", "Japan", 10, "10 GB", 30, 16, "5G", "#6f5cff", "Best price per GB"), plan("Saily", "Japan Mini", 1, "1 GB", 7, 3.99, "4G / 5G", "#3626a7", "Short-trip pick"), plan("Airalo", "Moshi Moshi", 3, "3 GB", 30, 7, "5G", "#ff6b4a", "Light-use plan")],
  },
  "united-states": {
    name: "United States", flag: "🇺🇸", code: "US", region: "North America", city: "New York", airport: "JFK", coordinates: ["40.7128° N", "74.0060° W"],
    heroImage: "/images/united-states-esim-hero.jpg", heroWidth: 1200, heroHeight: 630, heroPosition: "center 50%", heroAlt: "The Statue of Liberty and Manhattan skyline at blue hour in New York",
    networks: "AT&T, T-Mobile and Verizon operate the major nationwide mobile networks.",
    coverage: "4G is extensive and 5G is common in populated areas, but coverage varies across large rural regions.",
    plans: [plan("Saily", "United States", 5, "5 GB", 30, 16.99, "5G", "#3626a7", "Balanced pick"), plan("Airalo", "Change", 10, "10 GB", 30, 26, "5G", "#ff6b4a", "Popular data plan"), plan("Holafly", "USA Unlimited", 999, "Unlimited", 7, 29, "5G", "#7b2dff", "Unlimited pick"), plan("Nomad", "United States", 10, "10 GB", 30, 17, "5G", "#6f5cff", "Best price per GB"), plan("Saily", "USA Mini", 1, "1 GB", 7, 4.49, "4G / 5G", "#3626a7", "Short-trip pick"), plan("Airalo", "Change", 3, "3 GB", 30, 11, "5G", "#ff6b4a", "Light-use plan")],
  },
};

export const countrySlugs = Object.keys(countryPages);
