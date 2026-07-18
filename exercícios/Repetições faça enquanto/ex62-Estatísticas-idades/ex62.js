const cadastrar = document.querySelector('#botao')
cadastrar.addEventListener('click', cadastro)

let res = document.querySelector('#res')
let numero = document.querySelector('#idade')

let total_idades = 0
let media_idades = 0
let maiorOuIgual_21 = 0
let soma_idades = 0
let maior_idade = 0
let menor_idade = 0
let controle = false

function cadastro() {
    if (controle) {
        zerar_dados()
        
        controle = false
        cadastrar.innerHTML = 'Cadastrar idade'

        return
    }

    if (numero.value == '') {
        res.innerHTML = 'Por favor digite todos os dados!'

        numero.focus()
    } else {
        let idade = Number(numero.value)
        let decimal = Math.floor(idade)

        if (idade != decimal) {
            res.innerHTML = 'Por favor digite uma idade válida!'

            numero.focus()
        } else {
            res.innerHTML = 'Em execução...'

            numero.value = ''
            numero.focus()

            total_idades++
            soma_idades += idade

            if (total_idades == 1) {
                maior_idade = idade
                menor_idade = idade
            } else {
                if (idade > maior_idade) {
                    maior_idade = idade
                }

                if (idade < menor_idade) {
                    menor_idade = idade
                }
            }

            if (idade >= 21) {
                maiorOuIgual_21++
            }
        }
    }
}

function zerar_dados() {
    total_idades = 0
    media_idades = 0
    maiorOuIgual_21 = 0
    soma_idades = 0
    maior_idade = 0
    menor_idade = 0
}

const finalizar = document.querySelector('#finalizar')
finalizar.addEventListener('click', finalizacao)

function finalizacao() {
    controle = true
    cadastrar.innerHTML = 'Cadastrar novamente'

    media_idades = soma_idades / total_idades

    if (total_idades == 0) {
        media_idades = 0
    }

    res.innerHTML = `Total de idades cadastradas: ${total_idades} <br>
    Média das idades: ${media_idades.toFixed(1)} <br><br>
    Maior idade cadastrada: ${maior_idade} <br>
    Menor idade cadastrada: ${menor_idade} <br><br>
    Total de pessoas com 21 anos ou mais: ${maiorOuIgual_21}`
}