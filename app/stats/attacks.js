const attacks = {
  tackle: {
    name: "TACKLE",
    attack: 35,
    accuracy: 100,
    type: "NORMAL",
  },
  stomp: {
    name: "STOMP",
    attack: 65,
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
    flinch: true,
    seed: true,
    bind: true,
    heal: 50,
    ohko: true,
    multpy: "rng",
  },
  // try to dynamically code dig, fly, sky attack, etc, charge up and recharge moves
};

module.exports = { attacks };
