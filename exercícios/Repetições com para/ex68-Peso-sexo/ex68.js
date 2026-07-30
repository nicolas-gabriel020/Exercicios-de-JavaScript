const executar = document.querySelector('#executar')
executar.addEventListener('click', cadastrar)

let genero = document.getElementsByName('genero')
let peso = document.querySelector('#peso')
let res = document.querySelector('#res')

let totmulher = 0
let tothomem = 0
let homem_100kg = 0
let totpeso_mulher = 0
let mediapeso_mulher = 0
let maiorpeso_homem = 0
let menorpeso_mulher = 0
let contador = 0
let controle = false

function cadastrar() {
    if (controle) {
        executar.innerHTML = 'Adicionar'

        resetar()

        return
    }

    if (peso.value == '') {
        res.innerHTML = 'Por favor insira seu peso!'

        peso.focus()
    } else {
        let peso_formatado = Number(peso.value)

        if (peso_formatado <= 0) {
            res.innerHTML = 'Por favor coloque um valor válido!'
        } else {
            contador++

            if (genero[0].checked) {
                tothomem++

                if (peso_formatado > 100) {
                    homem_100kg++
                }

                if (tothomem == 1) {
                    maiorpeso_homem = peso_formatado
                } else if (peso_formatado > maiorpeso_homem) {
                    maiorpeso_homem = peso_formatado
                }

            } else {
                totmulher++
                totpeso_mulher += peso_formatado

                if (totmulher == 1) {
                    menorpeso_mulher = peso_formatado
                } else if (peso_formatado < menorpeso_mulher) {
                    menorpeso_mulher = peso_formatado
                }
            }

            if (contador == 1) {
                res.innerHTML = `${contador} pessoa foi cadastrada!`
            } else {
                res.innerHTML = `${contador} pessoas foram cadastradas!`
            }

            if (contador == 8) {
                finalizar()
            }
        }
    }
}

function finalizar() {
    if (totmulher == 0) {
        mediapeso_mulher = 0
    } else {
        mediapeso_mulher = totpeso_mulher / totmulher
    }

    res.innerHTML = `Total de mulheres cadastradas: ${totmulher} <br>
    Menor peso entre as mulheres: ${menorpeso_mulher} <br>
    Média de peso das mulheres: ${mediapeso_mulher.toFixed(1)} <br><br>
    Total de homens cadastrados: ${tothomem} <br>
    maior peso entre os homens: ${maiorpeso_homem} <br>
    Total de homens com mais de 100KG: ${homem_100kg}`

    executar.innerHTML = 'Adicionar novamente'
    controle = true
}

function resetar() {
    totmulher = 0
    tothomem = 0
    homem_100kg = 0
    totpeso_mulher = 0
    mediapeso_mulher = 0
    maiorpeso_homem = 0
    menorpeso_mulher = 0
    contador = 0
    peso.value = 0
    controle = false
}