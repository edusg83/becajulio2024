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

function calculate(){
    try{
        display.value = eval(display.value); 
    }catch(error){
        display.value = 'Error'; 
    }
}

function clearAll(){
    display.value = ""; 
}

