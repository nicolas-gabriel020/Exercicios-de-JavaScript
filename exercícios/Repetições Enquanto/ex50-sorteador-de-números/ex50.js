const botao = document.querySelector('#botao')
botao.addEventListener('click', sortear)

function sortear() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let c = 0
    let maior_5 = 0
    let divisivel_3 = 0
    let igual0 = 0
    let maior = 0

    res.innerHTML += 'Contagem: <br>'

    while (c < 20) {
        let aleatorio = Math.random() * 11
        let numero = Math.floor(aleatorio)

        if (numero > 5) {
            maior_5++
        }

        if (numero % 3 == 0) {
            divisivel_3++
        }

        if (numero == 0) {
            igual0++
        }

        if (numero > maior) {
            maior = numero
        }

        res.innerHTML += `${numero} `

        c++
    }

    res.innerHTML += `<br><br> Total de números maiores que Cinco: ${maior_5} <br>
        Total de números divisiveis por três: ${divisivel_3} <br><br>
        Total de números iguais zero: ${igual0} <br>
        Maior número sorteado: ${maior}`
}