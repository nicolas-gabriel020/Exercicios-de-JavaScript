const botao = document.querySelector('#botao')
botao.addEventListener('click', somatorio)

function somatorio() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let c = 6
    let soma = 0
    let total = 0

    res.innerHTML += 'Contagem: <br>'
    while (c <= 100) {
        res.innerHTML += `${c} `

        total ++

        soma += c

        c += 2
    }

    res.innerHTML += `<br><br> Resultado da soma: ${soma} <br>
    Total de números somados: ${total}`
}