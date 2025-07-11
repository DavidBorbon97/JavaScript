//array

// Declaración

let myArray =[]
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//Inicializacion

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4]
myArray2 = new Array(1,2,3,4)

console.log(myArray)
console.log(myArray2)

myArray = ["primero","segundo","tercero",37,true]
myArray2= new Array("primero","segundo","tercero",37,true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "primero"
myArray2[1] = "segundo"
myArray2[2] = "tercero"

console.log(myArray2)

myArray = []
myArray[2] = "primero"
myArray[1] = "segundo"
myArray[0] = "tercero"

console.log(myArray)

//Métodos comunes 

myArray = []

// push y pop

myArray.push("Primero")
myArray.push("Segundo")
myArray.push("Tercero")
myArray.push("37")

console.log(myArray)

myArray.pop()//Elimina el ultimo elemento.
console.log(myArray.pop())//Elimina el último elemento y lo devuelve 

console.log(myArray)

//shift y unshift
console.log(myArray.shift())
console.log(myArray)

myArray.unshift("primero","tecero")
console.log(myArray)

//length

console.log(myArray.length)

//clear

myArray = []
myArray.length = 0 //alternativa
console.log(myArray)

//Slice

myArray= ["primero","segundo","tercero",37]

let myNewArray = myArray.slice(1,3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1,3)
console.log(myArray)

myArray= ["primero","segundo","tercero",37,true]

myArray.splice(1,2,"Nueva entrada")
console.log(myArray)