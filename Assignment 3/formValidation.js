function validateForm() {

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.innerText = "";
    passwordError.innerText = "";
    email.classList.remove("input-error");
    password.classList.remove("input-error");

    let isValid = true;

    if (email.value === "") {
        emailError.innerText = "Email is required";
        email.classList.add("input-error");
        isValid = false;
    }
    else if (!email.value.includes("@") || !email.value.includes(".")) {
        emailError.innerText = "Enter a valid email";
        email.classList.add("input-error");
        isValid = false;
    }

    if (password.value === "") {
        passwordError.innerText = "Password is required";
        password.classList.add("input-error");
        isValid = false;
    }
    else if (password.value.length < 6) {
        passwordError.innerText = "Minimum 6 characters required";
        password.classList.add("input-error");
        isValid = false;
    }

    return isValid;
}
