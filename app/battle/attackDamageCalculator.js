const { typeMultiplierChecker } = require("./typeMultiplierChecker");
const { typeMultiplierText } = require("./typeMultiplierText");
const { isThereSTAB } = require("./isThereSTAB");

const attackDamageCalculator = async (
  { pokemon1 },
  { pokemon2 },
  attack,
  attackSplit
) => {
  // required assets: poke 1 , poke 2, attack, atksplit

  // calculation order
  // basic calc * rng * STAB * type * burn
  if (attackSplit === "SPECIAL") {
    console.log({ pokemon1 });
    let damage = Math.floor(
      (((2 * pokemon1.level) / 5 + 2) *
        attack.power *
        (pokemon1.stats.special / pokemon2.stats.special)) /
        50 +
        2
    );

    if (await isThereSTAB(pokemon1, attack)) damage = Math.floor(damage * 1.5);

    let typeMultiplier = await typeMultiplierChecker(attack, {
      type1: pokemon2.type.type1,
      type2: pokemon2.type.type2,
    });

    await typeMultiplierText(typeMultiplier, pokemon2.species);

    damage *= typeMultiplier;

    console.log(damage);

    return damage;
  }

  if (attackSplit === "PHYSICAL") {
    console.log(pokemon1);
    console.log(attack);
    let damage = Math.floor(
      (((2 * pokemon1.level) / 5 + 2) *
        attack.power *
        (pokemon1.stats.attack / pokemon2.stats.defense)) /
        50 +
        2
    );

    if (await isThereSTAB(pokemon1, attack)) damage = Math.floor(damage * 1.5);

    let typeMultiplier = await typeMultiplierChecker(attack, {
      type1: pokemon2.type.type1,
      type2: pokemon2.type.type2,
    });

    await typeMultiplierText(typeMultiplier, pokemon2.species);

    damage *= typeMultiplier;

    console.log(damage);

    return damage;
  }

  return console.log(
    "error with damage calculator: type was neither SPECIAL or PHYSICAL"
  );
};

module.exports = { attackDamageCalculator };
