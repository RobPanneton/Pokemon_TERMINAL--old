const prompt = require("prompt-sync")();

const { introScreen } = require("./intro");
const { initiateBattle } = require("./battle/battle");

const start = async () => {
  let isStarted = false;
  if (isStarted === false) {
    await introScreen();
    isStarted = true;
  }

  await initiateBattle();

  return;
};

start();

// response = prompt("Pokemon TERMINAL");
