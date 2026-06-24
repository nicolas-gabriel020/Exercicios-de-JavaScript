const botao = document.querySelector('#botao')
botao.addEventListener ('click', calcular)

function calcular() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let c = 500
    let soma = 0
    let total = 0
    let maior = c
    let menor = c

    res.innerHTML += 'Contagem: <br>'

    while (c >= 0) {
        if (c == 0) {
            res.innerHTML += `${c} `
        } else {
             res.innerHTML += `${c} + `
        }

        if (c > maior) {
            maior = c
        } 

        if (c < menor) {
            menor = c
        }

        total ++
        soma += c
        c -= 50
    }

    res.innerHTML += `<br><br> Soma total: ${soma} <br>
    Total de números somados: ${total} <br><br>
    Maior número somado: ${maior} <br>
    Menor número somado: ${menor}`
}