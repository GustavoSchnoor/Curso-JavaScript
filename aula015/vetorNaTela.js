/* ALGUNS COMANDOS PARA LEMBRAR
array.push()
array.pop()
array.length
array.indexOf('') ou array.find()
array.sort()
*/

/* PODEMOS FAZER ASSIM TAMBEM
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos}º da array corresponde ao numero ${valores[pos]}`);
}
*/


let valores = [8, 1, 7, 4, 2, 9];

console.log(valores); // Mostra os valores da array completo, inclusive os "[]"
console.log('--------------------------------');

/* for(variavel in objeto/array) {
    Código a ser executado
} 
*/

// PARA cada posição DENTRO de valores -> Mostramos a mensagem feita em códigos dentro do bloco {}
for (let pos in valores) {
    console.log(`A posição ${pos}º da array tem o elemento com numero ${valores[pos]}`)
}
