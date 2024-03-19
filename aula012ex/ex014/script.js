
function carregar() {
    const msg = document.querySelector('#msg'); // Atribuimos a variavel "msg" o elemento HTML com o ID "msg" que no caso é uma DIV com um texto dentro
    const img = document.querySelector('#imagem'); // Atribuimos a variavel "img" o elemento HTML com o ID "imagem" que no caso, é um <IMG> que tem como SRC inicial "fotomanha.png"
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const data = new Date(); // Atribuimos a variavel "data" o objeto new Date(), e assim podemos manipular essa variavel para obter dia, mes, ano, hora, minutos segundos...
    const hora = data.getHours(); // Atribuimos a variavel "hora" o horario atual, com o comando getHours(), que usamos junto da variavel data, que tem o objeto new Date()
    msg.innerHTML = `Agora são exatamente ${hora} horas.` // Alteramos o que tem dentro do HTML(innerHTML) com id"msg" para a mensagem contida nessa linha

    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png';
        document.body.style.backgroundColor = '#FDDF5E';
        header.style.color = 'black';
        footer.style.color = 'black';
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png';
        document.body.style.backgroundColor = '#795265';
    } else {
        img.src = 'fotonoite.png';
        document.body.style.backgroundColor = '#8F6FA4';
        header.style.color = 'black';
        footer.style.color = 'black';
    }

}
