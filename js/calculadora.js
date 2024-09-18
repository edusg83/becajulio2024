let display = document.getElementById('display');
let operation = document.getElementById('operation'); 
let newInput = document.getElementById('newInput'); 

function appendNumber(number){
    newInput.innerHTML += number; 
}

function appendOperator(operator){
    if(newInput){
        let lastChar = newInput.innerHTML.trim().slice(-1); 
        console.log(lastChar); 
        if(['+', '-', '*', '/'].includes(lastChar)){
            newInput.innerHTML = newInput.innerHTML.trim().slice(0, -1) + " " + operator + " "; 
        }else if(['.'].includes(lastChar)){
           
            return; 
        }else{
            newInput.innerHTML += " " + operator + " ";
        }

    }
    
}

function clearLastChar(){
  newInput.innerHTML =  newInput.innerHTML.trim().slice(0,-1); 
}


function calculate(){
    try{
      //  display.value = eval(display.value); 
        let expression = newInput.innerHTML;
        let numbers = getNumbers(expression);
        let operators = getOperators(expression);
    
        calculateMultiplicationOrDivision(operators, numbers);  
        calculateAdditionOrSubstraction(operators, numbers); 
        operation.innerHTML = expression + " =" ; 
        //Muestra el resultado
        newInput.innerHTML = numbers[0]; 
      
    }catch(error){
        newInput.innerHTML = 'Error'; 
    }
}

function getNumbers(expression){
    let numbers = []; 
    let currentNumber = '';
    for(let i =0; i < expression.length; i++){
        let char = expression[i]; 
        if(!isNaN(char) || char === '.'){
            currentNumber += char; 
        }else if(['+', '-', '*', '/'].includes(char)){
            if(currentNumber){
                numbers.push(parseFloat(currentNumber)); 
                currentNumber = ''; 
            }
        }
    }

    if (currentNumber) {
        numbers.push(parseFloat(currentNumber));
    }

    return numbers; 
}

function getOperators(expression){
    let operators = [];

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (['+', '-', '*', '/'].includes(char)) {
            operators.push(char);
        }
    }

    return operators; 
}

function calculateMultiplicationOrDivision(operators, numbers){
    let i = 0;
    while(i < operators.length){
        if(operators[i] === '*' || operators[i] === '/'){
            let result = operators[i] === '*'
                ? numbers[i] * numbers[i + 1]
                : numbers[i] / numbers[i + 1]; 
    
                numbers.splice(i, 2, result); 
                operators.splice(i, 1); 
        } else{
            i++; 
        }
    } 
  
}

function calculateAdditionOrSubstraction(operators, numbers){
    let i = 0;
    while(i < operators.length){

        let result = operators[i] === '+'
                    ? numbers[i] + numbers[i + 1]
                    : numbers[i] - numbers[i + 1]; 
        numbers.splice(i, 2, result); 
        operators.splice(i, 1); 
    
    }
    
}


function clearAll(){
    newInput.innerHTML = ""; 
    operation.innerHTML = ""; 
}

function resetMemory(){
    operation.innerHTML = "";
}

function memoryAddition(){
    operation.innerHTML = "";
}

function getMemoryBack(){
    newInput.innerHTML = operation.innerHTML; 
    operation.innerHTML = ""; 
}

