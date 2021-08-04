const prompt = require("prompt-sync")();

const { introScreen } = require("./intro");
const { battle } = require("./battle/battle");
const { pokemon } = require("./stats/pokemon");

let response = "number 0";

// console.log("Pokemon TERMINAL");
const start = async () => {
  await introScreen();
  await battle();
};

start();

// response = prompt("Pokemon TERMINAL");
