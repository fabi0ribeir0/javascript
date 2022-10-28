let num = document.getElementById('txtn')
let lista = document.querySelector('select#seltab')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) { // testa se n é numero e esta entr 1 e 100
 if (Number(n) >= 1 && Number(n) <= 100) {
    return true
 }
 else {
    return false
 }
}

function inLista(n, l) { // procura numero dentro da array l
    if (l.indexOf(Number(n)) != -1) { // Caso encontre retorna true
        return true
    }
    else {
        return false
    }
}

function add() {
    //se isNumero(valor da variavel num que foi digitada no input) e negação inLista (valor da variavel num, vetor valores)
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        alert('Valor Inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}


function fin() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    }
    else {
        let tot = valores.length
        valores.sort()
        let menor = valores[0]
        let maior = valores[tot-1]
        let soma = 0              
        for (let pos in valores) {
            soma += valores[pos]            
        }
        let media = soma/tot

        res.innerHTML = '' // div de id res recebe 'vazio'
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> A soma dos valores informados é ${soma}</p>`
        res.innerHTML += `<p> A média entre os digitados é ${media}</p>`
    }
}
