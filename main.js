const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const clear = document.querySelector(".btnClear");
const equal = document.querySelector(".btnEqual");


function add (num1 , num2){
    const sum = num1 + num2;
    return sum;
};
function subtract (num1 , num2){
    const sum = num1 - num2;
    return sum;
};
function multiply (num1 , num2){
    const sum = num1 * num2;
    return sum;
};
function divide (num1 , num2){
    const sum = num1 / num2;
    return sum;
};

let num1; 
let num2;
let operator;

function operate (num1,operator,num2){
    let result;

    if(operator === "+"){
        result = add(num1, num2);
    }else if (operator === "-") {
        result = subtract(num1, num2);
    } else if (operator === "*") {
        result = multiply(num1, num2);
    } else {
        result = divide(num1, num2);
    };   
};
operate();

function populate (){
    buttons.forEach(function(button){
        button.addEventListener("click",function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener("click", ()=>{
        
    });
};
populate();


clear.addEventListener("click",()=>{
    screen.value = "";
});




