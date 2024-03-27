function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!';
    } else {
        return 'Impar!';
    }
}

let resultado = parimpar(6);
console.log(`O numero informado é ${resultado}`);