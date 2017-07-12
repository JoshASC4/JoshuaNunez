console.log("Choose Rock Paper or Scissors");
var playerChoices = ['R', 'P', 'S'];
var playerChoice = playerChoices[Math.floor(Math.random()*3)];

//computer's random choice
var compChoices = ['R', 'P', 'S'];
var compChoice = compChoices[Math.floor(Math.random()*3)];
console.log(playerChoice + " vs " + compChoice);
if (playerChoice == compChoice)
{
    console.log("It's a tie");
}
else if(compChoice == 'P')
{
  console.log("Computer Wins")
}
   else if(compChoice == 'S')
{
    console.log("Player Wins")
}
else if(playerChoice == 'P' && compChoice == 'S')
{
    console.log("Computer Wins")
}
else if(playerChoice == 'P' && compChoice == 'R')
{
    console.log("Player Wins")
}
else if(playerChoice == 'S' && compChoice == 'R')
{
    console.log("Computer Wins")
}
else if(playerChoice == 'S' && compChoice == 'P')
{
    console.log("Player Wins")
}