// MEXENDO COM INDEXOF

let num = [5, 8, 2, 9, 3];
num.push(1);
num.sort();

console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do meu vetor é ${num[0]}`);

let valor = 8 // Declara um valor numerico a variavel valor
let pos = num.indexOf(valor); // Usamos o comando indexOf() junto da array num, e buscamos pelo valor informado. Assim, a variavel pos, vai ter exatamente a posição onde tem o valor informado no array num

console.log(`O valor ${valor} esta na posição ${pos}`);

console.log(' ');
console.log('----------------------------------------------------------------')
console.log('------------TESTANDO O INDEXOF QUANDO ELE NÃO EXISTE------------')
console.log('----------------------------------------------------------------')
console.log(' ');

let valor2 = 4;
let pos2 = num.indexOf(valor2);

if (pos2 === -1) { // Quando usamos o indexOf e ele não encontra, ele retorna o valor -1, sendo assim, criamos uma condição para SE quando ele não encontrar e retornar o -1, mandamos uma mensagem que não foi encontrado. SENÃO, o procedimento sera realizado normalmente
    console.log('O valor não foi encontrado dentro do array')
} else {
    console.log(`O valor ${valor2} esta na posição ${pos2}`);
}
