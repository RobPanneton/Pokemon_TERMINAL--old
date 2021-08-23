const attacks = {
  ABSORB: {
    name: "ABSORB",
    power: 20,
    accuracy: 100,
    type: "GRASS",
    effect: {
      chance: 100,
      drain: 50,
      // if damage is 1, heals 1, does not heal from substitute dmg
    },
  },
  ACID: {
    name: "ACID",
    power: 40,
    accuracy: 100,
    type: "POISON",
    effect: {
      chance: 85 / 256,
      enemyStatChange: {
        defense: -1,
      },
    },
  },
  ACIDARMOR: {
    name: "ACID ARMOR",
    power: 0,
    accuracy: 100,
    type: "POISON",
    effect: {
      chance: 100,
      userStatChange: {
        defense: 2,
      },
    },
  },
  AGILITY: {
    name: "AGILITY",
    power: 0,
    accuracy: 100,
    type: "PSYCHIC",
    effect: {
      chance: 100,
      userStatChange: {
        speed: 2,
      },
    },
  },
  AMNESIA: {
    name: "AMNESIA",
    power: 0,
    accuracy: 100,
    type: "PSYCHIC",
    effect: {
      chance: 100,
      userStatChange: {
        special: 2,
      },
    },
  },
  AURORABEAM: {
    name: "AURORA BEAM",
    power: 65,
    accuracy: 100,
    type: "ICE",
    effect: {
      chance: 85 / 256,
      enemyStatChange: {
        attack: -1,
      },
    },
  },
  TACKLE: {
    name: "TACKLE",
    power: 35,
    accuracy: 95,
    type: "NORMAL",
  },
  EARTHQUAKE: {
    name: "EARTHQUAKE",
    power: 100,
    accuracy: 100,
    type: "GROUND",
  },
  STOMP: {
    name: "STOMP",
    power: 65,
    accuracy: 100,
    type: "NORMAL",
    effect: {
      chance: 33,
      flinch: true,
    },
  },

  FLAMETHROWER: {
    name: "FLAMETHROWER",
    power: 95,
    accuracy: 100,
    type: "FIRE",
    effect: {
      chance: 10,
      status: "BURN",
    },
  },
  SURF: {
    name: "SURF",
    power: 95,
    accuracy: 100,
    type: "WATER",
  },
  STRENGTH: {
    name: "STRENGTH",
    power: 80,
    accuracy: 100,
    type: "NORMAL",
  },
  VINEWHIP: {
    name: "VINE WHIP",
    power: 35,
    accuracy: 100,
    type: "GRASS",
  },
  THUNDERBOLT: {
    name: "THUNDERBOLT",
    power: 95,
    accuracy: 100,
    type: "ELECTRIC",
    effect: {
      chance: 10,
      effect: "PARALYZE",
    },
  },
};

// logic for attack effects
// effect %
// status effect
// bind
// seed (you'll need a seed leech function to leech and heal the reciever)
// flinch (add condition to replace 2nd attack with flinch message)
// buff (increase pokemon's stats while keeping in mind damage cap)
// curse (decrease opponent's stats
// for buffs and curses, modify stats as you would hp and return the new values in object that battle() returns

const attackExample = {
  name: "name",
  power: "att",
  accuracy: "acc",
  type: "type",
  effect: {
    status: {
      burn: true,
      paralyze: true,
      freeze: true,
      sleep: true,
    },
    confused: true,
    flinch: true,
    seed: true,
    bind: true,
    heal: 50,
    ohko: true,
    multpy: "rng with parameters",
    conversion: {
      type: "NORMAL",
    },
    // counter: true,
    // critBonus: true,
    // disable: true,
    // recoil: true,
    // setDamage: "pokemon.level",
    // sleepCondition: "forDreamEater",
    // digCondition: "forEarthquake",
    // selfKill: true,
    // statReset: "haze",
    // missDamage: "high jump kick",
    // metronome
    // mirror move
    // mimic
    // mist
    // pay day ??
    // frenzy + confusion === petal dance
    // psywave
    // rage ( raise user's attack when hit)
    // recover - soft-boiled
    // rest
    // reflect
    // light screen
    // roar: phasing
    // skull bash
    // set damage (dragon rage, sonicboom)
    // ,,, focus energy?? glitched in gen 1 ? what to do..
    // splash
    // substitute
    // super fang
    // swift when accuracy changes are added
    // teleport
    // transform
  },
  // try to dynamically code dig, fly, sky attack, etc, charge up and recharge moves
};

module.exports = { attacks };
