const numeros = [23, 5, 100, 56, 9, 13, 37, 10, 1]

console.log(numeros.sort())

function comparaAscendente(a, b)
    {
         return (a-b); 
   } 
console.log(numeros.sort(comparaAscendente))

console.log(numeros.sort((a, b) => (b-a)))