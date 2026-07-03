let res = document.querySelector('#res')
let dados = document.querySelector('#dados')
let quilo = document.querySelector('#peso')
let metro = document.querySelector('#altura')

const botao = document.querySelector('#botao')
botao.addEventListener('click',cadastro_fisico)

let c = 0
let media_altura = 0
let mais_90 = 0
let menos_50_160 = 0
let mais_190_100 = 0
let soma = 0
let maior_peso = 0
let menor_peso = 0
let maior_altura = 0
let menor_altura = 0
let diferenca_peso = 0
let diferenca_altura = 0

function cadastro_fisico() {
    res.innerHTML = ''

    if (quilo.value == '' || metro.value == '') {
        res.innerHTML = 'Por favor preencha com todos os dados!'

        quilo.focus()
    } else {
        let peso = Number(quilo.value)
        let altura = Number(metro.value)

        if (peso <= 0 || altura <= 0) {
            res.innerHTML = 'Por favor preencha com valores válidos!'

            quilo.focus()
        } else {
            quilo.value = ''
            metro.value = ''
            quilo.focus()

            c++
            soma += altura

            if (c == 1) {
                maior_peso = peso
                menor_peso = peso
                maior_altura = altura
                menor_altura = altura
            } else {
                if (peso > maior_peso) {
                    maior_peso = peso
                }

                if (peso < menor_peso) {
                    menor_peso = peso
                }

                if (altura > maior_altura) {
                    maior_altura = altura
                }

                if (altura < menor_altura) {
                    menor_altura = altura
                }
            }

            if (peso > 90) {
                mais_90++
            }

            if (peso < 50 && altura < 1.60) {
                menos_50_160++
            }

            if (altura > 1.90 && peso > 100) {
                mais_190_100++
            }

            if (c < 7) {
                dados.innerHTML = `Digite os dados da ${c + 1}ª pessoa`
            } else if (c == 7) {
                media_altura = soma / c
                diferenca_peso = maior_peso - menor_peso
                diferenca_altura = maior_altura - menor_altura

                res.innerHTML = `Média de altura do grupo: ${media_altura.toFixed(1)}M <br><br>
                Total de pessoas que pesam mais de 90KG: ${mais_90} <br><br>
                Total de pessoas pesam menos de 50KG e tem menos de 1,60M: ${menos_50_160} <br><br>
                Total de pessoas que medem mais de 1,90M e pesam mais de 100KG: ${mais_190_100} <br><br>
                Maior peso digitado: ${maior_peso} <br>
                Menor peso digitado: ${menor_peso} <br><br>
                Maior altura digitada: ${maior_altura} <br>
                Menor altura digitada: ${menor_altura} <br><br>
                Diferença entre maior e menor peso: ${diferenca_peso} <br>
                Diferença entre maior e menor altura: ${diferenca_altura}`
            } else {
                res.innerHTML = 'Todos os dados já foram analisados!'
            }
        }
    }
}

/* 
        let peso = Number(quilo.value)
        let altura = Number(metro.value)

        quilo.value = ''
        metro.value = ''
        quilo.focus()
        metro.focus()

        c++
        soma += altura

        if (peso > 90) {
            mais_90++
        }

        if (peso < 50 && altura < 1.60) {
            menos_50_160++
        }

        if (altura > 1.90 && peso > 100) {
            mais_190_100++
        }

        if (c < 7) {
            dados.innerHTML = `Digite os dados da ${c + 1}ª pessoa`
        } else if (c == 7) {
            media_altura = soma / c

            res.innerHTML = `Média de altura do grupo: ${media_altura.toFixed(1)}M <br><br>
            Total de pessoas que pesam mais de 90KG: ${mais_90} <br><br>
            Total de pessoas pesam menos de 50KG e tem menos de 1,60M: ${menos_50_160} <br><br>
            Total de pessoas que medem mais de 1,90M e pesam mais de 100KG: ${mais_190_100}`
        } else {
            res.innerHTML = 'Todos os dados já foram analisados!'
        }
*/