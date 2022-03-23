console.log("Trabalhando com listas")

// const salvador= `Salvador`;
// const saoPaulo= `São Paulo`;
// const rioDeJaneiro=`Rio de Janeiro`;

console.log("Destinos possíveis:");
// console.log(salvador , saoPaulo , rioDeJaneiro);

//fazendo do tipo array

const listaDeDestino = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,

);


listaDeDestino.push(`Curitiba`);
console.log(listaDeDestino);


listaDeDestino.splice(2,1);
console.log(listaDeDestino);

console.log(listaDeDestino [1]);