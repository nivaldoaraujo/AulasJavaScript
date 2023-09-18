var meu = ["Lápis", 8 , "Caneta", "Apontador"]
meu[0] = "Caderno"
meu.push("Meun novo item")
var myData = "Manchester,8,Liverpool,Birmingham,Leeds,Carlisle";
var myArray = myData.split(",");
myArray;

let [tomate1, cogumelo2, cenoura] = ['2k', '5k', '20k'];
for(var x of meu)
{
    console.log(x)
}
console.log(myArray)
console.log(meu[2])
console.log(meu.length)
//console.log(tomate)
const [tomate, cogumelo, ...rest] = ['2K', '5K', '20K', '4K', '6K', '9K', '2K'];

console.log(tomate); // '2K'
console.log(cogumelo); // '5K'
console.log(rest); // ["20K", "4K", "6K", "9K", "2K"]
