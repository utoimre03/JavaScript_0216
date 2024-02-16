export function ottelOszthato(szam) {
    let ottelOszthato = false;
    if (Number.isInteger(szam)) {
        if (szam <= Number.MAX_SAFE_INTEGER) {
            if (szam % 5 === 0) {
                ottelOszthato = true;
            }
        }
        else {
            ottelOszthato = "Túl nagy szám!"
        }
    } else {
        ottelOszthato = "Nem szám!"

    }
    return ottelOszthato;
}

//tesztelés

// 0 - true
console.log(`szam = 0 -> true`) /* elvárt eredmény */ 
console.log(`szam = 0 -> ${ottelOszthato(0)}`)

// 1 -> false
console.log(`szam = 1 -> true`) /* elvárt eredmény */ 
console.log(`szam = 1 -> ${ottelOszthato(1)}`)

// 2 -> false
console.log(`szam = 2 -> true`) /* elvárt eredmény */ 
console.log(`szam = 2 -> ${ottelOszthato(2)}`)

// 3 -> false
console.log(`szam = 3 -> true`) /* elvárt eredmény */ 
console.log(`szam = 3 -> ${ottelOszthato(3)}`)

// 4 -> false
console.log(`szam = 4 -> true`) /* elvárt eredmény */ 
console.log(`szam = 4 -> ${ottelOszthato(4)}`)

// 5 -> true
console.log(`szam = 5 -> true`) /* elvárt eredmény */ 
console.log(`szam = 5 -> ${ottelOszthato(5)}`)

//55555555555555555555
console.log(`szam = 55555555555555555555 -> true`) /* elvárt eredmény */ 
console.log(`szam = 55555555555555555555 -> ${ottelOszthato(55555555555555555555)}`)

// 55.68 -> false
console.log(`szam = 55.68 -> true`) /* elvárt eredmény */ 
console.log(`szam = 55.68 -> ${ottelOszthato(55.68)}`)

// -25 -> true
console.log(`szam = -25 -> true`) /* elvárt eredmény */ 
console.log(`szam = -25 -> ${ottelOszthato(-25)}`)

// rókarudi -> le se fut | hibás
console.log(`szam = "rókarudi" -> le se fut!`) /* elvárt eredmény */ 
console.log(`szam = "rókarudi" -> ${ottelOszthato("rókarudi")}`)

// "5" -> true
console.log(`szam = "5" -> true`) /* elvárt eredmény */ 
console.log(`szam = "5" -> ${ottelOszthato("5")}`)