const prompt = require("prompt-sync")();

const { introScreen } = require("./intro");
const { battle } = require("./battle/battle");

const start = async () => {
  let isStarted = false;
  if (isStarted === false) {
    introScreen();
    isStarted = true;
  }

  // if (isStarted) await battle();

  return;
};

start();

// response = prompt("Pokemon TERMINAL");
