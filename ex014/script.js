function load() {
    var msg = window.document.getElementById('msg')
    var agora = new Date
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        bgi.style.backgroundImage = "url('imagem/manha.jpg')"
    }
    else if (hora < 18) {
        bgi.style.backgroundImage = "url('imagem/tarde.jpg')"
    }
    else {
        bgi.style.backgroundImage = "url('imagem/noite.jpg')"

    }
}


