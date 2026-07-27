const botao = document.querySelector('#executar')
botao.addEventListener('click', subtrair)

let res = document.querySelector('#res')

function subtrair() {
    res.innerHTML = ''

    for (let c = 100; c >= 0; c -= 10) {
        res.innerHTML += `${c} `
    }

    res.innerHTML += 'Acabou!'
}