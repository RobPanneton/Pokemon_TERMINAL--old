const physicalOrSpecial = (type) => {
  if (/NORMAL|FIGHTING|FLYING|POISON|GROUND|ROCK|BUG|GHOST/.test(type))
    return "PHYSICAL";
  if (/FIRE|WATER|GRASS|ELECTRIC|PSYCHIC|ICE|DRAGON/.test(type))
    return "SPECIAL";
  return "error";
};

module.exports = { physicalOrSpecial };
