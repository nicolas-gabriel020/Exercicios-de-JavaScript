let botao = document.querySelector('#botao')
botao.addEventListener('click', calculo)

function calculo() {
    let res = document.querySelector('#res')
    let ano = document.querySelector('#ano')

    res.innerHTML = ''
    res.style.background = ''

    if (ano.value == '') {
        alert('Por favor preencha todos os campos!')
    } else {
        let ano_formatado = Number(ano.value)
        let ano_atual = new Date().getFullYear()
        
        if (ano_formatado > ano_atual) {
            alert('Por favor preencha com um ano válido!')
        } else {
            let idade = ano_atual - ano_formatado

            if (idade < 18) {
                res.innerHTML = `Ano atual: ${ano_atual} <br>
                Idade: ${idade} <br>
                Faltam ${18 - idade} anos para o alistamento!`
                res.style.background = 'yellow'
            } else if (idade > 18) {
                res.innerHTML = `Ano atual: ${ano_atual} <br>
                Idade: ${idade} <br>
                Já se passaram ${idade - 18} anos do seu alistamento militar!`
                res.style.background = 'red'
            } else {
                res.innerHTML = `Ano atual: ${ano_atual} <br>
                Idade: ${idade} <br>
                Já está na hora de se alistar!`
                res.style.background = 'green'
            }
        }

    }
}