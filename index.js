var Player1 = prompt("Player1 Enter your name Please!!");
var Player2 = prompt("Player2 Enter your name Please!!");

alert("Kindly wait until we process!!");
alert("We appriciate your patience!")




var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // random no. from 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //random dice images from 1-6


var randomDiceImageSRC = "images/" + randomDiceImage;


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomDiceImageSRC);




var randomNumber2 = Math.floor(Math.random() * 6) + 1;  // random no. from 1-6


var randomDiceImageSRC2 = "images/dice" + randomNumber2 + ".png";


var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomDiceImageSRC2);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩" + Player1 + " Wins!!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩" + Player2 + " Wins!!";
}
else{
    document.querySelector("h1").innerHTML = "🚩Match DRAW!";
}