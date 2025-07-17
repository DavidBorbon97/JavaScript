// Objects

//sintaxis

let person ={
    name: "Darth",
    age: 28,
    alias: "DarthVader"
}

//Acceso a propiedades

// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["name"])

// Modificación de propiedades

person.name = "Dexter"
console.log(person.name)

console.log(typeof person.age)
person.age = "28"
console.log(person.age)
console.log(typeof person.age)


// Eliminación de propiedades

delete person.age

console.log(person)

// Nueva propiedad

person.email = "Darth...."
person["age"] = 28
console.log(person)

// Métodod (funciones)

let person2 = {
    name: "Darth",
    age: 28,
    alias: "DarthVader",
    walk: function (){
        console.log("La persona camina.")
    }
}
person2.walk()

// Anidación de objetos

let person3 = {
    name: "Darth",
    age: 28,
    alias: "DarthVader",
    walk: function (){
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 2,
        work: function (){
            console.log("La persona trabaja.")
        }
    }
}

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objects

let person4 ={
    name: "Darth",
    age: 28,
    alias: "DarthVader"
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.age == person4.age)

// Iteración

for (let key in person4){
    console.log(key + ": " + person4[key])
}

// Funciones como objects

function Person(name, age){// Devería ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Dexter", 15)
console.log(person5)

console.log(typeof person5)
console.log(typeof person4)


