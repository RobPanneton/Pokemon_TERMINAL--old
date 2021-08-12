const prompt = require("prompt-sync")();

const playerSwitch = async (team) => {
  // can't get this to work properly for now... comment out the attempted logic and go back to what worked
  // console.log("Who will you send out?\n");

  // let options = [];
  // stillAlive.forEach((p) => options.push(p.id + 1));
  // let response = 0;

  // if (!options.includes(response)) {
  //   stillAlive.forEach((pokemon) =>
  //     console.log(`${pokemon.id + 1}) ${pokemon.species}`)
  //   );
  //   response = await Number(prompt("\nChoose a Pokemon: "));
  //   if (options.includes(response)) return team[response - 1];
  //   console.log({ response: response });
  //   if (response === 8) process.exit();
  //   if (!options.includes(response)) {
  //     console.log("Please enter a valid response");
  //     playerSwitch(team);
  //   }
  // }

  const stillAlive = team.filter((teammate) => !teammate.fainted);

  console.log("Who will you send out?\n");

  stillAlive.forEach((poke) => {
    console.log(`${poke.id + 1}) ${poke.species}`);
  });

  const response = await Number(prompt("\nChoose a Pokemon: "));

  return team[response - 1];

  // previous guard clause caused a bug here
  // would always send team[0] if a first wrong answer was taken
};

module.exports = { playerSwitch };
