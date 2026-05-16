
function buscaDadosDoServidor() {

    return new Promise((resolve, reject) => {
        console.log('Buscando dados do servidor...');

        setTimeout(() => {
            let sucesso = Math.random() > 0.5;

            if (sucesso) {
                resolve('Dados recebidos com sucesso!');
            } else {
                reject('Erro ao buscar dados do servidor.');
            }
        }, 2000);
    });
}

buscaDadosDoServidor()
.then((mensagem)=>{
    console.log(mensagem);
})
.catch((erro)=>{
    console.error(erro);
});
