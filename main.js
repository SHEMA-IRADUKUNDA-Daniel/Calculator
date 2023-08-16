const numbers = document.querySelectorAll(".btnGrey");
const operators = document.querySelectorAll(".btnYellow");
const screen = document.querySelector(".screen");
const clear = document.querySelector(".btnClear");
const equal = document.querySelector(".btnEqual");
const decimal = document.querySelector(".decimal");

function add(num1, num2) {
    const sum = Number.parseFloat(num1) + Number.parseFloat(num2);
    return sum;
};
function subtract(num1, num2) {
    const sum = num1 - num2;
    return sum;
};
function multiply(num1, num2) {
    const sum = num1 * num2;
    return sum;
};
function divide(num1, num2) {
    const sum = num1 / num2;
    return sum;
};


let num1 ="";
let num2 ="";
let operator ="";

function operate() {
    let result;


    num2 = screen.value;

    if (operator === "+") {
        result = add(num1, num2);
    } else if (operator === "-") {
        result = subtract(num1, num2);
    } else if (operator === "*") {
        result = multiply(num1, num2);
    } else {
        result = divide(num1, num2);
    }

    screen.value = result;

    if (num1 === "" && operator === "" && num2 === "") {
        screen.value = "Input something!";
        screen.style.fontSize = "30px";
        screen.style.color = "red";
        screen.style.paddingRight = "20px"
        
    };

    
};
    operators.forEach(function (button) {
    button.addEventListener("click", function (e) {
        let value = e.target.dataset.num;
        operator = value;
        num1 = screen.value;
    });
    });
    numbers.forEach(function (button) {
    button.addEventListener("click", function (e) {
        let value = e.target.dataset.num;


        if(screen.value.includes(".") && value === "."){
            return;
        }

        if(operator === "/" && num2 == 0){
            screen.value = "cannot divide by zero";
            screen.style.fontSize = "26px";
            screen.style.color = "red";
            return;
        }        
                
        if (num1 && operator && num2) {
            const result = calculateResult(num1, operator, num2);
            screen.value = result.toString();
            num1 = result.toString();
            num2 = "";
            operator = "";
        }


        if (operator && !num2) {
        screen.value = "";
        };

        screen.style.paddingRight = "20px";
        
        screen.value += value;
        screen.style.color = "white";
    });
});

    equal.addEventListener("click", operate);

    clear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    screen.value = "";
});
