const { introScreen } = require("./intro");
const { mainMenu } = require("./mainMenu");
const { initiateBattle } = require("./battle/battle");
const { teambuilderMainMenu } = require("./teambuilder/teambuilderMainMenu");

const { timeDelay } = require("./utils");

const start = async () => {
  await introScreen();

  while (true) {
    let playerResponse = await mainMenu();
    if (playerResponse === 1) await initiateBattle();
    if (playerResponse === 2) await teambuilderMainMenu();
    if (playerResponse === 9) return await process.exit();
  }
};

start();



// test
// response = prompt("Pokemon TERMINAL");

