var calculator = document.querySelector(".container");
var buttons = document.querySelectorAll(".buttons");
var previousOutput = document.querySelector("#previousOutput");
var currentOutput = document.querySelector("#currentOutput");
var numArr = [];

    buttons.forEach(button => {
        button.addEventListener("click", function(){
            const action = button.getAttribute("data-action");
            const btnContent = button.textContent;
            const prevContent = previousOutput.textContent;
            const currentContent = currentOutput.textContent;
            const previousBtnType = calculator.getAttribute("previousBtnType");
            
            if(!action){
                    if (prevContent === "0" || previousBtnType === "operator"){
                      previousOutput.textContent = btnContent;
                      calculator.setAttribute("previousBtnType", "number");
                      
                    }   else {
                      previousOutput.textContent = prevContent + btnContent;
                      calculator.setAttribute("previousBtnType", "number");
                    }
                  }
            if (action === "decimal") {
                    previousOutput.textContent = prevContent + '.';
                  }
            if (
                action === "add" ||
                action === "subtract" ||
                action === "multiply" ||
                action === "divide"
                  ) {
                    button.classList.add("is-depressed");
                    calculator.setAttribute("previousBtnType","operator");
                    calculator.setAttribute("firstValue", prevContent);
                    calculator.setAttribute("operator", action);
                  }
            if (action === "equal"){
                const firstValue = calculator.getAttribute("firstValue");
                const operator = calculator.getAttribute("operator");
                const secondvalue = prevContent;

                buttons.forEach(button=> {
                    button.classList.remove("is-depressed");
                });

                previousOutput.textContent = calculate(firstValue, operator, secondvalue);
                for(var i = 0; i < numArr; i++){
                    console.log(numArr[i]);
                }
                

            }
            }
        );
    });

function calculate(first, operator, second){
    if(operator === "add")
        return parseFloat(first) + parseFloat(second);
    else if(operator === "subtract")
        return parseFloat(first) - parseFloat(second);
    else if(operator === "multiply")
        return parseFloat(first) * parseFloat(second);
    else if(operator === "divide")
        return parseFloat(first) / parseFloat(second);
    
}

