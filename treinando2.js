const nota1= 4;
const nota2= 3;
const nota3= 4;

const média= (nota1+ nota2+ nota3)/3;
console.log(média);

if(média>=7){
    console.log("Aluno Aprovado")
}
else{
    if(média<7 && média>=5){
        console.log("Aluno de Recuperação")
    }else{
        console.log("Aluno Reprovado")
    }
    
}
