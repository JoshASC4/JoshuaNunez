var pokeTeam = ["", "", "", "", "", ""];
function pokeStat (name, type, hp, def, atk, legend){
  this.name = name,
  this.type = type,
  this.health = hp,
  this.defense = def,
  this.attack = atk,
  this.legend = legend
};
var xerneas = pokeStat("Xerneas", "Fairy", 362, 175, 240, true);
console.log(xerneas);

var yveltal = pokeStat("Yveltal", "Dark && Flying", 362, 175, 240, true);
console.log(yveltal);

var dialga = pokeStat("Dialga", "Steel && Dragon", 310, 220, 220, true);
console.log(dialga);

var charizard = pokeStat("Charizard", "Fire && Flying", 266, 144, 155, false);
console.log(charizard);

var entei = pokeStat("Entei", "Fire", 340, 157, 211, true);
console.log(entei);

var arceus = pokeStat("Arceus", "Normal", 350, 220, 220, true);
console.log(arceus);
