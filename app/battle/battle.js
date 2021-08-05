const attacks = require("../stats/attacks");

const { attackPrompt } = require("./attackPrompt");
const { timeDelay } = require("../utils");

const battle = async () => {
  const user1 = {
    name: "user",
    team: [
      {
        species: "tauros",
        hp: 75,
        maxHp: 75,
        type: { type1: "normal", type2: null },
        stats: {
          hp: 75,
          attack: 100,
          defense: 95,
          special: 70,
          speed: 110,
        },
        attacks: [attacks.attacks.stomp],
      },
    ],
  };

  const user2 = {
    name: "npc",
    team: [
      {
        id: 20,
        species: "ratticate",
        type: { type1: "normal", type2: null },
        stats: {
          hp: 55,
          attack: 81,
          defense: 60,
          special: 50,
          speed: 97,
        },
        attacks: [attacks.attacks.tackle],
      },
    ],
  };

  await timeDelay(250);

  await console.log(`${user1.name} sent out ${user1.team[0].species}!\n`);

  await timeDelay(1000);

  console.log(`${user2.name} sent out ${user2.team[0].species}!\n`);

  //   console.log(attacks.attacks.stomp);
  //   console.log(user1.team[0].attacks);

  await timeDelay(500);

  await attackPrompt(user1.team[0].attacks);

  return;
};

battle();

module.exports = () => {
  battle;
};
