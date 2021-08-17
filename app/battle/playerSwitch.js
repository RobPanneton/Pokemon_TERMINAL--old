const prompt = require("prompt-sync")();

const playerSwitch = async (team) => {
  let stillAlive = team.filter((teammate) => !teammate.fainted);

  console.log("Who will you send out?\n");

  let IDs = [];

  stillAlive.forEach((poke) => {
    console.log(`${poke.id + 1}) ${poke.species}`);
    IDs.push(poke.id + 1);
  });

  let response = await Number(prompt("\nChoose a Pokemon: "));

  while (!IDs.includes(response)) {
    if (response === 8) process.exit();
    console.log("\nPlease enter a valid response.\n");
    stillAlive.forEach((poke) => {
      console.log(`${poke.id + 1}) ${poke.species}`);
    });
    response = await Number(prompt("\nChoose a Pokemon: "));
  }

  //add to comment
  return team[response - 1];
};

module.exports = { playerSwitch };
