const person = {fname:"John", lname:"Doe", age:25};


let text = "";
for (let x in person) 
{  
    text += person[x];
}
console.log(text)


//for of
let lista = [10, 20, 30];

for (const valor of lista) {
  console.log(valor);
}
