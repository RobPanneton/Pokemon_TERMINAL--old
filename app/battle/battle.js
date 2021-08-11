const attacks = require("../stats/attacks");

const { attackPrompt } = require("./attackPrompt");
const { timeDelay } = require("../utils");
const { initiateTeam } = require("./initiateTeam");
const { initiateTurn } = require("./initiateTurn");
const { userTeams } = require("../teams/userTeams");
const { npcTeams } = require("../teams/npcTeams");

const initiateBattle = async () => {
  // let user1 = {
  //   name: "user",
  //   team: [
  //     {
  //       id: 9,
  //       species: "BLASTOISE",
  //       level: 100,
  //       hp: 361,
  //       maxHp: 361,
  //       type: { type1: "WATER", type2: null },
  //       stats: {
  //         hp: 361,
  //         attack: 264,
  //         defense: 298,
  //         special: 268,
  //         speed: 254,
  //       },
  //       attacks: [attacks.attacks.SURF, attacks.attacks.STRENGTH],
  //     },
  //   ],
  // };

  let user2 = {
    name: "npc",
    team: [
      {
        id: 6,
        species: "CHARIZARD",
        level: 100,
        hp: 359,
        maxHp: 359,
        type: { type1: "FIRE", type2: "FLYING" },
        stats: {
          hp: 359,
          attack: 266,
          defense: 254,
          special: 268,
          speed: 298,
        },
        attacks: [attacks.attacks.FLAMETHROWER],
      },
    ],
  };

  // along with adding hp, you'll need to add the pp for all of the attacks and keep track of them throughout the battle

  // await timeDelay(250);

  let team1 = await initiateTeam(userTeams.team1);
  let team2 = await initiateTeam(npcTeams.test1);

  console.log(team2);

  process.exit();

  console.log(`\n${user1.name} sent out ${user1.team[0].species}!\n`);

  // await timeDelay(1000);

  console.log(`${user2.name} sent out ${user2.team[0].species}!\n`);

  // await timeDelay(500);

  isWinner = false;

  while (!isWinner) {
    let selectedMove = await attackPrompt(user1.team[0].attacks);

    let turnResult = await initiateTurn(
      { pokemon1: user1.team[0], attack1: selectedMove },
      { pokemon2: user2.team[0], attack2: user2.team[0].attacks[0] }
    );

    user1.team[0] = turnResult[0];
    user2.team[0] = turnResult[1];

    // temporary winchecker
    if (user1.team[0].hp === 0 || user2.team[0].hp === 0) isWinner = true;
  }

  console.log("User1 Wins!");

  return;
};

module.exports = {
  initiateBattle,
};

// script for clearing the terminal text, "scrolls down"
// this way user can see previous text if wanted
// const readline = require("readline");
// const blank = "\n".repeat(process.stdout.rows);
// console.log(blank);
// readline.cursorTo(process.stdout, 0, 0);
// readline.clearScreenDown(process.stdout);
