import rl from "readline-sync";

function input(string){
    return (rl.question(string)).toUpperCase()
}

let entrada = (input("Digite uma propriedade de css: ")).toUpperCase()
const aux = []

while(entrada != "SAIR"){
    aux.push(entrada)
    entrada = input("Digite uma propriedade de css: ")
}

aux.sort().forEach((elemento)=>{
    console.log(elemento)
})