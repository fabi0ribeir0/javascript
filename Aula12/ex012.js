var pchora = new Date()
var hora = pchora.getHours()
var min = pchora.getMinutes()

if (hora >= 00 && hora < 12) {
    console.log('Bom dia!')
}
else if (hora < 18) {
    console.log('Boa tarde!')
}
else {
    console.log('Boa noite!')
}
console.log(`Agora são: ${hora}:${min}`)