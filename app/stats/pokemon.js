const POKEMON = {
  VENUSAUR: {
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
  CHARIZARD: {
    id: 6,
    species: "CHARIZARD",
    type: { type1: "FIRE", type2: "FLYING" },
    stats: {
      hp: 359,
      attack: 266,
      defense: 254,
      special: 268,
      speed: 298,
    },
    attacks: [
      "SCRATCH",
      "GROWL",
      "EMBER",
      "LEER",
      "RAGE",
      "SLASH",
      "FLAMETHROWER",
      "FIRE SPIN",
    ],
  },
  BLASTOISE: {
    id: 9,
    species: "BLASTOISE",
    type: { type1: "WATER", type2: null },
    stats: {
      hp: 361,
      attack: 264,
      defense: 298,
      special: 268,
      speed: 254,
    },
    attacks: [
      "TACKLE",
      "TAIL WHIP",
      "BUBBLE",
      "WATER GUN",
      "BITE",
      "WITHDRAW",
      "SKULL BASH",
      "HYDRO PUMP",
      "SURF",
      "STRENGTH",
    ],
  },
  BUTTERFREE: {
    id: 12,
    species: "BUTTERFREE",
    type: { type1: "BUG", type2: "FLYING" },
    stats: {
      hp: 323,
      attack: 188,
      defense: 198,
      special: 258,
      speed: 238,
    },
    attacks: [
      "TACKLE",
      "HARDEN",
      "STRING SHOT",
      "CONFUSION",
      "POISON POWDER",
      "STUN SPORE",
      "SLEEP POWDER",
      "SUPERSONIC",
      "WHIRLWIND",
      "PSYBEAM",
    ],
  },
  BEEDRILL: {
    id: 15,
    species: "BEEDRILL",
    type: { type1: "BUG", type2: "POISON" },
    stats: {
      hp: 333,
      attack: 258,
      defense: 178,
      special: 188,
      speed: 248,
    },
    attacks: [
      "POISON STING",
      "HARDEN",
      "STRING SHOT",
      "FURY ATTACK",
      "FOCUS ENERGY",
      "TWINEEDLE",
      "RAGE",
      "PIN MISSILE",
      "AGILITY",
      "SWORDS DANCE",
      "TOXIC",
      "TAKE DOWN",
      "DOUBLE-EDGE",
      "HYPER BEAM",
      "MEGA DRAIN",
      "MIMIC",
      "DOUBLE TEAM",
      "REFLECT",
      "BIDE",
      "SWIFT",
      "CUT",
    ],
  },
  PIDGEOT: {
    id: 18,
    species: "PIDGEOT",
    type: { type1: "NORMAL", type2: "FLYING" },
    stats: {
      hp: 369,
      attack: 258,
      defense: 248,
      special: 238,
      speed: 280,
    },
    attacks: [
      "GUST",
      "SAND-ATTACK",
      "QUICK ATTACK",
      "WHIRLWIND",
      "WING ATTACK",
      "AGILITY",
      "MIRROR MOVE",
    ],
  },

  RATICATE: {
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
  FEAROW: {
    id: 22,
    species: "FEAROW",
    type: { type1: "NORMAL", type2: "FLYING" },
    stats: {
      hp: 333,
      attack: 278,
      defense: 228,
      special: 220,
      speed: 298,
    },
    attacks: [
      "PECK",
      "GROWL",
      "LEER",
      "FURY ATTACK",
      "MIRROR MOVE",
      "DRILL PECK",
      "AGILITY",
    ],
  },
  ARBOK: {
    id: 22,
    species: "ARBOK",
    type: { type1: "POISON", type2: null },
    stats: {
      hp: 323,
      attack: 268,
      defense: 236,
      special: 228,
      speed: 258,
    },
    attacks: [
      "WRAP",
      "LEER",
      "POISON STING",
      "BITE",
      "GLARE",
      "SCREECH",
      "ACID",
    ],
  },
  PIKACHU: {
    id: 25,
    species: "PIKACHU",
    type: { type1: "ELECTRIC", type2: null },
    stats: {
      hp: 273,
      attack: 208,
      defense: 158,
      special: 198,
      speed: 278,
    },
    attacks: [
      "THUNDER SHOCK",
      "GROWL",
      "THUNDER WAVE",
      "QUICK ATTACK",
      "SWIFT",
      "AGILITY",
      "THUNDER",
    ],
  },
  RAICHU: {
    id: 26,
    species: "RAICHU",
    type: { type1: "ELECTRIC", type2: null },
    stats: {
      hp: 323,
      attack: 278,
      defense: 208,
      special: 278,
      speed: 298,
    },
    attacks: [
      "THUNDER SHOCK",
      "GROWL",
      "THUNDER WAVE",
      "QUICK ATTACK",
      "SWIFT",
      "AGILITY",
      "THUNDER",
    ],
  },
  SANDSLASH: {
    id: 28,
    species: "SANDSLASH",
    type: { type1: "GROUND", type2: null },
    stats: {
      hp: 353,
      attack: 298,
      defense: 318,
      special: 208,
      speed: 228,
    },
    attacks: [
      "SCRATCH",
      "SAND-ATTACK",
      "SLASH",
      "POISON STING",
      "SWIFT",
      "FURY SWIPES",
      "EARTHQUAKE",
    ],
  },
  NIDOQUEEN: {
    id: 31,
    species: "NIDOQUEEN",
    type: { type1: "POISON", type2: "GROUND" },
    stats: {
      hp: 383,
      attack: 262,
      defense: 272,
      special: 248,
      speed: 250,
    },
    attacks: [
      "SCRATCH",
      "TACKLE",
      "GROWL",
      "POISON STING",
      "BITE",
      "FURY SWIPES",
      "BODY SLAM",
      "DOUBLE KICK",
      "MEGA PUNCH",
      "MEGA KICK",
      "TOXIC",
      "HORN DRILL",
      "TAKE DOWN",
      "DOUBLE-EDGE",
      "BUBBLEBEAM",
      "WATER GUN",
      "ICE BEAM",
      "BLIZZARD",
      "HYPER BEAM",
      "PAY DAY",
      "SUBMISSION",
      "COUNTER",
      "SEISMIC TOSS",
      "RAGE",
      "THUNDERBOLT",
      "THUNDER",
      "EARTHQUAKE",
      "FISSURE",
      "MIMIC",
      "DOUBLE TEAM",
      "REFLECT",
      "BIDE",
      "FIRE BLAST",
      "SKULL BASH",
      "REST",
      "ROCK SLIDE",
      "SUBSTITUTE",
      "SURF",
      "STRENGTH",
    ],
  },
  NIDOKING: {
    id: 34,
    species: "NIDOKING",
    type: { type1: "POISON", type2: "GROUND" },
    stats: {
      hp: 365,
      attack: 282,
      defense: 252,
      special: 248,
      speed: 250,
    },
    attacks: [
      "LEER",
      "TACKLE",
      "HORN ATTACK",
      "POISON STING",
      "FOCUS ENERGY",
      "FURY ATTACK",
      "HORN DRILL",
      "DOUBLE KICK",
      "THRASH",
      "MEGA PUNCH",
      "MEGA KICK",
      "TOXIC",
      "BODY SLAM",
      "TAKE DOWN",
      "DOUBLE-EDGE",
      "BUBBLEBEAM",
      "WATER GUN",
      "ICE BEAM",
      "BLIZZARD",
      "HYPER BEAM",
      "PAY DAY",
      "SUBMISSION",
      "COUNTER",
      "SEISMIC TOSS",
      "RAGE",
      "THUNDERBOLT",
      "THUNDER",
      "EARTHQUAKE",
      "FISSURE",
      "MIMIC",
      "DOUBLE TEAM",
      "REFLECT",
      "BIDE",
      "FIRE BLAST",
      "SKULL BASH",
      "REST",
      "ROCK SLIDE",
      "SUBSTITUTE",
      "SURF",
      "STRENGTH",
    ],
  },
  CLEFABLE: {
    id: 36,
    species: "CLEFABLE",
    type: { type1: "NORMAL", type2: null },
    stats: {
      hp: 393,
      attack: 238,
      defense: 244,
      special: 268,
      speed: 218,
    },
    attacks: [],
  },
  NINETALES: {
    id: 38,
    species: "NINETALES",
    type: { type1: "FIRE", type2: null },
    stats: {
      hp: 349,
      attack: 250,
      defense: 248,
      special: 298,
      speed: 298,
    },
    attacks: [],
  },
  WIGGLYTUFF: {
    id: 40,
    species: "WIGGLYTUFF",
    type: { type1: "NORMAL", type2: null },
    stats: {
      hp: 483,
      attack: 238,
      defense: 188,
      special: 198,
      speed: 188,
    },
    attacks: [],
  },
  GOLBAT: {
    id: 42,
    species: "GOLBAT",
    type: { type1: "POISON", type2: "FLYING" },
    stats: {
      hp: 353,
      attack: 258,
      defense: 238,
      special: 248,
      speed: 278,
    },
    attacks: [],
  },
  VILEPLUME: {
    id: 45,
    species: "VILEPLUME",
    type: { type1: "GRASS", type2: "POISON" },
    stats: {
      hp: 353,
      attack: 258,
      defense: 268,
      special: 298,
      speed: 198,
    },
    attacks: [],
  },
  NAME: {
    id: 1,
    species: 1,
    type: { type1: 1, type2: null },
    stats: {
      hp: 1,
      attack: 1,
      defense: 1,
      special: 1,
      speed: 1,
    },
    attacks: [],
  },

  NAME: {
    id: 1,
    species: 1,
    type: { type1: 1, type2: null },
    stats: {
      hp: 1,
      attack: 1,
      defense: 1,
      special: 1,
      speed: 1,
    },
    attacks: [],
  },

  TAUROS: {
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

module.exports = { POKEMON };
