const eye = document.querySelector(".eye")
const password = document.getElementById("password")
const hidePassword = document.getElementById("hide-password")
const showPassword = document.getElementById("show-password")

function showHidePassword() {
    if(password.type === 'password') {
        password.setAttribute('type', 'text')
        hidePassword.style.display = 'block'
        showPassword.style.display = 'none'
        
    } else {
        password.setAttribute('type', 'password')
        eye.classList.remove('eye-slash')
        showPassword.style.display = 'block'
        hidePassword.style.display = 'none'



    }
}

eye.addEventListener('click', showHidePassword)