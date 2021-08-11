const { attacks } = require("../stats/attacks");

const userTeams = {
  team1: {
    id: 1,
    trainerName: "USER TEAM",
    teamName: "TEAM 1",
    team: [
      {
        species: "RAICHU",
        level: 100,
        attacks: [attacks.THUNDERBOLT],
      },
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

console.log(attacks);
// console.log(team1.team[0].attacks);

module.exports = { userTeams };
