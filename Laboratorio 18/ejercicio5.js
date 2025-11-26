function mostrarUsuarios() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la petición: " + response.status);
            }
            return response.json();
        })
        .then(usuarios => {
            console.log("--- NOMBRE DE LOS USUARIOS ---");
            let numUser = 1;
            usuarios.forEach((usuario) => {
                console.log(`Usuario ${numUser}:`, usuario.name);
                numUser++
            });
        })
        .catch(error => {
            console.error("Error al cargar el usuario:", error);
        });
}

mostrarUsuarios();