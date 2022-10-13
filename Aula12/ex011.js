var idade = 65
if (idade < 16) {
    console.log('Não Vota')    
} 
else if (idade < 18 || idade >= 65) {
    console.log(`Se vo tem ${idade} anos, o voto é facultitivo`)
} 
else {
    console.log(`Brasileiros com ${idade} anos de idade são obrigados a votar`)
}