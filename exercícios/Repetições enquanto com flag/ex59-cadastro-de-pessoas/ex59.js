const botao = document.querySelector('#botao')
botao.addEventListener('click', cadastro_pessoas)

const resultado = document.querySelector('#resultado')
resultado.addEventListener('click', finalizar)

let res = document.querySelector('#res')
let numero = document.querySelector('#idade')
let sexo = document.getElementsByName('sexo')

let maior_idade = 0
let total_homem = 0
let mulher_jovem = 0
let soma_idade_homem = 0
let media_homem = 0

function cadastro_pessoas() {
    botao.innerHTML = 'Cadastrar'
    res.innerHTML = 'Aguardando finalização do cadastro...'

    if (numero.value == '') {
        res.innerHTML = 'Insira uma idade!'

        numero.focus()
    } else {
        let idade = Number(numero.value)
        let decimal = Math.floor(idade)

        if (idade != decimal || idade <= 0) {
            res.innerHTML = 'Preencha com uma idade válida!'
        } else {
            numero.value = ''
            numero.focus()

            if (idade > maior_idade) {
                maior_idade = idade
            }

            if (sexo[0].checked) {
                total_homem++
                soma_idade_homem += idade
            } else {
                if (mulher_jovem == 0) {
                    mulher_jovem = idade   
                } else if (idade < mulher_jovem) {
                    mulher_jovem = idade
                }
            }

            if (mulher_jovem == 0) {
                mulher_jovem = 'Nenhuma mulher foi cadastrada'
            }

            if (total_homem == 0) {
                media_homem = 0
            } else {
                media_homem = soma_idade_homem / total_homem
            }
        }
    }
}

function finalizar() {
    botao.innerHTML = 'Cadastrar novamente'

    res.innerHTML = `Maior idade: ${maior_idade} <br>
    Total de homens cadastrados: ${total_homem} <br>
    Idade da mulher mais jovem: ${mulher_jovem} <br>
    Media de idade entre os homens: ${media_homem.toFixed(1)}`
}