const dividir = (a, b) => {
    if (b == 0) {
        throw new Error("¡No se puede dividir entre cero!");
    }
    return a/b;
}

console.log("--- DIVISIÓN ---")
console.log("Número 1: 45\nNúmero 2: 0");
try { 
    let resultado = dividir(45, 0);    
    console.log("Resultado:", resultado); 
} catch (e) { 
    console.log("Ocurrió un error:", e.message); 
}