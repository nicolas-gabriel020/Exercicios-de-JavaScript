const botao = document.querySelector('#botao')
botao.addEventListener('click', contagem_personalizada)

function contagem_personalizada() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let valor = document.querySelector('#valor')

    if (valor.value == '') {
        res.innerHTML = 'Por favor preencha todos os campos!'
    } else {
        let numero = Number(valor.value)
        let decimal = Math.floor(numero)

        if (numero != decimal || numero < 0) {
            res.innerHTML = 'por favor preencha com valores válidos!'
        } else {

            res.innerHTML += `Valor digitado: ${numero} <br><br>
            Contagem: <br>`

            let c = 1
            let soma = 0
            let par = 0
            let impar = 0

            while (c <= numero) {
                res.innerHTML += `${c} `

                soma += c

                if (c % 2 == 0) {
                    par++
                } else {
                    impar++
                }

                c++
            }

            res.innerHTML += `Acabou! <br><br>
            Foram exibidos ${numero} números! <br>
            Soma de todos os números: ${soma} <br>
            Total de números pares: ${par} <br>
            Total de números ímpares: ${impar}`
        }
    }
}