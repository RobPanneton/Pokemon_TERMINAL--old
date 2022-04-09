const prompt = require("prompt-sync")();

const { POKEMON } = require("../stats/pokemon");

const createTeamMain = () => {
  let teamInCreation = [];

  let validInputs = Object.keys(POKEMON).reduce((acc, obj) => {
    console.log(obj);
    return [...acc, obj, POKEMON[obj].id, removeZeros(POKEMON[obj].id)];
  }, []);

  console.log(validInputs);

  const pokemonListString = Object.keys(POKEMON).map((poke, index) => {
    if ((index + 1) % 4 === 0) return `${POKEMON[poke].id}) ${poke}\n\n`;
    return `${POKEMON[poke].id}) ${poke}   `;
  });

  console.log(
    "=================================================================\n=======================   CREATE A TEAM   =======================\n=================================================================\n"
  );
  console.log("CHOOSE A POKEMON !\n");

  console.log(`${pokemonListString.join("")}      9) Exit\n`);
  let userInput = Number(prompt("Enter A Pokedex Number: "));

  if (userInput == NaN) userInput.toUpperCase();

  while (userInput == NaN || userInput < 1 || userInput > 151)
    userInput = Number(prompt("Enter A Valid Pokedex Number: "));

  return;
};

const removeZeros = (stringNum) => {
  console.log(stringNum.charAt(0));
  if (stringNum.charAt(0) !== "0") return stringNum;

  let cleanedNum = stringNum;
  while (cleanedNum.charAt(0) === "0")
    cleanedNum = cleanedNum.replace(/^0+/, "");
  return cleanedNum;
};

module.exports = { createTeamMain };
