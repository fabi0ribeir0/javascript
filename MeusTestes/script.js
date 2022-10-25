


function tabuada(){ 
    var num = document.getElementById('txtn')
    var tab = document.getElementById('sel')      
    if (num.value.length == 0) {
        alert('Digite um numero!')
    }
    else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}
        
// Abaixo mesmo resultado usando while        
/*       
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10 ) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++            
        }
    }
}
*/