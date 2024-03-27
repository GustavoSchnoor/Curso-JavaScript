function soma(n1, n2) { // Declaramos uma função soma, que vai receber 2 parametros, e RETORNAR a soma deles.
    return n1 + n2;
}

console.log(soma(1, 3)); // Chamamos a função SOMA( , ) com os 2 valores a serem somados. Caso só passemos 1 valor, vai retornar NaN. Para corrigir isso, basta colocar na função soma(n1=0, n2=0) o valor atribuido 0. Sendo assim, se não for passado nenhum valor, ou somente 1, será retornado um valor numérico ainda, e considerado 0, caso não passar nada.