const isThereSTAB = (pokemon, attack) => {
  let result = false;

  if (pokemon.type.type1 === attack.type) result = true;

  if (pokemon.type.type2) if (pokemon.type.type2 === attack.type) result = true;

  return result;
};

module.exports = { isThereSTAB };
