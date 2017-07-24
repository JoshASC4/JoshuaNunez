function Superhero (realName, power, justice, height, health) {
  this.Name = realName;
  this.superPower = power;
  this.justice = justice;// boolean
  this.height = height;
  this.health = health;
  this.fight = function(){
    var num = Math.floor(Math.random() *100);
    this.health -= num
  };
};

var superman = new Superhero("Clark Kent", "flying", true, "6'3", 100);
console.log(superman)

var batman = new Superhero("Bruce Wayne", "Wealth", true, "6'2", 100);
console.log(batman)
