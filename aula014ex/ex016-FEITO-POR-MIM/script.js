// for (Contador; Condição; Incremento/Decremento) {}
// if (condição) {}

// Valida se algum dos campos esta em branco, ao clicar no botão Contar, se sim, ele returna False. Se estiver tudo correto, retorna true.
function validarCamposVazios(val1, val2, val3) {
    if (val1 == '' || val2 == '' || val3 == '') {
        alert('[ERRO]: Preencha todos os campos com numeros corretamente!');
        return false;
    } else {
        return true;
    }
}
// Valida se o campo Passo esta com o numero 0, se sim, retorna False, pois não pode contar de 0 em 0. Se estiver tudo correto, retorna true.
function validarPasso(valPasso) {
    if (valPasso == 0) {
        alert('[ERRO]: Não temos como fazer uma contagem pulando 0');
        return false;
    } else {
        return true;
    }
}

// Função contar() criada para pegar os valores dos campos após preenchido e clicado em "Contar" no SITE, e assim, criar o sistema de contagem.
function contar() {
    const inicioInput = document.querySelector('#numInicio').value;
    const fimInput = document.querySelector('#numFim').value;
    const passoInput = document.querySelector('#passo').value;
    const campoContagem = document.querySelector('#campoContagem');
    const emoji = '👉';
    
    // Verifica se todos campos foram preenchidos corretamente com as funções validarCamposVazios() e validarPasso()
    if (!validarCamposVazios(inicioInput, fimInput, passoInput) || !validarPasso(passoInput)) {
        return;
    }
    
    // Após passar pela validação, declaramos as variaveis que usaremos para fazer a contagem e convertemos para Number as strings recebidas dos input's
    let inicio = Number(inicioInput);
    let fim = Number(fimInput);
    let passo = Number(passoInput);

    // Limpa o campo Contagem para poder receber os valores da contagem.
    campoContagem.innerHTML = ''

    // Se o inicio for menor que o fim
    if (inicio < fim) { 
        for (let contador = inicio ; contador <= fim; contador += passo) {
            if (contador + passo <= fim) {
                campoContagem.innerHTML += `${contador}${emoji}`;
            } else {
                campoContagem.innerHTML += `${contador}`;
            }
        }
    } 
    // Se o inicio for maior que o fim
    if (inicio > fim) { 
        for (let contador = inicio ; contador >= fim; contador -= passo) {
            if (contador - passo >= fim) {
                campoContagem.innerHTML += `${contador}${emoji}`;
            } else {
                campoContagem.innerHTML += `${contador}`;
            }
        }
    }
}




/*
if (passo == 0) {
        alert('[ERRO]: Não temos como fazer uma contagem pulando 0');
        return;
    } else if (inicio < fim) { // Se o inicio for menor que o fim
        for (let contador = inicio ; contador <= fim; contador += passo) {
            campoContagem.innerHTML += `${contador}${emoji}`;
        }
    } else if (inicio > fim) { // Se o inicio for maior que o fim
        for (let contador = inicio ; contador >= fim ; contador -= passo) {
            campoContagem.innerHTML += `${contador}${emoji}`;
        }
    }
*/