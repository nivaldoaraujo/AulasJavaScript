var arrayMeu = ['a', 'b', 'c', 'd', 'i', 't', 'f'];
for(let i = 0 ; i < arrayMeu.length ; i++)
{
    var x = arrayMeu[i]
    console.log(x)
}
console.log("--------------------")
for(var val in arrayMeu)
{
    //console.log("valor", val)
    console.log(" ", arrayMeu[val])
}
console.log("--------------------")
for(var val of arrayMeu)
{
    console.log("o valor é: ", val)
}