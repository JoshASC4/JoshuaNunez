var prompt = require('prompt-sync')();
//
// get input from the user.
//
var userBalance = 1200;
var items = ["sword", "food"];
var prices = [500, 100];
var inventory  = [];
console.log(items);

while(userBalance>0){
  var purchaseChoice = prompt("What're you buyin?");
  if (purchaseChoice == items[0] && userBalance >= prices[0]){
    userBalance = userBalance - prices[0];
    console.log("You've obtained the Master Sword!");
    inventory.push("sword");
  }
  else if (purchaseChoice == items[1] && userBalance >= prices[1]){
    userBalance = userBalance - prices[0];
    console.log("You're no longer starving!!");
    inventory.push("food");
  }
  else if (purchaseChoice == "quit"){
    wallet = 0
  }
  else {
    console.log("Game Over!!");
    process.exit();
  }
}
