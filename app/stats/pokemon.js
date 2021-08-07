const pokemon = {
  venusaur: {
    id: 3,
    species: "VENUSAUR",
    type: { type1: "GRASS", type2: "POISON" },
    stats: {
      hp: 263,
      attack: 262,
      defense: 264,
      special: 298,
      speed: 258,
    },
    attacks: ["TACKLE", "GROWL", "LEECH SEED", "VINE WHIP"],
  },
  ratticate: {
    id: 20,
    species: "RATICATE",
    type: { type1: "NORMAL", type2: null },
    stats: {
      hp: 313,
      attack: 260,
      defense: 218,
      special: 198,
      speed: 292,
    },
    attacks: [
      "TACKLE",
      "TAIL WHIP",
      "QUICK ATTACK",
      "HYPER FANG",
      "SUPER FANG",
    ],
  },
  tauros: {
    id: 128,
    species: "TAUROS",
    type: { type1: "NORMAL", type2: null },
    stats: {
      hp: 353,
      attack: 298,
      defense: 288,
      special: 238,
      speed: 318,
    },
    attacks: [
      "TACKLE",
      "TAIL WHIP",
      "STOMP",
      "LEER",
      "RAGE",
      "TAKE DOWN",
      "STRENGTH",
    ],
  },
};

module.exports = pokemon;
