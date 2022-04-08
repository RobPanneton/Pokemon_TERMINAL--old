const { introScreen } = require("./intro");
const { mainMenu } = require("./mainMenu");
const { initiateBattle } = require("./battle/battle");
const { teambuilderMainMenu } = require("./teambuilder/teambuilderMainMenu");

const { timeDelay } = require("./utils");

const start = async () => {
  await introScreen();

  while (true) {
    let mainMenuInput = await mainMenu();
    if (mainMenuInput === 1) await initiateBattle();
    if (mainMenuInput === 2) await teambuilderMainMenu();
    if (mainMenuInput === 9) return await process.exit();
  }
};

start();

// test
// response = prompt("Pokemon TERMINAL");
