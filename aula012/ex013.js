// 7 DIAS DA SEMANA : Domingo [0], Segunda [1], Terça [2], Quarta [3], Quinta [4], Sexta [5] e Sábado [6]

let agora = new Date();
let diaSemana = agora.getDay()

switch (diaSemana) {
    case 0:
        console.log('Hoje é domingo!');
        break;
    case 1:
        console.log('Hoje é Segunda-Feira!');
        break;
    case 2:
        console.log('Hoje é Terça-Feira!');
        break;
    case 3:
        console.log('Hoje é Quarta-Feira!');    
        break;
    case 4:
        console.log('Hoje é Quinta-Feira!');
        break;
    case 5:
        console.log('Hoje é Sexta-Feira!');
        break;
    case 6:
        console.log('Hoje é Sábado!');
        break;        
    default:
        console.log('Dia informado incorretamente!');
        break;
}
