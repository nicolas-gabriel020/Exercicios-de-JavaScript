const botao = document.querySelector('#botao')
botao.addEventListener('click', contagem)

function contagem() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let c = 6

    while (c <= 11) {
        res.innerHTML += `${c} `
        c++
    }

    res.innerHTML += 'Acabou!'
}