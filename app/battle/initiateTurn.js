const { physicalOrSpecial } = require("./physicalOrSpecial");
const { attackDamageCalculator } = require("./attackDamageCalculator");

const initiateTurn = async ({ pokemon1, attack1 }, { pokemon2, attack2 }) => {
  // insert priority check
  // insert speed check

  let pokemon1Copy = pokemon1;
  let pokemon2Copy = pokemon2;

  // first attack
  console.log(`\n${pokemon1.species} used ${attack1.name}!`);

  const damageSplit1 = await physicalOrSpecial(attack1.type);

  let damage1 = await attackDamageCalculator(
    { pokemon1 },
    { pokemon2 },
    attack1,
    damageSplit1
  );

  pokemon2Copy.hp - damage1 < 0
    ? (pokemon2Copy.hp = 0)
    : (pokemon2Copy.hp = pokemon2Copy.hp -= damage1);

  // set small delay --> put hp bar lowering when ready

  console.log(`${pokemon2.species} has ${pokemon2.hp}/${pokemon2.maxHp}HP.\n`);

  if (pokemon2Copy.hp === 0) console.log(`${pokemon2.species} fainted!\n`);

  // second attack

  if (pokemon2Copy.hp > 0) {
    console.log(`\n${pokemon2Copy.species} used ${attack2.name}!`);

    const damageSplit2 = await physicalOrSpecial(attack2.type);

    let damage2 = await attackDamageCalculator(
      { pokemon1: pokemon2 },
      { pokemon2: pokemon1 },
      attack2,
      damageSplit2
    );

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
