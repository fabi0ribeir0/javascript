function cont() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.getElementById('saida')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        alert('Faltam dados')        
    }
    else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0) {
            alert('Passo invalído! Considerando PASSO 1')
            p = 1
        }
        if (i < f) { // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        else{ // Contagem regreciva
            for (let c = i; c >= f; c-=p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }         
        res.innerHTML += `\u{1F3C1}`
    }
}
