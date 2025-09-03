/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 5
let b = 4
let c = 5

const suma = a + b
const resta = a - b
const Multiplicación = a * b
const divicion = a / b

console.log (divicion)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let variableSum = 2 
let variableRes = 3
let variableMul = 4
let variableDiv = 5

variableSum += suma
variableRes -= resta
variableMul *= Multiplicación
variableDiv /= divicion

console.log (variableDiv)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log (variableSum > suma)
console.log(variableRes < resta)
console.log(Multiplicación > variableMul)
console.log(divicion < variableDiv)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a <= b)
console.log(a == b)
console.log(c != a)
console.log(b == c)
console.log(a === "5")
console.log(c == 6)


// 5. Utiliza el operador lógico and

console.log(a<b && a<c)
console.log(a == c && c == a)
console.log(b < c && b < a)
console.log(b > c && b > a)
console.log(a == c && b < a)

// 6. Utiliza el operador lógico or
console.log(a < b || a < c)
console.log(a > b || c > a)
console.log(a > c || a == c)

// 7. Combina ambos operadores lógicos

console.log(b < a && a == c || a > b)
console.log(b > a && a == c || a < b)

// 8. Añade alguna negación

console.log(!(a == c && a > b))

// 9. Utiliza el operador ternario



// 10. Combina operadores aritméticos, de comparáción y lógicas 

let x = 8
let y = 9

const suma2 = x + y

console.log(suma2 == x || y != x)
