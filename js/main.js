const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const buttPlus = document.getElementById("button-plus");
const buttMinus = document.getElementById("button-minus");
const buttMultiply = document.getElementById("button-multiply");
const buttDivide = document.getElementById("button-divide");
const buttPower = document.getElementById("button-power");
const buttAnswer = document.getElementById("button-answer");
const textAnswer = document.getElementById("answer-text");
const buttonsContainer = document.getElementById("buttons-container");

//localStorage
let localObject = {
    firstKey: 0,
    secondKey: 0,
    result: 0,
    actions: []
}
const setObject = localStorage.getItem("actions") ? JSON.parse(localStorage.getItem("actions")) : localObject;
const localList = document.getElementById("local-object");
const checkStorage = () => {
    localList.innerHTML = '';
    let checkObject = localStorage.getItem("actions") ? JSON.parse(localStorage.getItem("actions")) : localObject;
    checkObject.actions.map((data, i) => {
        const index = i + 1;
        localList.innerHTML += 
        `<li>${index}. ${data}</li>`
    })
}
checkStorage();
let selectAction = "+";
let result;

firstNumber.value = setObject.firstKey;
secondNumber.value = setObject.secondKey;
firstNumber.oninput = () => {
    setObject.firstKey = firstNumber.value;
    localStorage.setItem("actions", JSON.stringify(setObject));
}
secondNumber.oninput = () => {
    setObject.secondKey = secondNumber.value;
    localStorage.setItem("actions", JSON.stringify(setObject));
}

const dropSelectButtons = () => {
    // buttPlus.style.backgroundColor = "#c4c4c4";
    // buttMinus.style.backgroundColor = "#c4c4c4";
    // buttMultiply.style.backgroundColor = "#c4c4c4";
    // buttDivide.style.backgroundColor = "#c4c4c4";
    // buttPower.style.backgroundColor = "#c4c4c4";
    // buttPlus.style.color = "#111111";
    // buttMinus.style.color = "#111111";
    // buttMultiply.style.color = "#111111";
    // buttDivide.style.color = "#111111";
}
dropSelectButtons();

if (secondNumber == "+"){
    // buttPlus.style.color = "aquamarine";
}
firstNumber.value = "";
secondNumber.value = "";
buttPlus.onclick = () => {
    dropSelectButtons();
    // buttPlus.style.color = "aquamarine"
    selectAction = "+"
}
buttMinus.onclick = () => {
    dropSelectButtons();
    // buttMinus.style.color = "aquamarine"
    selectAction = "-"
}
buttMultiply.onclick = () => {
    dropSelectButtons();
    // buttMultiply.style.color = "aquamarine"
    selectAction = "*"
}
buttDivide.onclick = () => {
    dropSelectButtons();
    // buttDivide.style.color = "aquamarine"
    selectAction = "/"
}
buttPower.onclick = () => {
    dropSelectButtons();
    // buttPower.style.color = "aquamarine"
    selectAction = "^"
}

buttAnswer.onclick = () => {
    switch (selectAction) {
        case "+":
            result = +firstNumber.value + +secondNumber.value;
            textAnswer.innerText = result;

            setObject.result = result;
            setObject.actions.push(`${firstNumber.value} + ${secondNumber.value} = ${result}`)
            localStorage.setItem("actions", JSON.stringify(setObject))
            checkStorage();
            break;

            case "-":
            result = +firstNumber.value - +secondNumber.value;
            textAnswer.innerText = result;

            setObject.result = result;
            setObject.actions.push(`${firstNumber.value} - ${secondNumber.value} = ${result}`)
            localStorage.setItem("actions", JSON.stringify(setObject))
            checkStorage();
            break;
            
            case "*":
                result = +firstNumber.value * +secondNumber.value;
                textAnswer.innerText = result;

                setObject.result = result;
                setObject.actions.push(`${firstNumber.value} * ${secondNumber.value} = ${result}`)
                localStorage.setItem("actions", JSON.stringify(setObject))
                checkStorage();
                break;
                
            case "/":
                if (firstNumber.value != "0" || secondNumber.value != "0") {
                    result = +firstNumber.value / +secondNumber.value;
                    textAnswer.innerText = result;

                    setObject.result = result;
                setObject.actions.push(`${firstNumber.value} / ${secondNumber.value} = ${result}`)
                localStorage.setItem("actions", JSON.stringify(setObject))
                checkStorage();
                }
                else {
                    alert("Делить на ноль нельзя!");
                }
                break;

            case "^":
                result = Math.pow(+firstNumber.value, +secondNumber.value);
                textAnswer.innerText = result;

                setObject.result = result;
                setObject.actions.push(`${firstNumber.value} ^ ${secondNumber.value} = ${result}`)
                localStorage.setItem("actions", JSON.stringify(setObject))
                checkStorage();
                break;

            default:
                break;
    }
    setObject.firstKey = firstNumber.value;
    localStorage.setItem("actions", JSON.stringify(setObject));
    setObject.secondKey = secondNumber.value;
    localStorage.setItem("actions", JSON.stringify(setObject));
}