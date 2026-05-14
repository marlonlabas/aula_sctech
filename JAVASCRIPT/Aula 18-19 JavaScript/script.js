function trocarCor() {
    const caixa1 = document.getElementById('caixa1');
    const caixa2 = document.getElementById('caixa2');
    const caixa3 = document.getElementById('caixa3');
    caixa1.style.backgroundColor = 'lightblue';
    caixa2.style.backgroundColor = 'lightgreen';
    caixa3.style.backgroundColor = 'lightcoral';
}

function retornarCor() {
    const caixa1 = document.getElementById('caixa1');
    const caixa2 = document.getElementById('caixa2');
    const caixa3 = document.getElementById('caixa3');
    caixa1.style.backgroundColor = "";
    caixa2.style.backgroundColor = '#007BFF';
    caixa3.style.backgroundColor = '#007BFF';
}

function exibirMensagem(){
    const idioma = document.getElementById('Idioma').value;
    let mensagem = "";

    switch(idioma) {
        case "pt":
            mensagem = "Olá! Esta é uma mensagem em português.";
            break;
        case "en":
            mensagem = "Hello! This is a message in English.";
            break;
        case "es":
            mensagem = "¡Hola! Esta es un mensaje en español.";
            break;
        default:
            mensagem = "Por favor, escolha um idioma.";
    }

    document.getElementById('mensagem').textContent = mensagem;
    alert(mensagem);
}