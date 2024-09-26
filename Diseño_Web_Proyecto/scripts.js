const login_modal = new bootstrap.Modal(document.getElementById("login_modal"))

const signup_modal = new bootstrap.Modal(document.getElementById("signup_modal"))


function use_login_modal(param) {
    param == 1 ? login_modal.show() : login_modal.hide();
}

function use_signup_modal(param) {
    param == 1 ? signup_modal.show() : signup_modal.hide();
}
