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
      "--ink": `hsl(${hue} 40% 24%)`,
      "--ocean": `hsl(${hue} 52% 43%)`,
      "--signal": `hsl(${(hue + 151) % 360} 86% 58%)`,
      "--line": `hsl(${hue} 38% 79%)`,
      "--sky": `hsl(${hue} 64% 94%)`,
      "--paper": `hsl(${hue} 70% 99%)`,
      "--sunwash": `hsl(${(hue + 151) % 360} 92% 94%)`,
    },
  };
}
