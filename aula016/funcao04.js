// 5! (Fatorial de 5) = 5 * 4 * 3 * 2 * 1 = 120

function fatorial(n) {
    let fat = 1; // Colocamos uma variavel com o valor inicial de 1 para usar como multiplicação com o numero n recebido dentro do loop FOR

    for (let c = n; c > 1; c--) { // Crianos um LOOP FOR com o contador valendo n , e ENQUANTO contador fosse maior que 1 (limite do fatorial), o contador ia receber menos 1 e realizar o bloco de códigos.
        fat *= c; // LOOP 1 => 1 x 5 = 5 | LOOP 2 => 5 * 4 = 20 | LOOP 3 =>  20 * 3 = 60 | LOOP 4 =>  60 * 2 = 120 .
    }

    return fat; // RETORNA a variavel fat que criamos inicialmente, pois é nela que esta guardado o valor do fatorial.
}


console.log(fatorial(5));


// TEMOS UM SEGUNDO JEITO DE FAZER TAMBEM. Ao inves do contador receber o n (parametro passado) o n vai começar em 1, onde vamos começar a multiplicar ele, pelos outros. Ou seja. O contador precisará ser MENOR ou IGUAL ao n(parametro passado)

function fatorial2(n) {
    let fat = 1;

    for (let c = 1; c <= n; c++) {
      fat *= c;
    }
    return fat;

}

console.log(fatorial2(4));