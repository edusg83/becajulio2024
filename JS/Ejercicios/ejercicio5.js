const array1 = [1, 2, 3, 4];

array1.forEach(e => {
  switch (e) {
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
});

array1.push(3);
console.log(array1);


for (let i = 0; i < 3; i++) {
  array1.pop();
}

console.log(array1);

var a = "Er";
a += "ic";

var b = a > "Jonn Lennon" || a + " Clapton";
a = b;

var c = !(a > b || a != b) && a != "Eric";

console.log(c);