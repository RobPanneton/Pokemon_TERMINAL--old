const { typeMultiplierChecker } = require("./typeMultiplierChecker");

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
    let damage = Math.floor(
      (((2 * pokemon1.level) / 5 + 2) *
        attack.power *
        (pokemon1.stats.special / pokemon2.stats.special)) /
        50 +
        2
    );

    damage *= typeMultiplierChecker(attack, {
      type1: pokemon2.type.type1,
      type2: pokemon2.type.type2,
    });
  }

  if (attackSplit === "PHYSICAL") {
    return damage;
  }

  return console.log("error with damage calculator");
};

module.exports = { attackDamageCalculator };
