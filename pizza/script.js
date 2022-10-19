var fatia = document.getElementById('ped').innerHTML
var img = document.getElementById('foto')

function cpz() {
    switch  (Number(fatia)) {
        case 8 :
            fatia.innerHTML = fatia --
            setTimeout(function() {img.src = '7.jpg'}, 600)
            
        case 7 :
            fatia.innerHTML = fatia --
            setTimeout(function() {img.src = '6.jpg'}, 1200)

        case 6 :
            fatia.innerHTML = fatia --
            setTimeout(function() {img.src = '5.jpg'}, 1800)
            
        case 5 :
            fatia.innerHTML = fatia --
            setTimeout(function() {img.src = '4.jpg'}, 2400)
            
        case 4 :
            fatia.innerHTML = fatia --
            setTimeout(function() {img.src = '3.jpg'}, 3000)
            
        case 3 :
            fatia.innerHTML = fatia --
            setTimeout(function() {img.src = '2.jpg'}, 3600)
            
        case 2 :
            fatia.innerHTML = fatia --
            setTimeout(function() {img.src = '1.jpg'}, 4200)
            
        case 1 :
            fatia.innerHTML = fatia --
            setTimeout(function() {img.src = '0.jpg'}, 4800)

    }
}