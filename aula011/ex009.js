/*
let pais = 'Brasil';
console.log(`Vivendo em ${pais}`);

if (pais == 'Brasil') {
    console.log('Você é Brasileiro')
} else {
    console.log('Você é Estrangeiro');
}
*/

let campoPais = document.querySelector('#pais');
let res = document.querySelector('.res');

function qualPais() {
    let escolhaPais = campoPais.value;
    res.innerHTML = ` Vivendo no <strong>${escolhaPais}</strong> e `;

    if (escolhaPais == 'Brasil') {
        res.innerHTML += `você é <strong>Brasileiro</strong> `;
    } else {
        res.innerHTML += `você é <strong>Estrangeiro</strong> `;
    }
}

function limpar() {
    campoPais.value = '';
    res.innerHTML = 'Limpamos a resposta, aguardando outro país para atualizar a resposta...'
}



