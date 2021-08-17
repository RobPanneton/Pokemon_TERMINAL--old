const prompt = require("prompt-sync")();

const mainMenu = async () => {
  let response;
  console.log("\nWhat will you do?\n");
  console.log("1) Battle!         2) Team Builder             9) Exit");

  response = await Number(prompt("What will you do?  "));

  while (response !== 1 && response !== 2 && response !== 9) {
    console.log("\nPlease enter a valid response. ");

    response = await Number(prompt("What will you do?  "));
  }

  return await response;
};

module.exports = { mainMenu };
