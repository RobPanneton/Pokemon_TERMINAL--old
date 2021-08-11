const attacks = {
  TACKLE: {
    name: "TACKLE",
    attack: 35,
    accuracy: 100,
    type: "NORMAL",
  },
  STOMP: {
    name: "STOMP",
    attack: 65,
    accuracy: 100,
    type: "NORMAL",
    effect: {
      chance: 33,
      flinch: true,
    },
  },

  FLAMETHROWER: {
    name: "FLAMETHROWER",
    attack: 95,
    accuracy: 100,
    type: "FIRE",
    effect: {
      chance: 10,
      status: "BURN",
    },
  },
  SURF: {
    name: "SURF",
    attack: 95,
    accuracy: 100,
    type: "WATER",
  },
  STRENGTH: {
    name: "STRENGTH",
    attack: 80,
    accuracy: 100,
    type: "NORMAL",
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
