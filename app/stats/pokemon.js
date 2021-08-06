const pokemon = {
  venusaur: {
    id: 3,
    species: "venusaur",
    type: { type1: "grass", type2: "poison" },
    stats: {
      hp: 263,
      attack: 262,
      defense: 264,
      special: 298,
      speed: 258,
    },
    attacks: ["tackle", "growl", "leech seed", "vine whip"],
  },
  ratticate: {
    id: 20,
    species: "ratticate",
    type: { type1: "normal", type2: null },
    stats: {
      hp: 313,
      attack: 260,
      defense: 218,
      special: 198,
      speed: 292,
    },
    attacks: [
      "tackle",
      "tail whip",
      "quick attack",
      "hyper fang",
      "super fang",
    ],
  },
  tauros: {
    id: 128,
    species: "tauros",
    type: { type1: "NORMAL", type2: null },
    stats: {
      hp: 353,
      attack: 298,
      defense: 288,
      special: 238,
      speed: 318,
    },
    attacks: [
      "tackle",
      "tail whip",
      "stomp",
      "leer",
      "rage",
      "take down",
      "strength",
    ],
  },
};

module.exports = pokemon;
