let array1 = [1,2,3,4];
console.log(array1);

for (let i = 0; i < array1.length; i++){
    switch (array1[i]){
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
        default:
            console.log("No hay números asignados");
    }
}