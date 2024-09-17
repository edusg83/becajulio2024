let display = document.getElementById('display');

function appendNumber(number){
    display.value += number; 
}

function appendOperator(operator){
    if(display.value){
        let lastChar = display.value.trim().slice(-1); 
        console.log(lastChar); 
        if(['+', '-', '*', '/'].includes(lastChar)){
            display.value = display.value.trim().slice(0, -1) + " " + operator + " "; 
        }else if(['.'].includes(lastChar)){
           
            return; 
        }else{
            display.value += " " + operator + " ";
        }

    }
    
}

function clearLastChar(){
  display.value =  display.value.trim().slice(0,-1); 
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

function calculate(){
    try{
      //  display.value = eval(display.value); 
        let expression = display.value;
        let numbers = getNumbers(expression);
        let operators = getOperators(expression);
    
        calculateMultiplicationOrDivision(operators, numbers);  
        calculateAdditionOrSubstraction(operators, numbers); 
        
        //Muestra el resultado
        display.value = numbers[0]; 
      
    }catch(error){
        display.value = 'Error'; 
    }
}

function clearAll(){
    display.value = ""; 
}

