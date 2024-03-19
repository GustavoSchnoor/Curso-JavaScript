// DAR BOM DIA DEPENDENDO DO HORARIO INFORMADO

let agora = new Date() // Atribuo o objeto new Date() a variável agora, e assim, posso usar ela para pegar (.get) as horas, minutos e segundos atuais.
let hora = agora.getHours();
let minutos = agora.getMinutes();
let segundos = agora.getSeconds();
console.log(`Agora são exatamente ${hora}:${minutos}:${segundos} horas.`);

if (hora < 6) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!');
} else if (hora <= 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}