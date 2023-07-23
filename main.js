const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const clear = document.querySelector(".btnClear");
const equal = document.querySelector(".btnEqual");


function evaluate (){
    buttons.forEach(function(button){
        button.addEventListener("click",function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })
}
evaluate();