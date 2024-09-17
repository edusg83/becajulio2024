function setDisplay(param){
    if(param == ''){
        document.getElementById("display").innerHTML = ''
    }else{
        document.getElementById("display").innerHTML = document.getElementById("display").textContent + param;
    }
}

const objeto = {
    num1:0,
    num2:0,
    symbol:'',
    check:false
}

function setSymbol(param){
    switch(param){
        case '+':
            objeto.symbol = '+'
            break;
        case '-':
            objeto.symbol = '-'
            break;
        case '*':
            objeto.symbol = '*'
            break;
        case '/':
            objeto.symbol = '/'
            break;
    }
}

function storeValue(){
    if(objeto.check == false){
        objeto.num1 == document.getElementById("display").innerHTML;
        objeto.check == true;
    }else{
        objeto.num2 == document.getElementById("display").innerHTML;
    }
}

function calculateResult(){
    switch(objeto.symbol){
        case '+':
            document.getElementById("display").innerHTML = objeto.num1 + objeto.num2;
            break;
        case '-':
            document.getElementById("display").innerHTML = objeto.num1 - objeto.num2;
            break;
        case '*':
            document.getElementById("display").innerHTML = objeto.num1 * objeto.num2;
            break;
        case '/':
            document.getElementById("display").innerHTML = objeto.num1 / objeto.num2;
            break;
    }
}