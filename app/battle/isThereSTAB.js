const isThereSTAB = (pokemon, attack) => {
  return pokemon.type.type1 === attack.type ||
    pokemon.type.type2 === attack.type
    ? true
    : false;
};

module.exports = { isThereSTAB };
