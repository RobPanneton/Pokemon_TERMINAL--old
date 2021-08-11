const prompt = require("prompt-sync")();

const playerSwitch = (team) => {
  const stillAlive = team.filter((teammate) => !teammate.fainted);
  console.log("Who will you send out?\n");

  stillAlive.forEach((pokemon) =>
    console.log(`${pokemon.id + 1}) ${pokemon.species}`)
  );
  const response = Number(prompt("\nChoose a Pokemon: "));

  return team[response - 1];
};

module.exports = { playerSwitch };
