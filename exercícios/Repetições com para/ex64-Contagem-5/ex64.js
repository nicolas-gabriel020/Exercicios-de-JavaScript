const botao = document.querySelector('#executar')
botao.addEventListener('click', somar)

let res = document.querySelector('#res')

function somar() {
    res.innerHTML = ''

    for(let c = 0; c <= 40; c += 5) {
        res.innerHTML += `${c} `
    }

    res.innerHTML += 'Acabou!'
}