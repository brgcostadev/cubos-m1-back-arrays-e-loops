const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let resultado = 0

for(let numero of numeros) {
    if(numero % 2 == 0) {
        resultado = resultado + numero
    }
}

console.log(resultado)
