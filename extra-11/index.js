const original = [5, 7, 13, 17, 26, 34, 118, 245]
let arrNovo = []

for(let numero of original) {
    if(numero > 10 && numero < 20 || numero > 100) {
        arrNovo.push(numero)
    }
}

console.log(arrNovo)