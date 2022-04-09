const prompt = require("prompt-sync")();

const { POKEMON } = require("../stats/pokemon");

const createTeamMain = () => {
  const pokemonListString = Object.keys(POKEMON).map((poke, index) => {
    if ((index + 1) % 4 === 0) return `${POKEMON[poke].id}) ${poke}\n\n`;
    return `${POKEMON[poke].id}) ${poke}   `;
  });

  console.log(
    "=================================================================\n=======================   CREATE A TEAM   =======================\n=================================================================\n"
  );
  console.log("CHOOSE YOUR POKEMON\n");

  console.log(`${pokemonListString.join("")}      9) Exit\n`);
  let userInput = prompt("Enter A Pokedex Number: ");
  // if ()
  return;
};

module.exports = { createTeamMain };
