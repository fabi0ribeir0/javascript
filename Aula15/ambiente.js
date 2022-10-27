/*
let num = [5,8,3,2,9]

console.log(`O vetor num possui ${num.length} elementos e são eles: ${num}, em ordem crescente são: ${num.sort()}`)
*/

num = [5,6,15,9,8,7,4,1,2,3,7]

// 11 é o numero de elementos dentro do vetor
// for (pos = 0 ; pos < 11; pos++ ) { 
//     console.log(num[pos])
//}

// para melhorar o codigo no lugar de 11 posso usar .length

/*
Neste exemplo a repetição serve para qualquer numero de elementos dentro do vetor


for (pos = 0 ; pos < num.length ; pos++) {
    console.log(num[pos])
}

Ou seja para pos recebe 0 teste se pos é menor que o numero maximo de elementos e pos recebe pos + 1

mostra no console o vetor num na posicão de pos - 0,1,2,3....


para simplificar ainda mais o código podemos usar como o exemplo abaixo

*/

for (pos in num) {
    console.log(` A posição ${pos} recebo ${num[pos]}`)
}
