// JavaScript goes here.
let button = document.querySelector("button");
let q1answer = ("Rat");
let q2answer = ("Stag");
let q3answer = ("Avada Kedavra");

button.addEventListener("click", function(){
    let firstInput = document.querySelector(".firstAnswer").value;
    let secondInput = document.querySelector(".secondAnswer").value;
    let result = document.querySelector(".result");

    if (firstInput === q1answer && secondInput === q2answer){
        result.innerHTML = "You are killing this game!";
    } else if (firstInput !== q1answer && secondInput === q2answer){
        result.innerHTML = "Fair game, you probably read/watched Harry Potter a long time ago.";
    } else if (firstInput === q1answer && secondInput !== q2answer){
        result.innerHTML = "Fair game, you probably read/watched Harry Potter a long time ago.";
    } else {
        result.innerHTML = "Have you really read/watched Harry Potter before?";
    }

    if (firstInput === "" || secondInput === "") {
        result.innerHTML = "You need to enter SOMETHING!!"
    }
    
})
