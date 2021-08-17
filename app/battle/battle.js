const attacks = require("../stats/attacks");

const { attackPrompt } = require("./attackPrompt");
const { timeDelay } = require("../utils");
const { initiateTeam } = require("./initiateTeam");
const { initiateTurn } = require("./initiateTurn");
const { playerSwitch } = require("./playerSwitch");
const { npcSwitch } = require("./npcSwitch");
const { winChecker } = require("./winChecker");
const { userTeams } = require("../teams/userTeams");
const { npcTeams } = require("../teams/npcTeams");

const initiateBattle = async () => {
  // along with adding hp,
  // you'll need to add the pp for all of the attacks and keep track of them throughout the battle

  // await timeDelay(250);

  let player1 = await initiateTeam(userTeams.team1);
  let player2 = await initiateTeam(npcTeams.test1);

  // send out pokemon, make temp copy.
  // when switching or fainted, use id(index) to replace the version in player.team
  player1.currentPokemon = player1.team[0];
  player2.currentPokemon = player2.team[0];

  console.log(
    `\n${player1.trainerName} sent out ${player1.currentPokemon.species}!\n`
  );

  // await timeDelay(1000);

  console.log(
    `\n${player2.trainerName} sent out ${player2.currentPokemon.species}!\n`
  );

  // await timeDelay(500);

  let winner = "";
  let loser = "";

  while (!winner) {
    let selectedMove = await attackPrompt(player1.currentPokemon.attacks);
    // insert npc rng for move selection, and eventually, maybe a bot thatll dynamically select moves based on situation
    // insert speed check here

    // set logic so that you have a first and second mover, instead of p1 then p2
    // you'll need the right logic to set the team stats according to the speed check winner
    let turnResult = await initiateTurn(
      { pokemon1: player1.currentPokemon, attack1: selectedMove },
      {
        pokemon2: player2.currentPokemon,
        attack2: player2.currentPokemon.attacks[0],
      }
    );

    player1.currentPokemon = turnResult[0];
    player2.currentPokemon = turnResult[1];

    if (player2.currentPokemon.hp === 0) {
      player2.currentPokemon.fainted = true;
      player2.team[player2.currentPokemon.id] = player2.currentPokemon;

      if (await winChecker(player2.team)) {
        winner = player1.trainerName;
        loser = player2.trainerName;
      } else {
        player2.currentPokemon = await npcSwitch(player2.team);
        console.log(
          `\n${player2.trainerName} sent out ${player2.currentPokemon.species}\n`
        );
      }
    }

    if (player1.currentPokemon.hp === 0) {
      player1.currentPokemon.fainted = true;
      player1.team[player1.currentPokemon.id] = player1.currentPokemon;

      if (await winChecker(player1.team)) {
        winner = player2.trainerName;
        loser = player1.trainerName;
      } else {
        player1.currentPokemon = await playerSwitch(player1.team);
        console.log(
          `\n${player1.trainerName} sent out ${player1.currentPokemon.species}\n`
        );
      }
    }

    // temporary winchecker
    // if (player1.team[0].hp === 0 || player2.team[0].hp === 0) winner = true;
  }

  console.log(`${winner} has won the battle!`);

  return;
};

module.exports = {
  initiateBattle,
};

// let userexample = {
//   trainerName: "user",
//   team: [
//     {
//       id: 0,
//       species: "BLASTOISE",
//       level: 100,
//       hp: 361,
//       maxHp: 361,
//       fainted: false,
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

// script for clearing the terminal text, "scrolls down"
// this way user can see previous text if wanted
// const readline = require("readline");
// const blank = "\n".repeat(process.stdout.rows);
// console.log(blank);
// readline.cursorTo(process.stdout, 0, 0);
// readline.clearScreenDown(process.stdout);
// slide that into a util function when nearing completion and add callbacks between events

// DAMAGE NOTES
// NIDOKING USING EARTHQUAKE ON RAICHU DOES 1 HP MNORE  THAN MAX POSSIBLE DMG ROLL
// WITH SAME DMG CALC, BLASTOISE'S SURF ON NIDOKING DOES PERFECT MAX DAMAGE
