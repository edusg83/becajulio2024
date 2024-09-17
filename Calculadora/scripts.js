let = num1 = undefined;
let = num2 = undefined;
let = symbol = '';

function setDisplay(param){
    if(param == ''){
        document.getElementById("display").innerHTML = ''
    }else{
        document.getElementById("display").innerHTML = document.getElementById("display").textContent + param;
    }
}


function setSymbol(param){
    if(symbol != ''){
        symbol = param;
    }
}

function storeValue(){
    if(num1 == undefined){
        num1 = Number(document.getElementById("display").innerHTML.textContent);
    }else{
        num2 =  Number(document.getElementById("display").innerHTML.textContent);
    }
}

function calculateResult(){
    if(num1 != undefined && num2 != undefined){
        switch(symbol){
            case '+':
                document.getElementById("display").innerHTML.textContent = num1 + num2;
                break;
            case '*':
                document.getElementById("display").innerHTML = num1 *  num2;
                break;
            case '/':
                document.getElementById("display").innerHTML = num1 / num2;
                break;
            case '-':
                document.getElementById("display").innerHTML = num1 - num2;
                break;
        }
    }
}