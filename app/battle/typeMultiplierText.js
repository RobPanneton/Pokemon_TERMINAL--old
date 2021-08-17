const typeMultiplierText = (typeMultiplier) => {
  if (typeMultiplier > 1) console.log("It's super effective!");
  if (typeMultiplier < 1 && multiplier1 !== 0)
    console.log("It's not very effective.");
  if (typeMultiplier === 0)
    console.log(`It doesn't affect Enemy ${pokemon2.species}!`);
  return;
};

module.exports = { typeMultiplierText };
