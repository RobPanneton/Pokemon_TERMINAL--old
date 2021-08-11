const npcSwitch = (team) => {
  for (let i = 0; i < team.length; i++) {
    if (team[i].hp > 0) {
      return team[i];
    }
  }
};

module.exports = { npcSwitch };
