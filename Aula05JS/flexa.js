//exemplo com função
const frase = 'Eu curto java Script'

function separaFrase (frase) {
  return frase.split(' ')
}

console.log(separaFrase(frase)) // [ 'Eu', 'curto', 'java Script' ]
//exemplo com função flexa
const frase2 = 'Eu curto java Script'

const separaFrase2 = (texto) => {
return texto.split(' ')
}

console.log(separaFrase(frase2)) // [ 'Eu', 'curto', 'java Script' ]