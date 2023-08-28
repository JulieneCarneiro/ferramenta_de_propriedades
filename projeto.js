import rl from "readline-sync";

function input(string){
    return (rl.question(string)).toUpperCase()
}

let entrada = (input("Digite uma propriedade de css ou digite 'sair' para encerrar: ")).toUpperCase()
const aux = []

while(entrada != "SAIR"){
    aux.push(entrada)
    entrada = input("Digite uma propriedade de css ou digite 'sair' para encerrar: ")
}

aux.sort().forEach((elemento)=>{
    console.log(elemento)
})