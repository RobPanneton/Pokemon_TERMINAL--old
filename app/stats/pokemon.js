const pokemon = {
  venusaur: {
    id: 3,
    type: { type1: "grass", type2: "poison" },
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      special: 100,
      speed: 80,
    },
    attacks: ["tackle", "growl", "leech seed", "vine whip"],
  },
  ratticate: {
    id: 20,
    type: { type1: "normal", type2: null },
    stats: {
      hp: 55,
      attack: 81,
      defense: 60,
      special: 50,
      speed: 97,
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
    type: { type1: "normal", type2: null },
    stats: {
      hp: 75,
      attack: 100,
      defense: 95,
      special: 70,
      speed: 110,
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
