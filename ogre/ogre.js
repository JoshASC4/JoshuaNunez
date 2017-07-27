//Stats
var HP = 100;
var gold = 0;
var numberOfDefeated = 0;

function updateStats(){
$("#stats").text("HP:" + HP + "Gold:" + gold +"Dead:" + numberOfDefeated);

}

function attack(){
    //when the player is alive the condtion runs
    if (HP>0){
        //if player wins gold
        if(Math.random()*100>gold){
            gold = gold + 10;
            numberOfDefeated++;
            $("#ogres").prepend(
                "<p style='color:green'> You Won! some gold.</p>"
            );
        }
        //if player loses gold
        else {
            gold--;
            HP--;
            $("#ogres").prepend(
                "<p style='color:red'> You Lost! -1 gold</p>"
            );
        }
        updateStats();
        makeOgre();
    }else {
        $("#ogres").prepend(
            "<h1> GAME OVER!!!!!</h1>"
        )
    }
}

function makeOgre(){
$("#ogres").prepend(
    "<img src='http://www.amren.com/wp-content/uploads/2013/08/MicahOnditi.jpg'>"
);
}



function setup() {

//title    
$("body").append(
    "<h1>Welcome to Ogre Fighter. Ya hurdddd!</h1>"
);
//adds "stats" which will be updated later
$("body").append(
    "<div> <h3>STATS</h3><p id='stats'></p></div>"
);

//adds an attack button
$("body").append(

"<button onClick='attack()'> Attack the OGRE! </button>"    
);
//container for the ogre pics
$("body").append(

    "<div id='ogres'></div>"
);


}


$(document).ready(setup);

