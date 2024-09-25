function getUser() {
    const param = new URLSearchParams(window.location.search);
    let nombre = param.get('id')
    console.log(nombre);
}