// RECURSIVIDADE , Fazendo o FATORIAL de 5 = 120

/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
0! = 1

*/


function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n-1);
    }
}

console.log(fatorial(5));