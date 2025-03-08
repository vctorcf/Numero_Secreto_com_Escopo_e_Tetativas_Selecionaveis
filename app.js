function mudarHTML(id,texto){
   let campo=document.getElementById(id);
   campo.innerHTML = texto;
}

function escolherAleatorio(vMin, vMax){
    let numeroAleatorio = Math.floor(Math.random()*(vMax-vMin+1))+vMin;
    console.log(`O número escolhido foi ${numeroAleatorio}.`);
    return numeroAleatorio;
}

function filtrarNumerosRepetidos(lista, numero, vMin, vMax){
    if (lista.includes(numero)){
        console.log(`Porém, ${numero} já foi sorteado! Escolhendo outro número...`);
        numero = escolherAleatorio(vMin, vMax);
        return filtrarNumerosRepetidos(lista, numero, vMin, vMax);
    } else {
        return numero;
    }
}

function alterarStatusBotao(id){
    let botao = document.getElementById(id);
    if(botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function sortear(){
    let quantidadeTentativas = parseInt(document.getElementById('quantidade').value);//sem o .value no final, ele devolveria apenas a tag html, ou seja, a tag input inteira
    let valorMinimo = parseInt(document.getElementById('de').value);
    let valorMaximo = parseInt(document.getElementById('ate').value);

    if(isNaN(quantidadeTentativas)||isNaN(valorMinimo)||isNaN(valorMaximo)){
        alert("Por favor, escreva apenas números nos espaços!");
    } else {
        console.log(`A quantidade de tentativas desse jogo é ${quantidadeTentativas}.`);
        console.log(`O número sorteado precisa ser igual a no mínimo ${valorMinimo}.`);
        console.log(`O número sorteado precisa ser igual a no máximo ${valorMaximo}.`);

        let nSorteados = [];
        let numero;
        let numeroFiltrado;

        for (let i=0; i<quantidadeTentativas; i++){
           numero= escolherAleatorio(valorMinimo,valorMaximo);
           numeroFiltrado = filtrarNumerosRepetidos(nSorteados,numero,valorMinimo,valorMaximo);
           nSorteados.push(numeroFiltrado);
        }
        mudarHTML("resultado",`<label class="texto__paragrafo">Números sorteados: ${nSorteados}</label>`);
    }
    alterarStatusBotao("btn-sortear");
    alterarStatusBotao("btn-reiniciar");
}

function reiniciar(){
    document.getElementById('quantidade').value ='';
    document.getElementById('de').value ='';
    document.getElementById('ate').value ='';
    mudarHTML("resultado",`<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`);
    alterarStatusBotao("btn-sortear");
    alterarStatusBotao("btn-reiniciar");
}