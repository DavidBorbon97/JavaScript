// Loops o bucles

//for

for (let i = 0; i < 5; i++){
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0 
while (i < 5){
    console.log(`Hola ${i}`)
    i++
}

//do while

i = 6
do {
    console.log(`Hola ${i}`)
    i++
}while (i < 5)

// for of 

myArray = [1, 2, 3, 4]

mySet = new Set(["Darth","Vader","Dexter",37, true,"davida97....."])

myMap = new Map([["name","Darth"],
                ["email","Darth....."],
                ["Age", 37]
])

for(let valor of myArray){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

for(let valor of myMap){
    console.log(valor)
}

// Buenas prácticas

// break y contunue

for (let i = 0; i < 10; i++){
    if (i == 5){
        continue
    }else if (i == 6){
        break
    }
    console.log(`Hola ${i}`)
}

