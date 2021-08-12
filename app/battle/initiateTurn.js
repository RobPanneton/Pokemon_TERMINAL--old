const { typeCheck } = require("./typeChecker");

const initiateTurn = ({ pokemon1, attack1 }, { pokemon2, attack2 }) => {
  // insert priority check
  // insert speed check

  let pokemon1Copy = pokemon1;
  let pokemon2Copy = pokemon2;

  // first attack
  console.log(`\n${pokemon1.species} used ${attack1.name}!`);

  let damage = Math.floor(
    (((2 * pokemon1.level) / 5 + 2) *
      attack1.power *
      (pokemon1.stats.special / pokemon2.stats.special)) /
      50 +
      2
  );

  // check for super effective / not very effective
  const multiplier1 = typeCheck(attack1, {
    type1: pokemon2.type.type1,
    type2: pokemon2.type.type2,
  });

  if (multiplier1 > 1) console.log("It's super effective!");
  if (multiplier1 < 1 && multiplier1 !== 0)
    console.log("It's not very effective.");
  if (multiplier1 === 0)
    console.log(`It doesn't affect Enemy ${pokemon2.species}!`);

  damage =
    pokemon1.type.type1 === attack1.type
      ? Math.floor((damage *= 1.5))
      : Math.floor(damage);

  if (pokemon1.type.type2)
    damage =
      pokemon1.type.type2 === attack1.type
        ? Math.floor((damage *= 1.5))
        : Math.floor(damage);

  damage *= multiplier1;
  // stab check and rounding

  pokemon2Copy.hp - damage < 0
    ? (pokemon2Copy.hp = 0)
    : (pokemon2Copy.hp = pokemon2Copy.hp -= damage);

  // set small delay --> put hp bar lowering when ready

  console.log(`${pokemon2.species} has ${pokemon2.hp}/${pokemon2.maxHp}HP.\n`);

  if (pokemon2Copy.hp === 0) console.log(`${pokemon2.species} fainted!\n`);

  // second attack

  if (pokemon2Copy.hp > 0) {
    console.log(`\n${pokemon2Copy.species} used ${attack2.name}!`);

    let damage2 = Math.floor(
      (((2 * pokemon2.level) / 5 + 2) *
        attack2.power *
        (pokemon2.stats.attack / pokemon1.stats.defense)) /
        50 +
        2
    );

    console.log({ damage2 });

    const multiplier2 = typeCheck(attack2, {
      type1: pokemon1.type.type1,
      type2: pokemon1.type.type2,
    });

    if (multiplier2 > 1) console.log("It's super effective!");
    if (multiplier2 < 1 && multiplier !== 0)
      console.log("It's not very effective.");
    if (multiplier2 === 0)
      console.log(`It doesn't affect Enemy ${pokemon1.species}!`);

    damage2 *= multiplier2;

    console.log({ multiplier2: multiplier2 });
    console.log({ damage2 });

    // stab check and rounding
    damage2 =
      pokemon2.type.type1 === attack2.type
        ? Math.floor((damage2 *= 1.5))
        : Math.floor(damage2);

    if (pokemon2.type.type2)
      damage2 =
        pokemon2.type.type2 === attack2.type
          ? Math.floor((damage2 *= 1.5))
          : Math.floor(damage2);

    console.log({ damage2 });

    pokemon1Copy.hp - damage2 < 0
      ? (pokemon1Copy.hp = 0)
      : (pokemon1Copy.hp = pokemon1Copy.hp -= damage2);

    if (pokemon1Copy.hp === 0) console.log(`${pokemon1.species} fainted!\n`);

    console.log(
      `${pokemon1.species} has ${pokemon1.hp}/${pokemon1.maxHp}HP.\n`
    );
  }

  return [pokemon1Copy, pokemon2Copy];
};

// in party : status
// in battle : seeded, binded (+by what), flinched

module.exports = { initiateTurn };
