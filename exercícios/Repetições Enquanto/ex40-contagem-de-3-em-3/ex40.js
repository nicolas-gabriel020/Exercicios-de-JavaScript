const botao = document.querySelector('#botao')
botao.addEventListener('click', contagem)

function contagem() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let c = 0

    while (c <= 18) {
        res.innerHTML += `${c} `
        c += 3
    }
    res.innerHTML += 'Acabou!'
}