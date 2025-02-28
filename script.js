document.getElementById("mostrarMensajeBtn").addEventListener("click", mostrarMensaje);


function mostrarMensaje() {
    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const lenguaje = document.getElementById("lenguaje").value.trim();

    // Verifica que todos los campos estén completos
    if (nombre === "" || edad === "" || lenguaje === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Genera el mensaje final
    const mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;

    // Muestra el mensaje con un alert
    alert(mensaje);
}
