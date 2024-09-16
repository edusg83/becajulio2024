let array1 = [1,2,3,4];

for(let i = 0; i <= array1.length; i++) {
    switch(array1[i]){
        case 1:
            console.log("UNO");
            break;
        case 2:
            console.log("DOS");
            break;
        case 3:
            console.log("TRES");
            break;
        case 4:
            console.log("CUATRO");
            break;
    }
}

array1.push(3);

array1.length = array1.length - 3;
console.log(array1);