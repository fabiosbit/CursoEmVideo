function carregar() {

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12)
{
    //manhã
    img.src = 'manha.png'
    document.body.style.background = 'rgb(241, 237, 232)'
}
else if (hora >= 12 && hora <= 18)
{
    //tarde
    img.src = 'tarde.png'
    document.body.style.background = 'rgb(131, 63, 18)'

}
else
{
    img.src = 'noite.png'
    document.body.style.background = 'rgb(9, 23, 57)'
    //noite
}

}
