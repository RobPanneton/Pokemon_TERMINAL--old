const prompt = require("prompt-sync")();

const getNewAttacks = (pokemonSpeciesAttacks) => {
  let attackListTemp = pokemonSpeciesAttacks;
  let userSelectedAttacks = [];

  for (let i = 0; i < 4; i++) {
    if (attackListTemp.length === 0) break;

    // prepare attack list
    let attackList = attackListTemp.map((attack, index) => {
      if ((index + 1) % 4 === 0 && index + 1 !== attackListTemp.length)
        return `${index + 1}) ${attack}\n`;
      return `${index + 1}) ${attack}  `;
    });

    console.log("\nSelect an Attack\n");
    console.log(`${attackList.join("")}`);

    let attackSelectedInput = prompt("\nChoose an attack: ");
    while (attackSelectedInput > attackList.length)
      attackSelectedInput = prompt("Please enter a valid option: ");

    userSelectedAttacks.push(attackListTemp[attackSelectedInput - 1]);

    attackListTemp.splice(Number(attackSelectedInput) - 1, 1);
  }

  if (userSelectedAttacks.length < 4) addTrailingNulls(userSelectedAttacks);

  return userSelectedAttacks;
};

const addTrailingNulls = (arr) => {
  if (arr.length < 4) return [...arr, null];
  return arr;
};

module.exports = {
  getNewAttacks,
};
