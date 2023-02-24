const buttonEye = document.querySelector(".eye")
const password = document.getElementById("password")
const hidePassword = document.getElementById("hide-password")
const showPassword = document.getElementById("show-password")

function showHidePassword(event) {
    if(password.type === 'password') {
        password.setAttribute('type', 'text')
        hidePassword.style.display = 'block'
        buttonEye.classList.remove('eye')
        buttonEye.classList.add('eye-slash')
        showPassword.style.display = 'none'
    } else {
        password.setAttribute('type', 'password')
        showPassword.style.display = 'block'
        buttonEye.classList.remove('eye-slash')
        buttonEye.classList.add('eye')
        hidePassword.style.display = 'none'
    }

    document.querySelector("form").addEventListener("submit", (event) => { event.preventDefault()})
}

buttonEye.addEventListener('click', showHidePassword)
