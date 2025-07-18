let myArray = [1, 2, 3, 4]

let person = {
    name: "Darth",
    age: 37,
    alias: "Darth-Vader"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Destucturación

// Sintaxis arays

let [myValue0, myValue1,myValue2, myValue3] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)

//Sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0,myValue7 = 0 , myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos array
let [myValue10, , ,myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// Sintaxis objets

let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objets con valores predeterminados

let { name2, age2, alias2, email = "email@.com"} = person
console.log(name2)
console.log(age2)
console.log(alias2)
console.log(email)

// Sintaxis objects con nuevos nombres de variables

let {name: name3, age: age3, alias: alias3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objetos animados

let person3 = {
    name: "Darth",
    age: 29,
    alias: "Darth_Vader",
    walk: function(){
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exo: 15,
        work: function (){
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

let {name: name4, job:{name: jobName }} = person3
console.log(name4)
console.log(jobName)


// Propagación (...)

let myArray2 = [...myArray, 5, 6]

console.log(myArray2)


// Copia de arrays

let myArray3 = [...myArray]

console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis objects

let person4 = {...person, email: "da@.com"}

console.log(person4)

// Copia de objets

let person5 = {...person}

console.log(person5)



