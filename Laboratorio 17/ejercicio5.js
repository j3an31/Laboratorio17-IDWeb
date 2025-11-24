console.log("--- ERROR EN CONSOLE.LOG ---");
try {
    delete console.log; // Elimino método log
    console.log("Esto va a fallar");
} catch (e) {
    console.log("¡Falló!")
} finally {
    console.log("> Siempre se ejecuta");
}