const types = {
  NORMAL: { superEffective: [], resistant: ["ROCK"], immune: ["GHOST"] },
  FIGHTING: {
    superEffective: ["NORMAL", "ROCK", "ICE"],
    resistant: ["FLYING", "POISON", "BUG", "PSYCHIC"],
    immune: ["GHOST"],
  },
  FLYING: {
    superEffective: ["FIGHTING", "BUG", "GRASS"],
    resistant: ["ROCK", "ELECTRIC"],
    immune: [],
  },
  POISON: {
    superEffective: ["BUG", "GRASS"],
    resistant: ["POISON", "GROUND", "ROCK", "GHOST"],
    immune: [],
  },
  GROUND: {
    superEffective: ["POISON", "GROUND", "ELECTRIC", "FIRE"],
    resistant: ["BUG", "GRASS"],
    immune: ["FLYING"],
  },
  ROCK: {
    superEffective: ["FLYING", "BUG", "FIRE", "ICE"],
    resistant: ["FIGHTING", "GROUND"],
    immune: [],
  },
  BUG: {
    superEffective: ["POISON", "GRASS", "PSYCHIC"],
    resistant: ["FIGHTING", "FLYING", "GHOST", "FIRE"],
    immune: [],
  },
  GHOST: {
    superEffective: ["GHOST"],
    resistant: [],
    immune: ["NORMAL", "PSYCHIC"],
  },
  FIRE: {
    superEffective: ["BUG", "GRASS", "ICE"],
    resistant: ["ROCK", "FIRE", "WATER", "DRAGON"],
    immune: [],
  },
  WATER: {
    superEffective: ["GROUND", "ROCK", "FIRE"],
    resistant: ["WATER", "GRASS", "DRAGON"],
    immune: [],
  },
  GRASS: {
    superEffective: ["GROUND", "ROCK", "WATER"],
    resistant: ["FLYING", "POISON", "BUG", "FIRE", "GRASS", "DRAGON"],
    immune: [],
  },
  ELECTRIC: {
    superEffective: ["FLYING", "WATER"],
    resistant: ["GRASS", "ELECTRIC", "DRAGON"],
    immune: ["GROUND"],
  },
  PSYCHIC: {
    superEffective: ["FIGHTING", "POISON"],
    resistant: ["PSYCHIC"],
    immune: [],
  },
  ICE: {
    superEffective: ["FLYING", "GROUND", "GRASS", "DRAGON"],
    resistant: ["FIRE", "ICE"],
    immune: [],
  },
  DRAGON: { superEffective: ["DRAGON"], resistant: [], immune: [] },
};

module.exports = { types };
