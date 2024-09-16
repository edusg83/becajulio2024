let array1 = [1,2,3,4]

for(let i = 1; i <= array1.length;i++){
    switch(i){
        case 1:
            console.log("NUMERO 1")
            break;
        case 2:
            console.log("NUMERO 2")
            break;
        case 3:
            console.log("NUMERO 3")
            break;
        case 4:
            console.log("NUMERO 4")
            break;
    }
}

array1.push(3)

console.log(array1)

array1.splice(3,3)

console.log(array1)