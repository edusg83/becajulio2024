function create() {
    let x = document.createElement("p");
    x.innerHTML = "Este texto esta añadido dinamicamente";

    document.getElementsByTagName("body")[0].appendChild(x);
}