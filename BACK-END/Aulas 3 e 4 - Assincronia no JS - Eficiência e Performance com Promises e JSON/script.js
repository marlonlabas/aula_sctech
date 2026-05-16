
function alerta() {
    console.log("Alerta!");
}

setTimeout(alerta, 2000); // Executa a função "alerta" após 2 segundos

console.log("Isso será exibido antes do alerta!"); // Esta linha será executada imediatamente

setInterval(() => {
    console.log("Isso será exibido a cada 3 segundos!");
}, 3000); // Executa a função a cada 3 segundos

