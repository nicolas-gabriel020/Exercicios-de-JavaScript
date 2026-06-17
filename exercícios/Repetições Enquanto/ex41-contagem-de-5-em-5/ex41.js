const botao = document.querySelector('#botao')
botao.addEventListener('click', contagem)

function contagem() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let c = 100

    while (c >= 0) {
        res.innerHTML += `${c} `
        c -= 5
    }

    res.innerHTML += 'Acabou!'
}