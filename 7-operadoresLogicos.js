console.log("operadores lógicos encadeados \n");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio DE Janeiro`,
);


const idadeComprador = 10;
const estaAcompanhada =true;
const temPassagemComprada= false;


console.log("Possíveis Listas de Destinos ");
console.log(listaDeDestinos);
console.log("você está:")

if(idadeComprador >=18 || estaAcompanhada){
    console.log("de Parabéns, vá ao embarque");
    
    
}
else{
    
     console.log("Precisando de um acompanhante, não é maior de idade e não posso vender")
    
}

console.log("Embarque: \n\n")
if(idadeComprador>=18 || estaAcompanhada && temPassagemComprada){
    console.log("você pode embarcar, Boa Viagem!");
    listaDeDestinos.splice(2,1);
}
else{
    console.log("você não pode embarcar.")
}

console.log(listaDeDestinos);
