var buttons = document.querySelectorAll(".buttons");
var addition = document.querySelector("#addition");
var subtraction = document.querySelector("#subtraction");
var division = document.querySelector("#division");
var multiplication = document.querySelector("#multiplication");
var decimal = document.querySelector("#decimal");
var equal = document.querySelector("#equal");
var clear = document.querySelector("#clear");
var display = document.querySelector("#display");




for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        if(this.textContent !== "="){
            display.textContent += this.textContent + " ";
        }
    });
}

equal.addEventListener("click", function(){
    display.textContent = eval(display.textContent);
});

clear.addEventListener("click", function(){
    calcString = "";
    display.textContent = "";
});


