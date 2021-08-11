const { POKEMON } = require("../stats/pokemon");

const initiateTeam = async (selectedTeam) => {
  let battleReadyTeam = {};
  battleReadyTeam.trainerName = selectedTeam.trainerName;
  battleReadyTeam.team = [];
  battleReadyTeam.team = selectedTeam.team.map((poke, index) => {
    const pokemonTemp = POKEMON[poke.species];
    return {
      id: index,
      species: poke.species,
      level: poke.level,
      hp: pokemonTemp.stats.hp,
      maxHp: pokemonTemp.stats.hp,
      fainted: false,
      type: pokemonTemp.type,
      stats: pokemonTemp.stats,
      attacks: poke.attacks,
    };
  });

  return battleReadyTeam;
};

module.exports = { initiateTeam };
