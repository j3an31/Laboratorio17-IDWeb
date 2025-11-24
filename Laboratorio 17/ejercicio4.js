console.log("--- CONVERTIR JSON A OBJETO ---")
try { 
    let texto = "{nombre: 'José'}"; 
    console.log("JSON a convertir:", texto); 
    let converion = JSON.parse(texto);     
    console.log("Objeto:", converion); 
} catch (e) { 
    console.log("Error al convertir JSON:", e.message);
    console.log("Nombre del error:", e.name);
}