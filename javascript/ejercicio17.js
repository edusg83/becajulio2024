var alfa = "alfa=beta";
var gama = "gama=delta";


document.write(location.protocol + location.host + location.pathname+"?" + alfa + "&" + gama);

//document.write("file:///C:/Users/Yago/Desktop/gitClonado/becajulio2024/javascript/ejercicio17.html"+"?" + alfa + "&" + gama);

let params = properties.get();

let alfa = params.get('alfa');

let delta = params.get('delta');