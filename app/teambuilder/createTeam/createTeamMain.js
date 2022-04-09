const prompt = require("prompt-sync")();

const { getNewPokemonInput } = require("./getNewPokemonInput");
const { removeLeadingZeros, addLeadingZeros } = require("../../utils");

const { POKEMON } = require("../../stats/pokemon");

//////////////////////////////////////////////////////////////////////////////////////////
////////////////// YOU NEED SOME SCOPING ADJUSTMENTS, START NESTING YOUR FUNCTIONS TO FIT YOUR NESTING NEEDS

const createTeamMain = () => {
  // create class to initiate team with
  class Team {
    constructor() {
      this.trainerName = "";
      this.teamName = "";

      this.currentTeam = {
        slot_1: null,
        slot_2: null,
        slot_3: null,
        slot_4: null,
        slot_5: null,
        slot_6: null,
      };

      this.currentSlot = 1;
    }

    isFull = () => {
      return Object.keys(this.currentTeam).every(
        (slot) => this.currentTeam[slot] !== null
      );
    };
  }

  // initiate team
  let newTeam = new Team();

  // compile valid inputs
  const validInputs = Object.keys(POKEMON).reduce((acc, obj) => {
    if (POKEMON[obj].attacks.length === 0) return [...acc];
    return [...acc, obj, POKEMON[obj].id, removeLeadingZeros(POKEMON[obj].id)];
  }, []);

  // set list for display menu
  const pokemonListString = Object.keys(POKEMON).map((poke, index) => {
    if ((index + 1) % 4 === 0) return `${POKEMON[poke].id}) ${poke}\n\n`;
    return `${POKEMON[poke].id}) ${poke}   `;
  });

  console.log(
    "=================================================================\n=======================   CREATE A TEAM   =======================\n=================================================================\n"
  );

  let userInput;

  // prompt user for input
  while (!newTeam.isFull()) {
    console.log(newTeam.currentTeam);
    console.log("CHOOSE A POKEMON !\n");

    userInput = getNewPokemonInput(pokemonListString, validInputs);
    if (userInput === "9" || userInput === "8") break;

    console.log(userInput);
    // find how to find the pokemon based on input
    selectedPokemon = Object.keys(POKEMON).find((poke, index) => {
      if (POKEMON[poke].id === userInput) return poke;
      if (POKEMON[poke].species === userInput) return poke;
      if (POKEMON[poke].id === addLeadingZeros(userInput)) return poke;
    });
    console.log(selectedPokemon);

    newTeam.currentTeam = {
      ...newTeam.currentTeam,
      ["slot_" + newTeam.currentSlot]: selectedPokemon,
    };

    newTeam.currentSlot++;
  }
  if (userInput === "8") createTeamMain();
  if (userInput === "9") return;

  return;
};

// module.exports.createTeamMain = createTeamMain;

module.exports = { createTeamMain };
