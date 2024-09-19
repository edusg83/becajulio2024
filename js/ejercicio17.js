//http://localhost:63342/Pruebas/bom/locaction.html?alfa=beta&ganma=delta
let alfa = location.search.slice(6,10);
let ganma = location.search.slice(17, location.search.length);

 let params = new URLSearchParams(location.search);

 let alfa2 = params.get("alfa");
 let ganma2 = params.get("ganma");

 console.log(alfa2 + " " + ganma2);