function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e3c597'
    }
    else if(hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.scr = 'fototarde.png'
        document.body.style.background = '#e1895e'
    }
    else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#14243d'
    }
}