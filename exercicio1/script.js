//EXERCICIO 1 

function questionaUsuario (nome, comida1, comida2, comida3){
    const mensagem = `Estas são as comidas favoridas de ${nome}:
    - ${comida1}
    - ${comida2}
    - ${comida3}`



    console.log(mensagem)

}

const nomeDoUsuario = prompt("Qual seu nome?")
const comidaFav1 = prompt("Qual é sua primeira comida favorita?")
const comidaFav2 = prompt("Qual é sua segunda comida favorita?")
const comidaFav3 = prompt("Qual é a sua terceira comida favorita?")

questionaUsuario(nomeDoUsuario, comidaFav1, comidaFav2, comidaFav3)

