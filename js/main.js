const { defaultConfiguration } = require("express/lib/application");

function exercicioUm(){
    let ladoUm = document.getElementById("ladoUm").value
    let ladoDois=  document.getElementById("ladoDois").value
    let area = ladoUm * ladoDois
    document.getElementById("respostaUm").innerHTML = "A área da base do Triângulo é igual a: " + area;

    // Estilo da Resposta
    respostaUm.style.fontSize = "2.5rem"
    respostaUm.style.color= "black"
    respostaUm.style.fontFamily = "Montserrat"
    respostaUm.style.transition = "5s"
    respostaUm.style.backgroundColor = "aliceblue"
    respostaUm.style.width = "15rem"
    respostaUm.style.borderRadius = "5px"
    respostaUm.style.border = "solid black 3px"
    respostaUm.style.padding = "2rem"
}
function exercicioDois(){
    let altura = document.getElementById("altura").value
    let comprimento = document.getElementById("comprimento").value
    let area = (altura * comprimento) / 2
    document.getElementById("respostaDois").innerHTML = "A área da base do Triângulo é igual a: " + area;

    // Estilo da Resposta
    respostaDois.style.fontSize = "2.5rem"
    respostaDois.style.color= "black"
    respostaDois.style.fontFamily = "Montserrat"
    respostaDois.style.transition = "5s"
    respostaDois.style.backgroundColor = "aliceblue"
    respostaDois.style.width = "15rem"
    respostaDois.style.borderRadius = "5px"
    respostaDois.style.border = "solid black 3px"
    respostaDois.style.padding = "2rem"
}
function exercicioTres(){
    let volumeFrasco = Math.PI * 2.5 * 22
    let horasTotais = 16 * 30 // 16 horas por 30 dias
    let volumePorHora = volumeFrasco * 55
    let volumeTotal = volumePorHora * horasTotais
    document.getElementById("respostaTres").innerHTML = "O volume de produção total é igual a: " + volumeTotal.toFixed(2) + " cm3"

    // Estilo da Resposta
    respostaTres.style.fontSize = "2.5rem"
    respostaTres.style.color= "black"
    respostaTres.style.fontFamily = "Montserrat"
    respostaTres.style.transition = "5s"
    respostaTres.style.backgroundColor = "aliceblue"
    respostaTres.style.width = "15rem"
    respostaTres.style.borderRadius = "5px"
    respostaTres.style.border = "solid black 3px"
    respostaTres.style.padding = "2rem"
}
function exercicioQuatro(){
    let media = (1.27 + 0.873 + 0.792 + 0.559 + 0.672 + 0.714 + 0.623) / 7
    let tempoFuncionamento = 180
    let mediaPreco = (media * 7) * 14.95
    let mediaDia = mediaPreco * (tempoFuncionamento / 15) // 15 é o tempo das 7 refeições da média
    let mediaMes = mediaDia * 22 // 22 dias trabalhados no mes
    document.getElementById("respostaQuatro-um").innerHTML = "O valor da receira nas 3h de funcionamento é igual a: " + mediaDia.toFixed(2) + " reais"
    document.getElementById("respostaQuatro-dois").innerHTML = "O valor da receita no mês é igual a: " + mediaMes + " reais"
}
function exercicioCincoUm(){
    // Graus Celsius para Farenheit
    let celRecebido = document.getElementById("CelPFar").value
    let farResposta = (celRecebido * [9/5]) + 32
    document.getElementById("respostaCinco").innerHTML = "O valor inserido convertido para °F é igual a: " + farResposta

    // Estilo da Resposta
    respostaCinco.style.fontSize = "2.5rem"
    respostaCinco.style.color= "black"
    respostaCinco.style.fontFamily = "Montserrat"
    respostaCinco.style.transition = "5s"
    respostaCinco.style.backgroundColor = "aliceblue"
    respostaCinco.style.width = "15rem"
    respostaCinco.style.borderRadius = "5px"
    respostaCinco.style.border = "solid black 3px"
    respostaCinco.style.padding = "2rem"
}
function exercicioCincoDois(){
    // Graus Farenheit para Celsius
    let farRecebido = document.getElementById("FarPCel").value
    let celResposta = (farRecebido - 32) * (5/9)
    console.log("O resultado da Conversão é: " + celResposta)
    document.getElementById("respostaCinco").innerHTML = "O resultado da Conversão é: " + celResposta.toFixed(2)

    // Estilo da Resposta
    respostaCinco.style.fontSize = "2.5rem"
    respostaCinco.style.color= "black"
    respostaCinco.style.fontFamily = "Montserrat"
    respostaCinco.style.transition = "5s"
    respostaCinco.style.backgroundColor = "aliceblue"
    respostaCinco.style.width = "15rem"
    respostaCinco.style.borderRadius = "5px"
    respostaCinco.style.border = "solid black 3px"
    respostaCinco.style.padding = "2rem"
}
function exercicioSeis() {
    let numbers = [];
    for (let i = 1; i <= 7; i++) {
        let num = parseFloat(document.getElementById(`num${i}`).value);
        if (num >= 0 && num <= 10) {
            numbers.push(num);
        }
    }
    let somaMaiorIgual = 0, contadorMaiorIgual = 0;
    let SomaMenorQue = 0, contadorMenorQue = 0;
    for (let num of numbers) {
        if (num >= 6) {
            somaMaiorIgual += num;
            contadorMaiorIgual++;
        } else {
            SomaMenorQue += num;
            contadorMenorQue++;
        }
    }
    let mediaMaiorIgual = contadorMaiorIgual > 0 ? (somaMaiorIgual / contadorMaiorIgual).toFixed(2) : 0;
    let mediaMenorQue =contadorMenorQue > 0 ? (SomaMenorQue /contadorMenorQue).toFixed(2) : 0;
    document.getElementById('respostaSeis').innerText = 
        `Média dos números >= 6: ${mediaMaiorIgual}\n` +
        `Média dos números < 6: ${mediaMenorQue}`;
}
function exercicioSete(){
    let idade = document.getElementById("idade").value
    let nome = document.getElementById("nome").value
    if (idade >= 16){
        document.getElementById("respostaSete").innerHTML = `${nome} pode votar nessa eleição.`;
    }else{
        document.getElementById("respostaSete").innerHTML = `${nome} não pode votar nessa eleição por ter menos de 16 anos.`;
    }

    // Estilo da Resposta
    respostaSete.style.fontSize = "2.5rem"
    respostaSete.style.color= "black"
    respostaSete.style.fontFamily = "Montserrat"
    respostaSete.style.transition = "5s"
    respostaSete.style.backgroundColor = "aliceblue"
    respostaSete.style.width = "15rem"
    respostaSete.style.borderRadius = "5px"
    respostaSete.style.border = "solid black 3px"
    respostaSete.style.padding = "2rem"
}
function exercicioOito(){
    let selecionado = document.getElementById("hortifruti").value
    let quantidade = document.getElementById("quantidade").value
    let precoTomate = 5.35;
    let precoCebola = 3.32;
    let precoAipim = 2.87;
    let precoBatata = 4.43;
    let precoCenoura = 3.59;
    let precoChuchu = 1.79;
    if(selecionado == "tomate"){
        document.getElementById("respostaOito").innerHTML = "O preço final da compra é igual a: " + (quantidade * precoTomate)
    }
    else if(selecionado == "cebola"){
        document.getElementById("respostaOito").innerHTML = "O preço final da compra é igual a: " + (quantidade * precoCebola)
    }
    else if(selecionado == "aipim"){
        document.getElementById("respostaOito").innerHTML = "O preço final da compra é igual a: " + (quantidade * precoAipim)
    }
    else if(selecionado == "batata"){
        document.getElementById("respostaOito").innerHTML = "O preço final da compra é igual a: " + (quantidade * precoBatata)
    }
    else if(selecionado == "cenoura"){
        document.getElementById("respostaOito").innerHTML = "O preço final da compra é igual a: " + (quantidade * precoCenoura)
    }
    else{
        document.getElementById("respostaOito").innerHTML = "O preço final da compra é igual a: " + (quantidade * precoChuchu)
    }

    // Estilo da Resposta
    respostaOito.style.fontSize = "2.5rem"
    respostaOito.style.color= "black"
    respostaOito.style.fontFamily = "Montserrat"
    respostaOito.style.transition = "5s"
    respostaOito.style.backgroundColor = "aliceblue"
    respostaOito.style.width = "15rem"
    respostaOito.style.borderRadius = "5px"
    respostaOito.style.border = "solid black 3px"
    respostaOito.style.padding = "2rem"
}
function exercicioNove(){
    let operacao = document.getElementById("operacao").value
    let numUm = Number(document.getElementById("numUm").value)
    let numDois = Number(document.getElementById("numDois").value)
    if(operacao == "soma"){
        document.getElementById("respostaNove").innerHTML = "O resultado é: " + (numUm + numDois)
    }else if(operacao == "sub"){
        document.getElementById("respostaNove").innerHTML = "O resultado é: " + (numUm - numDois)
    }else if(operacao == "mult"){
        document.getElementById("respostaNove").innerHTML = "O resultado é: " + (numUm * numDois)
    }else if(operacao == "div"){
        document.getElementById("respostaNove").innerHTML = "O resultado é: " + (numUm / numDois)
    }

    // Estilo da Resposta
    respostaNove.style.fontSize = "2.5rem"
    respostaNove.style.color= "black"
    respostaNove.style.fontFamily = "Montserrat"
    respostaNove.style.transition = "5s"
    respostaNove.style.backgroundColor = "aliceblue"
    respostaNove.style.width = "15rem"
    respostaNove.style.borderRadius = "5px"
    respostaNove.style.border = "solid black 3px"
    respostaNove.style.padding = "2rem"
}
function exercicioDez(){
    let numerosStr = document.getElementById("numerosStr").value
    let valores = numerosStr.split(",").map(Number)
    let maior = Math.max.apply(null, valores)
    document.getElementById("respostaDez").innerHTML = "O maior número é: " + maior

    // Estilo da Resposta
    respostaDez.style.fontSize = "2.5rem"
    respostaDez.style.color= "black"
    respostaDez.style.fontFamily = "Montserrat"
    respostaDez.style.transition = "5s"
    respostaDez.style.backgroundColor = "aliceblue"
    respostaDez.style.width = "15rem"
    respostaDez.style.borderRadius = "5px"
    respostaDez.style.border = "solid black 3px"
    respostaDez.style.padding = "2rem"
}
function exercicioOnze(){
    let custoFabrica = Number(document.getElementById("custoFabrica").value)
    let distribuidor = Number(document.getElementById("distribuidor").value)
    let totalDistribuidor = custoFabrica + (custoFabrica * (distribuidor / 100))
    let total = totalDistribuidor + (totalDistribuidor * (15/100))
    document.getElementById("respostaOnze").innerHTML = "O valor total do carro é: " + total + " reais"

    // Estilo da Resposta
    respostaOnze.style.fontSize = "2.5rem"
    respostaOnze.style.color= "black"
    respostaOnze.style.fontFamily = "Montserrat"
    respostaOnze.style.transition = "5s"
    respostaOnze.style.backgroundColor = "aliceblue"
    respostaOnze.style.width = "15rem"
    respostaOnze.style.borderRadius = "5px"
    respostaOnze.style.border = "solid black 3px"
    respostaOnze.style.padding = "2rem"
}
function exercicioDoze(){
    let precoCompra = Number(document.getElementById("precoCompra").value)
    let precoFinal;
    if(precoCompra < 50){
        precoFinal = precoCompra + (precoCompra * (35/100))
    }else if(precoCompra > 50 && precoCompra < 100){
        precoFinal = precoCompra + (precoCompra * (25/100))
    }else{
        precoFinal = precoCompra + (precoCompra * (15/100))
    }
    document.getElementById("respostaDoze").innerHTML = "O valor de venda do produto é: " + precoFinal + " reais"

    // Estilo da Resposta
    respostaDoze.style.fontSize = "2.5rem"
    respostaDoze.style.color= "black"
    respostaDoze.style.fontFamily = "Montserrat"
    respostaDoze.style.transition = "5s"
    respostaDoze.style.backgroundColor = "aliceblue"
    respostaDoze.style.width = "15rem"
    respostaDoze.style.borderRadius = "5px"
    respostaDoze.style.border = "solid black 3px"
    respostaDoze.style.padding = "2rem"
}
function exercicioTreze() {
    let smsQuantidade = Number(document.getElementById('smsQuantidade').value);
    let planoBasico = 5.00;
    let limiteBasico = 75;
    let limiteIntermediario = 240;
    let custoAdicionalBasico = 0.05;
    let custoAdicionalExtra = 0.10;
    let valorTotal = planoBasico;
    if (smsQuantidade > limiteBasico) {
        let mensagensAdicionais = Math.min(smsQuantidade - limiteBasico, limiteIntermediario - limiteBasico);
        valorTotal += mensagensAdicionais * custoAdicionalBasico;

        if (smsQuantidade > limiteIntermediario) {
            let mensagensExtras = smsQuantidade - limiteIntermediario;
            valorTotal += mensagensExtras * custoAdicionalExtra;
        }
    }
    document.getElementById('respostaTreze').innerHTML = `Valor a pagar: R$ ${valorTotal.toFixed(2)}`;

    // Estilo da Resposta
    respostaTreze.style.fontSize = "2.5rem"
    respostaTreze.style.color= "black"
    respostaTreze.style.fontFamily = "Montserrat"
    respostaTreze.style.transition = "5s"
    respostaTreze.style.backgroundColor = "aliceblue"
    respostaTreze.style.width = "15rem"
    respostaTreze.style.borderRadius = "5px"
    respostaTreze.style.border = "solid black 3px"
    respostaTreze.style.padding = "2rem"
}
function exercicioCatorze(){
    let vendas = parseFloat(document.getElementById('vendas').value);
    let salarioFixo = 1800.00;
    let comissao = 0
    if (vendas <= 10000) {
        comissao = vendas * 0.03;
    } else if (vendas <= 30000) {
        comissao = vendas * 0.05;
    } else {
        comissao = vendas * 0.08;
    }
    let salarioTotal = salarioFixo + comissao
    document.getElementById('respostaCatorze').innerHTML = `Salário Total: ${salarioTotal.toFixed(2)} reais`;

    // Estilo da Resposta
    respostaCatorze.style.fontSize = "2.5rem"
    respostaCatorze.style.color= "black"
    respostaCatorze.style.fontFamily = "Montserrat"
    respostaCatorze.style.transition = "5s"
    respostaCatorze.style.backgroundColor = "aliceblue"
    respostaCatorze.style.width = "15rem"
    respostaCatorze.style.borderRadius = "5px"
    respostaCatorze.style.border = "solid black 3px"
    respostaCatorze.style.padding = "2rem"
}
function exercicioQuinze() {
    let tipoCombustivel = document.getElementById('tipoCombustivel').value;
    let litros = Number(document.getElementById('litros').value);
    let precoGasolina = 5.00; // preço por litro de gasolina
    let precoAlcool = 3.50;   // preço por litro de álcool

    let precoPorLitro;
    let desconto = 0;

    if (tipoCombustivel === 'G') {
        precoPorLitro = precoGasolina;
        if (litros <= 20) {
            desconto = 0.03;
        } else {
            desconto = 0.05;
        }
    } else if (tipoCombustivel === 'A') {
        precoPorLitro = precoAlcool;
        if (litros <= 20) {
            desconto = 0.02;
        } else {
            desconto = 0.04;
        }
    }

    let precoBruto = litros * precoPorLitro;
    let valorDesconto = precoBruto * desconto;
    let precoFinal = precoBruto - valorDesconto;

    document.getElementById('respostaQuinze').innerText = 
        `Combustível: ${tipoCombustivel === 'G' ? 'Gasolina' : 'Álcool'}
        \nQuantidade de Litros: ${litros.toFixed(2)}
        \nPreço por Litro: R$ ${precoPorLitro.toFixed(2)}
        \nPreço Final: R$ ${precoFinal.toFixed(2)}`;

        // Estilo da Resposta
    respostaQuinze.style.fontSize = "2.5rem"
    respostaQuinze.style.color= "black"
    respostaQuinze.style.fontFamily = "Montserrat"
    respostaQuinze.style.transition = "5s"
    respostaQuinze.style.backgroundColor = "aliceblue"
    respostaQuinze.style.width = "15rem"
    respostaQuinze.style.borderRadius = "5px"
    respostaQuinze.style.border = "solid black 3px"
    respostaQuinze.style.padding = "2rem"
}