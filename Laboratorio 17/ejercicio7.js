console.log("--- TIPO DE ERROR ---");
console.log("Dato empleado: y = 123\nSe pide: y()");
try {
    let y = 123;
    y();
} catch (error) {
    if(error instanceof SyntaxError) {
        console.log("Error de sintaxis:", error.message);
    } else if(error instanceof ReferenceError) {
        console.log("Error de declaración:", error.message);
    } else if(error instanceof TypeError) {
        console.log("Error de tipo:", error.message);
    } else {
        console.log("Error desconocido:", error.message);
    }
}