let nameField = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let phone = document.getElementById("phone");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let phoneError = document.getElementById("phoneError");

let successMsg = document.getElementById("successMsg");
let button = document.getElementById("btnRegister");

button.addEventListener("click", function () {

    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    phoneError.innerText = "";
    successMsg.style.display = "none";

    nameField.classList.remove("input-error");
    email.classList.remove("input-error");
    password.classList.remove("input-error");
    phone.classList.remove("input-error");

    let isValid = true;

    if (nameField.value === "") {
        nameError.innerText = "Name is required";
        nameField.classList.add("input-error");
        isValid = false;
    }

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

    if (phone.value === "") {
        phoneError.innerText = "Phone number is required";
        phone.classList.add("input-error");
        isValid = false;
    }

    if (isValid) {
        successMsg.style.display = "block";

        nameField.value = "";
        email.value = "";
        password.value = "";
        phone.value = "";

        alert("Registration successful!");
    }
});
