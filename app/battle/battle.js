const attacks = require("../stats/attacks");

const { attackPrompt } = require("./attackPrompt");
const { timeDelay } = require("../utils");
const { intiateTurn, initiateTurn } = require("./initiateTurn");

const battle = async () => {
  let user1 = {
    name: "user",
    team: [
      {
        species: "TAUROS",
        level: 100,
        hp: 353,
        maxHp: 353,
        type: { type1: "NORMAL", type2: null },
        stats: {
          hp: 353,
          attack: 298,
          defense: 288,
          special: 238,
          speed: 318,
        },
        attacks: [attacks.attacks.stomp],
      },
    ],
  };

  let user2 = {
    name: "npc",
    team: [
      {
        id: 20,
        species: "RATTICATE",
        level: 100,
        hp: 313,
        maxHp: 313,
        type: { type1: "normal", type2: null },
        stats: {
          hp: 313,
          attack: 260,
          defense: 218,
          special: 198,
          speed: 292,
        },
        attacks: [attacks.attacks.tackle],
      },
    ],
  };

  // await timeDelay(250);

  await console.log(`${user1.name} sent out ${user1.team[0].species}!\n`);

  // await timeDelay(1000);

  console.log(`${user2.name} sent out ${user2.team[0].species}!\n`);

  // await timeDelay(500);

  let selectedMove = await attackPrompt(user1.team[0].attacks);

  let turnResult = await initiateTurn(
    { pokemon1: user1.team[0], attack1: selectedMove },
    { pokemon2: user2.team[0], attack2: attacks.attacks.tackle }
  );

  return;
};

battle();

module.exports = () => {
  battle;
};
