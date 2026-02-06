function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 6 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#f49a3d'
    }else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#fe5c26'
    }else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#010e3c'
    }

}
    

