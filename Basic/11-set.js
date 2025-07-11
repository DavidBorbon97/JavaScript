//set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicializacion

mySet = new Set(["primero", "segundo", "tercero", 37, "quinto"])

console.log(mySet)

//  Métodos comunes

// add y delete 

mySet.add("Cuarto")
console.log(mySet)

mySet.delete("quinto")
console.log(mySet)

//has 

console.log(mySet.has("Cuarto"))
console.log(mySet.has("quinto"))

// size

console.log(mySet.size)

// Convertir un set en array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array en un set

mySet = new Set(myArray)
console.log(mySet)

//set no admite duplicados

mySet.add("Cuarto")
console.log(mySet)
