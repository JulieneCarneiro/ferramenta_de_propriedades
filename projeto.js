import rl from "readline-sync";

function input(string){
    return rl.question(string)
}

let entrada = input("Digite uma propriedade de css: ")
const aux = []

while(entrada.toLowerCase() != "sair"){
    aux.push(entrada)
    entrada = input("Digite uma propriedade de css: ")
}

aux.sort().forEach((elemento)=>{
    console.log(elemento)
})