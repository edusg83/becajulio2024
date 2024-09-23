document.getElementById("submitBtn").onclick = function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const province = document.getElementById("province").value;
    const errorMsg = document.getElementById("errorMsg");

    if (name.startsWith("ANTONIO") || name.length > 20) {
        errorMsg.classList.remove("hidden");
        return;
    }
    if (email === "" || province === "") {
        errorMsg.classList.remove("hidden");
        return;
    }
    alert(`Nombre: ${name}\nEmail: ${email}\nProvincia: ${province}`);
    errorMsg.classList.add("hidden");
};
document.querySelectorAll("input, select").forEach((element) => {
    element.oninput = function() {
        document.getElementById("errorMsg").classList.add("hidden");
    };
});
