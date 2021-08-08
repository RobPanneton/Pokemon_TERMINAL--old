const { types } = require("./typeInteractions");

const typeCheck = (attack, { type1, type2 }) => {
  let multiplier = 1;

  Object.keys(types[attack.type]).forEach((effect, index) => {
    if (types[attack.type][effect].includes(type1))
      index === 0
        ? (multiplier *= 2)
        : index === 1
        ? (multiplier /= 2)
        : (multiplier *= 0);

    if (type2)
      if (types[attack.type][effect].includes(type2))
        index === 0
          ? (multiplier *= 2)
          : index === 1
          ? (multiplier /= 2)
          : (multiplier *= 0);
  });

  return multiplier;
};

module.exports = {
  typeCheck,
};
