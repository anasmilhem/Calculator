var calculator = document.querySelector(".container");
var buttons = document.querySelectorAll(".buttons");
var previousOutput = document.querySelector("#previousOutput");
var currentOutput = document.querySelector("#currentOutput");


    buttons.forEach(button => {
        button.addEventListener("click", function(){
            const action = button.getAttribute("data-action");
            if(action != "equal"){
                    if(previousOutput.textContent === "0"){
                        previousOutput.textContent = button.textContent;
                    }
                    else if(action === "add" || action === "subtract" || action === "divide" || action === "multiply"  ){
                    previousOutput.textContent += " " + button.textContent + " ";
                    }
                    else if(!action){
                    previousOutput.textContent += button.textContent + "";
                    }
                    else if(action === "clear"){
                        previousOutput.textContent = "0";
                        currentOutput.textContent = "0";
                    }
                    else if(action === "delete"){
                        if(previousOutput.textContent.length === 1){
                            previousOutput.textContent = "0";
                        }else{
                        previousOutput.textContent = previousOutput.textContent.slice(0, -1);
                        }
                    }
                }
            else{
                currentOutput.textContent = calculate(previousOutput.textContent); 
            }
            }
        );
    });
function spaceString(numString){
    var numArr = numString.split("");
    numArr.forEach(digit => {
        if(digit ==="+" || digit === "-" || digit === "*" || digit === "/"){
            
        }
    });

}
function calculate(numString){
    var numArr = numString.split(' ');
    var pairTotal = 0;
    var i = 0;
    while(i < numArr.length){
        if(numArr[i] === "+" || numArr[i] === "-" || numArr[i] === "*"  ||numArr[i] === "/" ){
            if(numArr[i] === "+"){
               pairTotal = parseFloat(numArr[i-1]) + parseFloat(numArr[i+1]);
               numArr.shift();
               numArr.shift();
               numArr.shift();
               numArr.unshift(pairTotal);
               i = 0;
            }
            else if(numArr[i] === "-"){
                pairTotal = parseFloat(numArr[i-1]) - parseFloat(numArr[i+1]);
                numArr.shift();
                numArr.shift();
                numArr.shift();
                numArr.unshift(pairTotal);
                i = 0;
             }
             else if(numArr[i] === "*"){
                pairTotal = parseFloat(numArr[i-1]) * parseFloat(numArr[i+1]);
                numArr.shift();
                numArr.shift();
                numArr.shift();
                numArr.unshift(pairTotal);
                i = 0;
             }
             else if(numArr[i] === "/"){
                pairTotal = parseFloat(numArr[i-1]) / parseFloat(numArr[i+1]);
                numArr.shift();
                numArr.shift();
                numArr.shift();
                numArr.unshift(pairTotal);
                i = 0;
             }
        }
        i++;
    }
    return pairTotal;
}

function calculate2()



    
