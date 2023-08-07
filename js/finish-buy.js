//Funcion para mostrar error o exito en la carga
const mostrarResultado = (exito) => {
    const successModal = document.getElementById('successModal');
    const errorModal = document.getElementById('errorModal');

    // exito === true ? successModal.style.display = 'flex' : errorModal.style.display = 'flex';

    if (exito) {
        successModal.style.display = 'flex';
        setTimeout(() => {
            successModal.style.display = 'none';
            window.location.href = 'index.html';
        }, 3000);
    } else {
        errorModal.style.display = 'flex';
        setTimeout(() => {
            errorModal.style.display = 'none';
            window.location.href = 'index.html';
        }, 3000);
    }
}



// Simular conexión con el backend con un spinner durante 3 segundos y mostrar el resultado de la conexion
document.addEventListener('DOMContentLoaded', function () {
    const spinner = document.querySelector('.spinner');
    setTimeout(() => {
        spinner.style.display = 'none';
        mostrarResultado(true); // Cambiar a 'false' para mostrar el resultado de error
    }, 3000);
});