function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert(`Verifique os dados e tente novamente!`)
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src', 'imagem/bebe-m.png')
            }
            else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagem/jovem-m.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagem/adulto-m.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'imagem/idoso-m.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src', 'imagem/bebe-f.png')
            }
            else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagem/jovem-f.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagem/adulto-f.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'imagem/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}