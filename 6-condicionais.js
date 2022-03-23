console.log("Trabalhando com condicionais");


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio DE Janeiro`,
);
// const idadeComprador = 15;
const idadeComprador = 15;
const estaAcompanhada =true;

console.log("Possíveis Listas de Destinos");
console.log(listaDeDestinos);


if(idadeComprador >=18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2,1);
}
else{
    if(estaAcompanhada){
        console.log("Comprador Acompanhado");
        listaDeDestinos.splice(2,1);
    }
    else{
        console.log("Não é maior de idade e não posso vender");
    }
    
}






// Operadores lógicos que posso usar:

// console.log(idadeComprador >18);
// console.log(idadeComprador <18);
// console.log(idadeComprador>=18);
// console.log(idadeComprador<=18);
// console.log(idadeComprador==18);