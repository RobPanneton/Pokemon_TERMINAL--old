const winChecker = (team) => {
  return team.every((poke) => poke.fainted === true);
};

module.exports = { winChecker };
