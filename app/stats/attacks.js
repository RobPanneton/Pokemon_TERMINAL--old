// TODOS :                                    ~~~~~~~ MOVE CREATION TO DOS ~~~~~~~
// BIDE
// TRAPPERS : BIND, CLAMP, FIRE SPIN
// CONVERSION
// COUNTER
// DIG
// DISABLE
// DOUBLE TEAM (?)
// DREAM EATER
// EXPLOSION
// 1HKO MOVES: FISSURE, HORN DRILL, GUILLOTINE
// ACCURACY MOVES? FLASH, SAND-ATTACK, MINIMIZE, DOUBLE TEAM
// FLY
// FOCUS ENERGY ??? bugged in gen 1.. do i even add it ?

// HIGH CRIT RATIO MOVES: CRABHAMMER, SLASH

// TO BE TESTED:                              ~~~~~~~ TEST TO DOS ~~~~~~~

// FLINCH : BITE,
// DRAIN: ABSORB,
// STATMODS: ACID, AURORA BEAM
// MULTI HIT: BARRAGE
// RECOIL DAMAGE: DOUBLE-EDGE
// FIXED DAMAGE: DRAGON RAGE

// NOTEABLE POINTS:                      ~~~~~~~ EXCEPTION TO DOS ~~~~~~~

// MULTI HIT MOVES:
// - CRITS: only checks for crits on 1st attack, subsequent hits are also crit if first lands
// - BIDE/COUNTER: only registers last hit
// - SUBSTITUTE: Stops multi-hit if sub breaks
// RECOILING MOVES:
// - SUBSITUTE: user does not take recoil damage if it destroys a sub
// - COUNTER: sub recoil dmg is included in dmg calc if enemy did not move yet (?)

// BODY SLAM: does not paralyze normal types in gen 1!? woah

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
      chance: (85 / 256) * 100,
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
      selfStatChange: {
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
      selfStatChange: {
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
      selfStatChange: {
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
      chance: (85 / 256) * 100,
      enemyStatChange: {
        attack: -1,
      },
    },
  },
  BARRAGE: {
    name: "BARRAGE",
    power: 15,
    accuracy: 85,
    type: "NORMAL",
    effect: {
      chance: 100,
      multihit: {
        2: 37.5,
        3: 75,
        4: 87.5,
        5: 100,
        // use rng and whatever is highest and <= is the result
      },
    },
  },
  BARRIER: {
    name: "BARRIER",
    power: 0,
    accuracy: 100,
    type: "PSYCHIC",
    effect: {
      chance: 100,
      selfStatChange: {
        defense: 2,
      },
    },
  },
  BIDE: {
    name: "BIDE",
    //TODO
  },
  BIND: {
    name: "BIND",
    //TOOD
  },
  BITE: {
    name: "BITE",
    power: 60,
    accuracy: 100,
    type: "NORMAL",
    effect: {
      chance: 10,
      volatileStatus: "flinch",
    },
  },
  BLIZZARD: {
    name: "BLIZZARD",
    power: 120,
    accuracy: 90,
    type: "ICE",
    effect: {
      chance: 10,
      status: "freeze",
    },
  },
  BODYSLAM: {
    name: "BODY SLAM",
    power: 80,
    accuracy: 100,
    effect: {
      chance: 30,
      status: "paralyze",
      // cannot paralyze normal types??
    },
  },
  BONECLUB: {
    name: "BONE CLUB",
    power: 65,
    accuracy: 85,
    type: "GROUND",
    effect: {
      chance: 10,
      volatileStatus: "flinch",
    },
  },
  BONEMERANG: {
    name: "BONEMERANG",
    power: 50,
    accuracy: 90,
    type: "GROUND",
    effect: {
      chance: 100,
      multihit: {
        2: 100,
      },
    },
  },
  BUBBLE: {
    name: "BUBBLE",
    power: 20,
    accuracy: 100,
    type: "WATER",
    effect: {
      chance: (85 / 256) * 100,
      enemyStatChange: {
        speed: -1,
      },
    },
  },
  BUBBLEBEAM: {
    name: "BUBBLEBEAM",
    power: 65,
    accuracy: 100,
    type: "WATER",
    effect: {
      chance: (85 / 256) * 100,
      enemyStatChange: {
        speed: -1,
      },
    },
  },
  CLAMP: {
    name: "CLAMP",
    //TODO
  },
  COMETPUNCH: {
    name: "COMET PUNCH",
    power: 18,
    accuracy: 85,
    type: "NORMAL",
    effect: {
      chance: 100,
      multihit: {
        2: 37.5,
        3: 75,
        4: 87.5,
        5: 100,
        // use rng and whatever is highest and <= is the result
      },
    },
  },
  CONFUSERAY: {
    name: "CONFUSE RAY",
    power: 0,
    accuracy: 100,
    type: "GHOST",
    effect: {
      chance: 100,
      volatileStatus: "confusion",
    },
  },
  CONFUSION: {
    name: "CONFUSION",
    power: 50,
    accuracy: 100,
    type: "PSYCHIC",
    effect: {
      chance: 10,
      volatileStatus: "confusion",
    },
  },
  CONSTRICT: {
    name: "CONSTRICT",
    power: 10,
    accuracy: 100,
    type: "NORMAL",
    effect: {
      chance: (85 / 256) * 100,
      enemyStatChange: {
        speed: -1,
      },
    },
  },
  CONVERSION: {
    name: "CONVERSION",
    //TODO
  },

  COUNTER: {
    name: "COUNTER",
    //TOOD
  },
  CRABHAMMER: {
    name: "CRABHAMMER",
    power: 90,
    accuracy: 85,
    effect: {
      // high crit ratio
    },
  },
  CUT: {
    name: "CUT",
    power: 50,
    accuracy: 95,
    type: "NORMAL",
  },
  DEFENSECURL: {
    name: "DEFENSE CURL",
    power: 0,
    accuracy: 100,
    type: "NORMAL",
    effect: {
      chance: 100,
      selfStatChange: {
        defense: 1,
      },
    },
  },
  DIG: {
    name: "DIG",
    // TOOD
  },
  DISABLE: {
    name: "DISABLE",
    // TODO
  },
  DIZZYPUNCH: {
    name: "DIZZY PUNCH",
    power: 70,
    accuracy: 100,
    type: "NORMAL",
    effect: {
      chance: 20,
      volatileStatus: "confuse",
    },
  },
  DOUBLEKICK: {
    name: "DOUBLE KICK",
    power: 30,
    accuracy: 100,
    type: "FIGHTING",
    effect: {
      chance: 100,
      multihit: {
        2: 100,
      },
    },
  },
  DOUBLESLAP: {
    name: "DOUBLESLAP",
    power: 15,
    accuracy: 85,
    type: "NORMAL",
    effect: {
      chance: 100,
      multihit: {
        2: 37.5,
        3: 75,
        4: 87.5,
        5: 100,
      },
    },
  },
  DOUBLETEAM: {
    name: "DOUBLE TEAM",
    // TO DO?? add or no?
  },
  DOUBLEEDGE: {
    name: "DOUBLE-EDGE",
    power: 100,
    accuracy: 100,
    type: "NORMAL",
    effect: {
      chance: 100,
      recoil: 25,
      // RECOIL DOES NOT TAKE EFFECT IF MOVE DESTROYS SUBSTITUTE,
      // ALSO, DMG CAN BE USED FOR "COUNTER" ???
    },
  },
  DRAGONRAGE: {
    name: "DRAGON RAGE",
    power: 0,
    accuracy: 100,
    type: "DRAGON",
    effect: {
      chance: 100,
      damage: 40,
    },
  },
  DREAMEATER: {
    name: "DREAM EATER",
    // TODO
  },
  DRILLPECK: {
    name: "DRILL PECK",
    power: 80,
    accuracy: 100,
    type: "FLYING",
  },
  EARTHQUAKE: {
    name: "EARTHQUAKE",
    power: 100,
    accuracy: 100,
    type: "GROUND",
  },
  EGGBOMB: {
    name: "EGG BOMB",
    power: 100,
    accuracy: 75,
    type: "NORMAL",
  },
  EMBER: {
    name: "EMBER",
    power: 40,
    accuracy: 100,
    type: "FIRE",
  },
  EXPLOSION: {
    name: "EXPLOSION",
    // TO DO
    // this is a tricky one
    // explosion does not faint user if a substitute is out -- **ONLY IN STADIUM 1 DOES IT FAINT... STILL GEN 1**
    // explosion damage calc takes enemy def down 1 stage during damage calc
    // you can either re-work around this, or make base power 340 instead of 170..
    // however 340 might not be accurate if the enemy's def was already reduced 1 stage as
    // the def isn't halved anymore
  },
  FIREBLAST: {
    name: "FIRE BLAST",
    power: 120,
    accuracy: 85,
    type: "FIRE",
    effect: {
      chance: 30,
      status: "burn",
    },
  },
  FIREPUNCH: {
    name: "FIRE PUNCH",
    power: 75,
    accuracy: 100,
    type: "FIRE",
    effect: {
      chance: 10,
      status: "burn",
    },
  },
  FIRESPIN: {
    name: "FIRE SPIN",
    // TODO
  },
  FISSURE: {
    name: "FISSURE",
    power: 0,
    accuracy: 30,
    type: "GROUND",
    //TO DO
  },
  FLAMETHROWER: {
    name: "FLAMETHROWER",
    power: 95,
    accuracy: 100,
    type: "FIRE",
    effect: {
      chance: 10,
      status: "burn",
    },
  },
  FLASH: {
    name: "FLASH",
    // TO DO.. to add or not to add
  },
  FLY: {
    name: "FLY",
    // TODO
  },
  FOCUSENERGY: {
    name: "FOCUS ENERGY",
    // TO DO?
  },
  FURYATTACK: {
    name: "FURY ATTACK",
    power: 15,
    accuracy: 85,
    type: "NORMAL",
    effect: {
      chance: 100,
      multihit: {
        2: 37.5,
        3: 75,
        4: 87.5,
        5: 100,
        // use rng and whatever is highest and <= is the result
      },
    },
  },
  FURYSWIPES: {
    name: "FURY SWIPES",
    power: 18,
    accuracy: 80,
    type: "NORMAL",
    effect: {
      chance: 100,
      multihit: {
        2: 37.5,
        3: 75,
        4: 87.5,
        5: 100,
        // use rng and whatever is highest and <= is the result
      },
    },
  },
  TACKLE: {
    name: "TACKLE",
    power: 35,
    accuracy: 95,
    type: "NORMAL",
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
