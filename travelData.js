const countryInfo = {
  japan: {
    emoji: "🇯🇵",
    fact: "Japan has more than 6,800 islands!"
  },
  italy: {
    emoji: "🇮🇹",
    fact: "Italy is home to the oldest university in the world, University of Bologna!"
  },
  brazil: {
    emoji: "🇧🇷",
    fact: "Brazil is the only country in South America that speaks Portuguese!"
  }
};

export function getCountryInfo(country) {
  return countryInfo[country] || { emoji: "❓", fact: "No info available." };
}