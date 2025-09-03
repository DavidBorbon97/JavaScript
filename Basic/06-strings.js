//Strings 

let myName = "David"
let greeting = "Hola, " + myName
console.log(greeting)

//Longitud
console.log(greeting.lengt)

//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting.toUpperCase())
console.log(greeting.toLocaleLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Dexter"))
console.log(greeting.indexOf("Andres"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Dexter"))
console.log(greeting.includes("Dark"))
console.log(greeting.slice(0, 8))
console.log(greeting.replace("David", "Vader"))

//Template literals (plantillas literales)

let message = `Hola, 
                este es mi
                proyecto`

console.log(message)

console.log (`Hola, ${myName}! `)
