// Funcion para validar si esta vacio el campo
// fn :: string -> boolean
const isEmpty = (str) => str.trim() === '' ? true : false;

//Funcion para validar para que no acepte simbolos especiales
// fn :: string -> boolean
const noSpecialCharacters = (arg) => {
    const noSpecialCharactersRegex = /^[a-zA-Z\s]+$/;
    return noSpecialCharactersRegex.test(arg);
}

// Función para validar el formato del correo electrónico
// fn :: string -> boolean
const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

document.getElementById('register-form').addEventListener('submit', (e) => {

    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessages = document.getElementsByClassName('error-msg');

    // Limpiar los mensajes de error previos
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].textContent = '';
        errorMessages[i].style.display = 'block';
    }

    // Validar los campos ingresados
    if (isEmpty(fullName)) {
        document.getElementById('fullName-error').textContent = 'Por favor, ingrese su nombre completo';
        return
    }

    if (!noSpecialCharacters(fullName)) {
        document.getElementById('fullName-error').textContent = 'No se admiten simbolos especiales o numeros';
        return
    }

    if (isEmpty(email)) {
        document.getElementById('email-error').textContent = 'Por favor, ingrese su correo electrónico';
        return
    }

    if (!isValidEmail(email)) {
        document.getElementById('email-error').textContent = 'El correo electrónico ingresado no es válido';
        return
    }

    if (isEmpty(password)) {
        document.getElementById('password-error').textContent = 'Por favor, ingrese su contraseña';
        return
    }

    if (password.length < 6) {
        document.getElementById('password-error').textContent = 'La contraseña debe tener al menos 6 caracteres';
        return
    }

    if (isEmpty(confirmPassword)) {
        document.getElementById('confirmPassword-error').textContent = 'Por favor, confirme su contraseña';
        return
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPassword-error').textContent = 'Las contraseñas no coinciden';
        return
    }

    // Si no hay errores, enviar el formulario
    // if (!hasErrors()) document.getElementById('register-form').submit();
    document.getElementById('register-form').submit();
    alert('formulario enviado!')

});