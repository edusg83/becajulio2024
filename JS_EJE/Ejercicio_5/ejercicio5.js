let array_1 = [1, 2, 3, 4];

for (let i = 0; i < array_1.length; i++) {
    switch (array_1[i]) {
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
            console.log("default");
    }
}

array_1.push(3);
console.log("C)", array_1);

array_1.splice(-3);
console.log("D)", array_1);