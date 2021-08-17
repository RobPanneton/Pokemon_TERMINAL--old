const typeMultiplierText = (typeMultiplier, pokemonName) => {
  if (typeMultiplier > 1) console.log("It's super effective!");

  if (typeMultiplier < 1 && typeMultiplier !== 0)
    console.log("It's not very effective.");

  if (typeMultiplier === 0) console.log(`It doesn't affect ${pokemonName}!`);

  return;
};

module.exports = { typeMultiplierText };
