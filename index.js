var randomeNumber1 = Math.floor((Math.random() * 6) + 1);
var randomeNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage1 = "images/dice" + randomeNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomeNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomeNumber1 > randomeNumber2){
    document.querySelector("h1").innerHTML = "Player 1 WINS";
}
else if(randomeNumber1 < randomeNumber2){
    document.querySelector("h1").innerHTML = "Player 2 WINS";
}
else document.querySelector("h1").innerHTML = "DRAW";