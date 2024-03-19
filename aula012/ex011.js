// Programa para ver se vota ou não no Brasil

let idade = 60

console.log(`Sua idade informada foi ${idade} anos.`)
if (idade < 16) {
    console.log('Você não pode votar!');
} else if (idade < 18) {
    console.log('Você tem direito ao voto opicional!');
} else if (idade < 60) {
    console.log('Você tem o voto obrigatório!');
} else {
    console.log('Voce tem 60 ou mais e seu voto é opicional!');
}

