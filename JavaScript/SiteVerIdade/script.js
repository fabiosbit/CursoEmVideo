function verificar() 
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano)
    { 
        window.alert('Erro, verifica os dados e tente novamente.')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked)
        {
            genero = 'Homem'

            if (idade < 3)
            {
                img.setAttribute('src', 'bebe.jpg')
            }
            else if (idade > 3 && idade <= 12)
            {
                img.setAttribute('src', 'hcrianca.jpg')
            }
            else if (idade > 12 && idade < 18 )
            {
                img.setAttribute('src', 'hjovem.jpg')
            }
            else if (idade >= 18 && idade < 50)
            {
                img.setAttribute('src', 'hadulto.jpg')
            }
            else if (idade >= 50)
            {
                img.setAttribute('src', 'hidoso.jpg')
            }
        }
        else if (fsex[1].checked)
        {
            genero = 'Mulher'

            if (idade < 3)
            {
                img.setAttribute('src', 'bebe.jpg')
            }
            else if (idade > 3 && idade <= 12)
            {
                img.setAttribute('src', 'mcrianca.jpg')
            }
            else if (idade > 12 && idade < 18 )
            {
                img.setAttribute('src', 'mjovem.jpg')
            }
            else if (idade >= 18 && idade < 50)
            {
                img.setAttribute('src', 'madulta.jpg')
            }
            else if (idade >= 50)
            {
                img.setAttribute('src', 'midosa.jpg')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
