const executar = document.querySelector('#executar')
executar.addEventListener('click', contar)

let numero = document.querySelector('#valor')
let res = document.querySelector('#res')

function contar() {
    if (numero.value == '') {
        res.innerHTML = 'Por favor digite um número!'

        numero.focus()
    } else {
        let valor = Number(numero.value)

        if (valor < 0) {
            res.innerHTML = 'Por favor digite um número positivo!'

            numero.focus()
        } else {
            res.innerHTML = 'Contagem progressiva: '

            for (let c = 0; c <= valor; c++) {
                res.innerHTML += `${c}, `
            }
            res.innerHTML += 'Fim! <br>'

            res.innerHTML += 'Contagem regressiva: '
            for (let c = valor; c >= 0; c--) {
                res.innerHTML += `${c}, `
            }
            res.innerHTML += 'Fim!'
        }
    }
}

const limpar = document.querySelector('#limpar')
limpar.addEventListener('click', resetar)

function resetar() {
    numero.value = ''
    res.innerHTML = 'Aguardando execução...'

    numero.focus()
}