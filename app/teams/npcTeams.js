const { attacks } = require("../stats/attacks");

const npcTeams = {
  test1: {
    id: 1,
    trainerName: "NPC Trainer",
    teamName: "Test Team 1",
    team: [
      {
        species: "BLASTOISE",
        level: 100,
        attacks: [attacks.SURF, attacks.STRENGTH],
      },
      {
        species: "CHARIZARD",
        level: 100,
        attacks: [attacks.FLAMETHROWER],
      },
      {
        species: "VENUSAUR",
        level: 100,
        attacks: [attacks.VINEWHIP],
      },
    ],
  },
};

module.exports = { npcTeams };
