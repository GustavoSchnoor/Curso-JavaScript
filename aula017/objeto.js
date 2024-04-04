let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.5,
    engordar(p=0){
        console.log('Engordou');
        this.peso += p;
        return this.peso;
    } 
}

amigo.engordar(1);
console.log(`${amigo.nome} esta pesando exatamente ${amigo.peso}`)