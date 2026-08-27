const executar = document.querySelector('#executar')
executar.addEventListener('click', gerador)

let res = document.querySelector('#res')
let num = document.querySelector('#num')
let frase = document.querySelector('#frase')
let repeticao = document.querySelector('#repeticao')

function gerador() {
    if (num.value == '' || frase.value == '' || repeticao.value == '') {
        res.innerHTML = 'Por favor digite as informações'
        frase.focus()
    } else {
        if (num.value < 1 || num.value > 3) {
            res.innerHTML = 'Por favor digite um número válido de acordo com a borda'
            num.focus()
        } else {
            let numero = Number(num.value)
            let texto = frase.value
            let tot_repeticao = Number(repeticao.value)

            num.value = ''
            frase.value = ''
            repeticao.value = ''

            frase.focus()

            gerador_atualizado(texto, numero, tot_repeticao)
        }
    } 
}

function gerador_atualizado(mensagem, borda, vezes) {
    if (borda === 1) {
        res.innerHTML = '+-------=======------+ <br>'

        for (let c = 0; c < vezes; c++) {
            res.innerHTML += `${mensagem} <br>`
        }

        res.innerHTML += '+-------=======------+'
    } else if (borda === 2) {
        res.innerHTML = '~~~~~~~~:::::::~~~~~~~ <br>'

        for (let c = 0; c < vezes; c++) {
            res.innerHTML += `${mensagem} <br>`
        }

        res.innerHTML += '~~~~~~~~:::::::~~~~~~~'
    } else {
        res.innerHTML = '<<<<<<<<------->>>>>>> <br>'

        for (let c = 0; c < vezes; c++) {
            res.innerHTML += `${mensagem} <br>`
        }

        res.innerHTML += '<<<<<<<<------->>>>>>>'
    }
}