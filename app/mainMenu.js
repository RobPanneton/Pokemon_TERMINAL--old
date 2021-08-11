const prompt = require("prompt-sync")();

const mainMenu = () => {
  let response;
  console.log("\nWhat will you do?\n");
  console.log("1) Battle!         2) Team Builder             9) Exit");

  response = Number(prompt("What will you do?  "));
  if (response !== 1 && response !== 2 && response !== 9) {
    console.log("\nPlease enter a valid response. ");
    mainMenu();
  }
  return response;
};

module.exports = { mainMenu };
