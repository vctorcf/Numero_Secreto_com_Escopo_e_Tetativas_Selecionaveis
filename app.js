function escolherNumeroSecreto(vMin, vMax){
    let numeroSecreto = Math.floor(Math.random()*(vMax-vMin+1))+vMin;
    console.log(`O número secreto é ${numeroSecreto}.`);
    return numeroSecreto;
}

function sortear(){
    let quantidadeTentativas = parseInt(document.getElementById('quantidade').value);//sem o .value no final, ele devolveria apenas a tag html, ou seja, a tag input inteira
    let valorMinimo = parseInt(document.getElementById('de').value);
    let valorMaximo = parseInt(document.getElementById('ate').value);

    console.log(`A quantidade de tentativas desse jogo é ${quantidadeTentativas}.`);
    console.log(`O valor mínimo do número secreto é ${valorMinimo}.`);
    console.log(`O valor máximo do número secreto é ${valorMaximo}.`);

    let nSorteados = [];
    let numero;

    for (i=0; i<quantidadeTentativas; i++){
        numero = escolherNumeroSecreto(valorMinimo,valorMaximo);
        

    }
}



