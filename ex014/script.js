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
        document.body.style.backgroundColor = "rgb(255, 102, 0)"
    }
    else {
        bgi.style.backgroundImage = "url('imagem/noite.jpg')"
        document.body.style.backgroundColor = "rgb(27, 20, 0)"
    }
}