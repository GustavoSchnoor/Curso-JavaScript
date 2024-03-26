/*
array.push()
array.pop()
array.length
array.indexOf('') ou array.find()
array.sort()
*/

let num = [5, 3, 2, 7, 9];
num.push(1); // Vai adicionar um elemento numérico "1" ao final do nosso array
num.sort(); // Vai ordenar o nosso array para ordem crescente

console.log(num);
console.log(`Nosso tamanho do nosso vetor é ${num.length}`);
console.log(`O primeiro numero do nosso array é ${num[0]}`);

console.log('----------------------------------------------------------------');

// Criamos um loop FOR que começa da posição 0, e ENQUANTO a pos for menor que a quantidade total de elementos da variavel num, nós vamos repetir o que esta dentro do bloco da estrutura de repetição e no fim, SOMAR 1 a variavel criada pos (pos++)
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o numero da array correspondente ${num[pos]}`);
}