const botao = document.querySelector('#botao')
botao.addEventListener('click', contagem)

let res = document.querySelector('#res')
let c = 0

function contagem() {
    res.innerHTML = ''
    c = 0

    do {
        res.innerHTML += `${c} `
        c += 3
    } while (c <= 30);

    res.innerHTML += ' Acabou!'
}