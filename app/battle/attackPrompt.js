const prompt = require("prompt-sync")();

const attackPrompt = (attacks) => {
  const attackList = attacks.map((attack, index) => {
    return `${index + 1}) ${attack.name}           `;
  });
  console.log(`${attackList.join("")}                      9) SWITCH`);
  response = Number(prompt("What will you do?  "));

  if (response === 8) process.exit();

  if (response < 1 || (response > attackList.length && response !== 9)) {
    console.log("\nPlease enter a valid response. \n");
    attackPrompt(attacks);
  }

  return attacks[response - 1];
};

module.exports = { attackPrompt };
