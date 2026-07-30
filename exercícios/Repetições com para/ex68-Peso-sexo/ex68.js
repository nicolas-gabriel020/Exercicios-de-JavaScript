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

function cadastrar() {
    if (peso.value == '') {
        res.innerHTML = 'Por favor insira seu peso!'

        peso.focus()
    } else {
        let peso_formatado = Number(peso.value)

        if (peso_formatado <= 0) {
            res.innerHTML = 'Por favor coloque um valor válido!'
        } else {
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
        }
    }
}