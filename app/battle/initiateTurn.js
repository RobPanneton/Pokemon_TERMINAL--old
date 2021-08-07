const initiateTurn = ({ pokemon1, attack1 }, { pokemon2, attack2 }) => {
  // insert priority check
  // insert speed check

  let pokemon1Copy = pokemon1;
  let pokemon2Copy = pokemon2;

  // first attack
  console.log(`\n${pokemon1.species} used ${attack1.name}!`);

  // figure out the logic behind attacks and attack types
  // if power > 0 , calc damage and reduce enemy hp
  // if power = 0 , read effect and apply it to enemy poke's stats/statuses
  // you'll need to set active pokemon and party pokemon keys for several things
  // in party : status
  // in battle : seeded, binded (+by what), flinched

  let damage =
    (((2 * pokemon1.level) / 5 + 2) *
      attack1.attack *
      (pokemon1.stats.attack / pokemon2.stats.defense)) /
      50 +
    2;

  // stab check and rounding
  damage =
    pokemon1.type.type1 === attack1.type
      ? Math.floor((damage *= 1.5))
      : Math.floor(damage);

  pokemon2.hp - damage < 0
    ? (pokemon2.hp = 0)
    : (pokemon2.hp = pokemon2.hp -= damage);

  // set small delay --> put hp bar lowering when ready

  console.log(`${pokemon2.species} has ${pokemon2.hp}/${pokemon2.maxHp}HP.\n`);

  if (pokemon2Copy.hp === 0) console.log(`${pokemon2.species} fainted!\n`);

  // second attack

  if (pokemon2.hp > 0) {
    console.log(`\n${pokemon2.species} used ${attack2.name}!`);

    let damage2 =
      (((2 * pokemon2.level) / 5 + 2) *
        attack2.attack *
        (pokemon2.stats.attack / pokemon1.stats.defense)) /
        50 +
      2;

    // stab check and rounding
    damage2 =
      pokemon2.type.type1 === attack2.type
        ? Math.floor((damage2 *= 1.5))
        : Math.floor(damage2);

    pokemon1.hp - damage2 < 0
      ? (pokemon1.hp = 0)
      : (pokemon1.hp = pokemon1.hp -= damage2);

    if (pokemon1Copy.hp === 0) console.log(`${pokemon1.species} fainted!\n`);

    console.log(
      `${pokemon1.species} has ${pokemon1.hp}/${pokemon1.maxHp}HP.\n`
    );
  }

  return [pokemon1Copy, pokemon2Copy];
};

module.exports = { initiateTurn };
