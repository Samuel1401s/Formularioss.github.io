// Obtener el modal
var modal = document.getElementById("loginModal");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Mostrar el modal cuando se carga la página
window.onload = function() {
    modal.style.display = "block";
}

// Cerrar el modal cuando el usuario hace clic en <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Obtener el formulario y añadir un evento de envío
var form = document.getElementById("loginForm");
form.onsubmit = function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener el valor del campo de nombre de usuario
    var username = document.getElementById("username").value;

    // Almacenar el nombre de usuario en una variable
    var nombreUsuario = username;

    // Mostrar el nombre de usuario en el HTML
    var nombreUsuarioDisplay = document.getElementById("nombreUsuarioDisplay");
    if (nombreUsuarioDisplay) {
        nombreUsuarioDisplay.textContent = "Nombre de usuario: " + nombreUsuario;
    } else {
        console.error("Elemento con id 'nombreUsuarioDisplay' no encontrado.");
    }

    // Cerrar el modal
    modal.style.display = "none";
}