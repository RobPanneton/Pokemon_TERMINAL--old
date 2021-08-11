const prompt = require("prompt-sync")();

const { introScreen } = require("./intro");
const { mainMenu } = require("./mainMenu");
const { initiateBattle } = require("./battle/battle");
const { teambuilderMainMenu } = require("./teambuilder/teambuilderMainMenu");

const start = async () => {
  await introScreen();

  while (true) {
    let playerResponse = await mainMenu();
    if (playerResponse === 1) await initiateBattle();
    if (playerResponse === 2) await teambuilderMainMenu();
    if (playerResponse === 9) return process.exit();
  }
};

start();

// response = prompt("Pokemon TERMINAL");
