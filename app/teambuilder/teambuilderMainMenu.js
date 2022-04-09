const prompt = require("prompt-sync")();

const { createTeamMain } = require("./createTeam/createTeamMain");
const { editTeamMain } = require("./editTeamMain");

// REFORMAT THIS
const teambuilderMainMenu = () => {
  let teambuilderInput;
  console.log("\nChoose an Option");
  console.log(
    "1) Create a Team     2) Edit a Team      3) Return to Main Menu"
  );

  teambuilderInput = Number(prompt("What will you do?  "));

  console.log(typeof teambuilderInput);

  // REFORMAT THIS
  // while (/[1-3]/.test(teambuilderInput)) { DIDN'T WORK AS INPUT BEING A STRING
  while (
    teambuilderInput / 1 !== teambuilderInput ||
    teambuilderInput < 1 ||
    teambuilderInput > 3
  ) {
    console.log("\nChoose an Option");
    console.log(
      "1) Create a Team     2) Edit a Team      3) Return to Main Menu"
    );
    teambuilderInput = Number(prompt("What will you do?  "));
  }

  if (teambuilderInput === 1) createTeamMain();
  if (teambuilderInput === 2) editTeamMain();
  if (teambuilderInput === 3) return;
};

module.exports = { teambuilderMainMenu };
