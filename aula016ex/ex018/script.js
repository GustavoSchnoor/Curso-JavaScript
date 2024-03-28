let numero = document.querySelector('#num');
let selecaoNumero = document.querySelector('#selecaoNum');
let divRes = document.querySelector('#res');
let listaNum = [];

// TESTA se o numero esta entre 1 e 100 e retorna para quem chamou
function verificaNumero(numb) {
    if (numb >= 1 && numb <= 100) {
        return true;
    } else {
        return false;
    }
}
// TESTA se o numero informado ja tem na lista.
function verificaRepetido(numb) {
    // Usando o indexOf(numb) se retornar -1 é porque NÃO tem esse numero na lista. Se retornar qualquer outro numero alem de -1, é porque tem na lista
    if (listaNum.indexOf(numb) === -1) { 
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    let numeroInformado = Number(numero.value);
    
    // Cria uma condição onde chamamos a função verificaNumero com o parametro do input number do HTML. Usamos o numero.value para pegar o valor, e dentro dele colocamos o Number() para ja trazer o valor convertido de string para numérico.
    if (verificaNumero(numeroInformado) && verificaRepetido(numeroInformado)) {
        listaNum.push(numeroInformado);
        let item = document.createElement('option');
        item.innerHTML = `Valor ${numeroInformado} adicionado`;
        selecaoNumero.appendChild(item);
        divRes.innerHTML = '';
        console.log(listaNum);
    } else {
        alert('Número inválido ou ja adicionado');
    }
    numero.value = '';
    numero.focus();
}

function finalizar() {
    let totalNumerosInformados = listaNum.length;
    let maior = Math.max(...listaNum);
    let menor = Math.min(...listaNum);
    let soma = 0;
    let media = 0;

    // TESTA SE a quantidade de numeros dentro da array é 0, então informa o erro.
    if (totalNumerosInformados === 0) {
        alert('Não pode finalizar sem adicionar números')
        return;
    }
    
    let totalNumeros = document.createElement('p');
    totalNumeros.innerHTML = `Ao todo, temos ${totalNumerosInformados} números cadastrados.`;
    divRes.appendChild(totalNumeros);

    let maiorNum = document.createElement('p');
    maiorNum.innerHTML = `O maior valor informado foi ${maior}.`;
    divRes.appendChild(maiorNum);

    let menorNum = document.createElement('p');
    menorNum.innerHTML = `O menor valor informado foi ${menor}.`;
    divRes.appendChild(menorNum);

    for (let c = 0; c < totalNumerosInformados; c++) {
        soma = soma + listaNum[c];
    }
    let somaTotal = document.createElement('p');
    somaTotal.innerHTML = `Somando todos valores, temos ${soma}.`;
    divRes.appendChild(somaTotal);

    media = soma / totalNumerosInformados;
    let mediaTotal = document.createElement('p');
    mediaTotal.innerHTML = `A média de todos valores informados é ${media.toFixed(2)}`;
    divRes.appendChild(mediaTotal);
}


