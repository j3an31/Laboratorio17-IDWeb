function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la petición: " + response.status);
            }
            return response.json();
        })
        .then(usuarios => {
            const usuario = usuarios.find(u => u.id === 10);
            if (usuario) {
                console.log("--- INFORMACIÓN DEL USUARIO 10 ---");
                console.log("Nombre:", usuario.name);
                console.log("Usuario:", usuario.username);
                console.log("Email:", usuario.email);
            } else {
                console.log("¡Usuario con id 10 no encontrado!");
            }
        })
        .catch(error => {
            console.error("Error al cargar el usuario:", error);
        });
}

cargarUsuario();