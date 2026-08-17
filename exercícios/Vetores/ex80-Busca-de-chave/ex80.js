const executar = document.querySelector('#executar')
executar.addEventListener('click', executar_chave)

let valor = document.querySelector('#valor')
let res = document.querySelector('#res')

let posicoes = []
let total_vezes = 0
let controle = false

function executar_chave() {
    if (controle) {
        resete()
        return
    }

    if (valor.value == '') {
        res.innerHTML = 'Por favor digite um valor!'
        valor.focus()
    } else {
        let chave = Number(valor.value)
        let decimal = Math.floor(chave)

        if (chave != decimal || chave < 1 || chave > 15) {
            res.innerHTML = 'Digite um número válido!'
            valor.focus()
        } else {
            valor.value = ''
            valor.focus()

            controle = true
            executar.innerHTML = 'Tentar novamente'
            res.innerHTML = 'Aguardando execução...'

            for (let c = 0; c < 30; c++) {
                posicoes.push(Math.floor(Math.random() * 15 + 1))

                if (posicoes[c] == chave) {
                    total_vezes++
                }
            }
            
            if (total_vezes === 0) {
                res.innerHTML = `A chave ${chave} não foi encontrada no vetor.`
                res.innerHTML += `<br> Todas as posições: <br>`

                for (let p = 0; p < 30; p++) {
                    res.innerHTML += `Posição ${p}: ${posicoes[p]} <br>`
                }

            } else {
                if (total_vezes === 1) {
                    res.innerHTML = `Sua chave (${chave}) foi sorteada ${total_vezes} vez na posição: `
                } else {
                    res.innerHTML = `Sua chave (${chave}) foi sorteada ${total_vezes} vezes nas respectivas posições: `
                }
                
                for (let i = 0; i < 30; i++) {
                    if (posicoes[i] == chave) {
                        res.innerHTML += `${i}, `
                    }
                }

                res.innerHTML += `<br> Todas as posições: <br>`

                for (let p = 0; p < 30; p++) {
                    res.innerHTML += `Posição ${p}: ${posicoes[p]} <br>`
                }
            }
        }
    }
}

function resete() {
    controle = false
    executar.innerHTML = 'Executar'
    res.innerHTML = 'Aguardando execução...'
    posicoes = []
    total_vezes = 0
    return
}