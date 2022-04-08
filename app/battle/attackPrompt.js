const prompt = require("prompt-sync")();

const attackPrompt = (attacks) => {
  const attackList = attacks.map((attack, index) => {
    return `${index + 1}) ${attack.name}           `;
  });
  response = Number(userAttackSelect(attackList));

  if (response === 8) process.exit();

  while (response < 1 || (response > attackList.length && response !== 9)) {
    console.log("\nPlease enter a valid response. \n");
    response = Number(userAttackSelect(attackList));
  }

  return attacks[response - 1];
};

const userAttackSelect = (options) => {
  console.log(`${options.join("")}                      9) SWITCH`);
  return Number(prompt("What will you do?  "));
};

module.exports = { attackPrompt };
