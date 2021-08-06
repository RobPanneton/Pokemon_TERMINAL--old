const initiateTurn = ({ pokemon1, attack1 }, { pokemon2, attack2 }) => {
  console.log(attack1);
  console.log(attack2);
  console.log(pokemon1);
  console.log(pokemon2);

  // insert priority check
  // insert speed check

  let pokemon1Copy = pokemon1;
  let pokemon2Copy = pokemon2;
  console.log(pokemon2Copy);

  // first attack
  console.log(`${pokemon1.species} used ${attack1.name}!`);

  let damage =
    (((2 * pokemon1.level) / 5 + 2) *
      attack1.attack *
      (pokemon1.stats.attack / pokemon2.stats.defense)) /
      50 +
    2;

  // stab
  damage =
    pokemon1.type.type1 === attack1.type
      ? Math.floor((damage *= 1.5))
      : Math.floor(damage);

  console.log(pokemon1.type.type1);

  pokemon2Copy.hp -= damage;

  //   console.log(pokemon1.level);
  //   console.log(attack1.attack);
  //   console.log(pokemon1.attack);
  //   console.log(pokemon2.defense);

  console.log(pokemon2Copy);
  console.log(damage);

  // second attack

  return;
};

module.exports = { initiateTurn };
