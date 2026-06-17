const botao = document.querySelector('#botao')
botao.addEventListener('click', contagem)

function contagem() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let c = 10

    while (c >= 3) {
        res.innerHTML += `${c} `
        c--
    }

    res.innerHTML += 'Acabou!'
}