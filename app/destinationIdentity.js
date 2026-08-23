const continentHue = {
  Europe: 173,
  Asia: 207,
  Africa: 31,
  "North America": 258,
  "South America": 142,
  Oceania: 191,
};

function slugHash(slug) {
  return [...slug].reduce((total, character) => total + character.charCodeAt(0), 0);
}

export function destinationIdentity(slug, region) {
  const hue = (continentHue[region] || 173) + (slugHash(slug) % 17) - 8;
  return {
    className: `destinationCanvas destinationCanvas--${slug}`,
    attributes: {
      "data-destination": slug,
      "data-continent": region.toLowerCase().replaceAll(" ", "-"),
    },
    style: {
      "--ink": `hsl(${hue} 35% 20%)`,
      "--ocean": `hsl(${hue} 34% 36%)`,
      "--signal": `hsl(${(hue + 151) % 360} 78% 48%)`,
      "--line": `hsl(${hue} 25% 76%)`,
      "--sky": `hsl(${hue} 29% 92%)`,
      "--paper": `hsl(${hue} 24% 98%)`,
    },
  };
}
