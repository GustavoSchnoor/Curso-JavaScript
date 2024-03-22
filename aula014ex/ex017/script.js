const botaoGerarTabuada = document.querySelector('#tabuada');

botaoGerarTabuada.addEventListener('click', function() {
    let num = document.querySelector('#txtn'); // Selecionamos o elemento com a ID txtn (Campo de numeros)
    let tab = document.querySelector('#seltab'); // Selecionamos o elemento com a ID seltab (Campo Select onde irá aparecer o resultado das tabuadas)
    tab.size = '10'; // Adiciona um atributo chamado SIZE com numero 10, para que apareça uma caixa de seleção com até 10 resultados sem o botão de clicar do lado
    tab.innerHTML = ''; // Limpa todo HTML que estiver dentro do Select com o ID #seltab que foi atribuido a variavel -> tab. Isso serve para ficar gerando novas tabuadas e limpando a antiga

    if (num.value.length == 0) {
        alert('[ERRO]: Você precisa digitar algum numero para tabuada.');
    } else {
        let n = Number(num.value);
        let start = 1
        let end = 10

        while (start <= end) {
            let item = document.createElement('option');
            item.text = `${n} x ${start} = ${n*start}`;
            item.value = `tab${start}`
            tab.appendChild(item);
            start++;
        }
    }

});