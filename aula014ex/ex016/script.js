// for (Contador; Condição; Incremento/Decremento) {}
// if (condição) {}

function contar() {
    // Pegando os campos de input do HTML
    let ini = document.querySelector('#txti');
    let fim = document.querySelector('#txtf');
    let passo = document.querySelector('#txtp');
    let res = document.querySelector('#res');

    // Verificando se TODOS campos estão ao menos preenchidos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO]: Preencha todos os campos!');
        res.innerHTML = 'Impossível contar...';
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p == 0) {
            alert('[ERRO]: O passo não pode ser 0, não temos como pular de 0 em 0. Vamos considerar passo como 1');
            p = 1
        }

        // Verificando SE o numero Inicial é Menor que o numero Final, ou se o Inicial é Maior que o numero Final.
        if (i < f) {
            // Contagem Crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        } else {
            // Contagem Decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
        
        



    }



}