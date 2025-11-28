//bloos de codigo reutilizavel
function cumprimentar (nome, idade){
    let texto= "";
    if(idade >=18){
        texto = "você é maior de idade";
    } else {
        texto = "você é menor de idade";
    }
    return "ola," + nome + "voce e de " + texto +"!";

}

//usando a funcao
let mensagem =  cumprimentar("Felipe", 18);
console.log(mensagem);