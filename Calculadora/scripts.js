let num1 = undefined;
let num2 = undefined;
let symbol = '';

function setDisplay(param){
    if(param == '-' || param == '*' || param == '+' || param == '/'){
        setSymbol(param);
        document.getElementById("display").innerHTML = '';
    }else{
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + param;
    }
}


function setSymbol(param){
    symbol = param;
    storeValue()
}

function storeValue(){

    num1 = Number(document.getElementById("display").innerHTML);

}

function calculateResult(){

    let result = 0;

    if(num2 == undefined){
        num2 =  Number(document.getElementById("display").innerHTML);
    }

    switch(symbol){
        case '+':
            result = num1 + num2;
            break;
        case '*':
            result = num1 *  num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '-':
            result = num1 - num2;
            break;
    }

    document.getElementById("display").innerHTML = result;

}

function clearDisplay(){
    document.getElementById
}