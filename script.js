let output;
function operator(num1, num2, math) {
    switch (math) {
        case "add":
            return add(num1, num2);
            break;
        case "subtract":
            return subtract(num1, num2);
            break;
        case "multiply":
            return multiply(num1, num2);
            break;
        case "divide":
            return divide(num1, num2);
            break;
        default:
            output = "error";
    }
    console.log(output);
}
function add(num1, num2) {
    return Number(num1) + Number(num2);
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
let display = document.getElementById("display");

let equation = {
    value1: "",
    operator: "",
    value2: "",
};

let clearButton = function() {
    display.textContent = "";
    equation.value1 = "";
    equation.value2 = "";
    equation.operator = "";
}
//computing outcome
let compute = function() {
    let outcome = operator(equation.value1, equation.value2, equation.operator);
    display.textContent = parseInt(outcome);
    console.log(equation.value1, equation.operator, equation.value2)
};

//getting values
let numberReceiver = function() {
    display.textContent += this.textContent;
    if (equation.operator != "" && equation.value1 != "") {
        equation.value2 += this.id;
    }
    else equation.value1 += this.id;
    console.log(this.id)
};
let operatorReceiver = function() {
    if (equation.value1 != "" && equation.operator == "") {
        display.textContent += this.textContent;
        equation.operator = this.id;
    }
    else {
        return "error"
    }
}
//getting ALL the friggin buttons
document.getElementById("1").onclick = numberReceiver;
document.getElementById("2").onclick = numberReceiver;
document.getElementById("3").onclick = numberReceiver;
document.getElementById("4").onclick = numberReceiver;
document.getElementById("5").onclick = numberReceiver;
document.getElementById("6").onclick = numberReceiver;
document.getElementById("7").onclick = numberReceiver;
document.getElementById("8").onclick = numberReceiver;
document.getElementById("9").onclick = numberReceiver;
document.getElementById("0").onclick = numberReceiver;
document.getElementById("add").onclick = operatorReceiver;
document.getElementById("subtract").onclick = operatorReceiver;
document.getElementById("multiply").onclick = operatorReceiver;
document.getElementById("divide").onclick = operatorReceiver;
document.getElementById("clear").onclick = clearButton;
document.getElementById("equals").onclick = compute;
