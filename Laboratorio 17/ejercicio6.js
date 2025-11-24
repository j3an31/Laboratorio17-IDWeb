const validarEdad = (edad) => {
    if (edad<0 || isNaN(edad)) {
        throw new Error("¡Edad inválida!");
    } else {
        console.log("¡Edad validada correctamente!");
    }
}

console.log("--- ERROR EN EDAD ---");
console.log("Edad ingresada: -1");
try {
    validarEdad(-1);
} catch (e) {
    console.log("Ocurrió un error:", e.message); 
}