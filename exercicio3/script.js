//Crie a const para a frase aqui

//a)
const mensagem = (`Jorge tem uma casa verde e com portão azul,
com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"`)

//b)
const mensagemTrocaCor = mensagem.replaceAll("verde", "rosa").replaceAll("azul", "laranja")

//c)
const incluiVerde = mensagemTrocaCor.includes("verde")
const incluiLaranja = mensagemTrocaCor.includes("laranja")

//extra

const fraseMaiuscula = "mas não deixe o gato sair".toUpperCase()
const mensagemMaiuscula = (`Jorge tem uma casa verde e com portão azul,
com os dizeres: \"BOAS VINDAS, ${fraseMaiuscula}\"`)


console.log(mensagem)
console.log(mensagemTrocaCor)
console.log(`A mensagem inclui verde? ${incluiVerde}`)
console.log(`A mensagem inclui laranja? ${incluiLaranja}`)
console.log(mensagemMaiuscula)