function soma1(){
    let num1 = document.getElementById("inputNum1").value;
    let num2 = document.getElementById("inputNum2").value;
    let resultado = parseFloat(num1) + parseFloat(num2);
    console.log(resultado);
    document.getElementById("resultado").innerHTML = "O resultado da soma é: " + resultado;
}

function limparSoma(){
    console.clear();
    document.getElementById("inputNum1").value = "";
    document.getElementById("inputNum2").value = "";
    document.getElementById("resultado").innerHTML = "Resultado da soma aparecerá aqui.";
}

function verificarAprovacao(){
    let nota1 = parseFloat(document.getElementById("inputNota1").value);
    console.log("Nota inserida: " + nota1);
    if (nota1 >= 7) {
        document.getElementById("resultadoAprovacao").innerHTML = "Aprovado!";
        alert("Parabéns! Você foi aprovado.");
    } else {
        document.getElementById("resultadoAprovacao").innerHTML = "Reprovado!";
        alert("Infelizmente, você foi reprovado. Tente novamente!");
    }
    if (nota1 < 0 || nota1 > 10) {
        document.getElementById("resultadoAprovacao").innerHTML = "Nota inválida! Por favor, insira uma nota entre 0 e 10.";
    }
}

function limparAprovacao(){
    document.getElementById("inputNota1").value = "";
    document.getElementById("resultadoAprovacao").innerHTML = "Resultado aparecerá aqui.";
}
