function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const fano = document.querySelector('#txtano');
    const res = document.querySelector('#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados novamente!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'bebe-homem.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto.png');
            } else {
                img.setAttribute('src', 'idoso-homem.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'bebe-mulher.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher-jovem.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-adulta.png');
            } else {
                img.setAttribute('src', 'idosa-mulher.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
        
    }
}