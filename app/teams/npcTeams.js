const npcTeams = {
  test1: {
    id: 1,
    name: "test1",
    team: [
      {
        slot: 1,
        species: "BLASTOISE",
        level: 100,
        attacks: [attacks.attacks.SURF, attacks.attacks.STRENGTH],
      },
      {
        slot: 2,
        species: "CHARIZARD",
        level: 100,
        attacks: [attacks.attacks.FLAMETHROWER],
      },
      {
        slot: 3,
        species: "VENUSAUR",
        level: 100,
        attacks: [attacks.attacks.VINEWHIP],
      },
    ],
  },
};

module.exports = { npcTeams };
