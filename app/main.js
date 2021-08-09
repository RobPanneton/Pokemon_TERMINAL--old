const prompt = require("prompt-sync")();

const { introScreen } = require("./intro");
const { initiateBattle } = require("./battle/battle");

const start = async () => {
  await introScreen();
  await initiateBattle();

  return;
};

start();

// response = prompt("Pokemon TERMINAL");
