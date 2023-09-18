var valor = 10

function inc ()
{
    valor = 20 + 30
}
inc()
console.log(valor)

//função com parametro
function nome (meuNome){
    console.log(meuNome)

nome("Nivaldo Araújo")
nome("Chapolin Colorado")

function somar (a, b)
{
    const total = a + b
    console.log(total)
}

somar(10, 80)
somar(32, 78)



function multi (x, y)
{
    return x * y
}

console.log("O resultado é " + multi(3, 5))

//Arrow Functon - Funções de flexa ou seta

var calc = (a, b) => { 
    return a * b
  }

  //colocando na mesma linha não precisa do return
  var calc2 = (x, y) => x * y

  console.log(calc(2, 20))
  console.log(calc2(2, 30))

  

  // exemplo com lista
  const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

//mostrando com map
console.log(materials.map((material) => material));

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]


