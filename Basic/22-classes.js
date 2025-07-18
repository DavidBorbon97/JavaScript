// Clases

class Person{

    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis

let person = new Person("Dexter", 15, "Dex")
let person2 = new Person("Dexter", 15, "Dex")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson{

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias"){
            this.name = name
            this.age = age
            this.alias = alias
    }
}

let person3 = new DefaultPerson("dex", 13)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "Dext"

console.log(person3.alias)

// Funciones en clases 

class PersonWithMethod {
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias    
    }

    walk(){
        console.log("La persona camina.")
    }
}

let person4 = new PersonWithMethod("Dexter",13,"Dex")
person4.walk()

// Propiedades privadas

class PrivatePerson{

    #bank

    constructor(name, age, alias,bank){
        this.name = name
        this.age = age
        this.alias = alias 
        this.#bank = bank
    }    

    pay(){
        this.#bank
    }
}

let person5 = new PrivatePerson("Dexter",14,"dex","12345")

//console.log(person5.bank) // No podemos acceder
//person5.bank = "dkfjskfaj"

console.log(person5)

//Getters y Setters

class GetPerson {
    #name
    #age
    #alias
    #bank

    constructor(name, age, alias,bank){
        this.#name = name
        this.#age = age
        this.#alias = alias  
        this.#bank = bank
    }

    get name(){
        return this.#name
    }

    set bank(newBank){
        this.#bank = newBank
    }

}

person6 = new GetPerson("Dexer", 16, "Dex","Banco1234")

console.log(person6)
console.log(person6.name)

person6.bank = "new Banco1234"

// Herencia

class Animal {

    constructor(name){
        this.name = name
    }
    sound(){
        console.log("Emite un sonido genérico")
    }
}

class Dog extends Animal{

    sound(){
        console.log("Guau!")
    }
    run(){
        console.log("El perro corre")
    }
}

class Fish extends Animal {
    constructor(name, size){
        super(name)
        this.size = size
    }

    swim(){
        console.log("El pez nada")
    }
}

let myDog = new Dog("ayudante de santa")
myDog.run()
myDog.sound()

let myFish = new Fish("Suertudo", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos

class MathOperations {

    static sum(a,b){
        return a + b
    }
}

console.log(MathOperations.sum(5,10))
