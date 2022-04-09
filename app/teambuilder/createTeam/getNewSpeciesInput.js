const prompt = require("prompt-sync")();

const getNewSpeciesInput = (pokemonListString, validInputs) => {
  // render list of pokemon and exit options
  console.log(`${pokemonListString.join("")}   8) Start Over   9) Exit\n`);
  let userInput = prompt("Enter A Name Or Pokedex Number: ");

  if (userInput === "9") return "9";
  if (userInput === "8") return "8";

  if (Number(userInput) == NaN) userInput = userInput.toUpperCase();

  while (!validInputs.includes(userInput))
    userInput = prompt("Enter A Name Or Pokedex Number: ");

  return userInput;
};

module.exports = {
  getNewSpeciesInput,
};
