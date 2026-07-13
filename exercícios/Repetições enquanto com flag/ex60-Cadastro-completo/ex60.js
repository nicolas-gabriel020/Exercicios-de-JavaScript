const cadastrar = document.querySelector('#cadastrar')
cadastrar.addEventListener('click', cadastrar_pessoas)

let res = document.querySelector('#res')
let nome = document.querySelector('#nome')
let numero = document.querySelector('#idade')
let sexo = document.getElementsByName('sexo')

let pessoa_mais_velha = 'Sem cadastros'
let mulher_mais_jovem = 'Sem cadastros'
let media_geral = 0
let homens_mais_30 = 0
let mulheres_menos_18 = 0

let total_pessoas = 0
let maior_idade = 0
let soma_idades = 0
let idade = 0
let idade_mulher = 0
let nome_pessoa = ''
let primeira_dama = 0
let controle = false

function cadastrar_pessoas() {
    if (controle) {
        zerar_dados()
        return
    }
    res.innerHTML = 'Aguardando finalização do cadastro'
    cadastrar.innerHTML = 'Cadastrar'

    if (nome.value == '' || numero.value == '') {
        res.innerHTML = 'Por favor digite todos os dados necessários!'

        nome.focus()
    } else {
        idade = Number(numero.value)

        if (idade <= 0) {
            res.innerHTML = 'Por favor digite uma idade válida!'

            numero.focus()
        } else {
            nome_pessoa = nome.value

            nome.value = ''
            numero.value = ''
            nome.focus()

            total_pessoas++
            soma_idades += idade

            if (total_pessoas == 1) {
                maior_idade = idade
                pessoa_mais_velha = nome_pessoa
            } else {
                if (idade > maior_idade) {
                    maior_idade = idade
                    pessoa_mais_velha = nome_pessoa
                }
            }

            if (sexo[0].checked) {
                if (idade > 30) {
                    homens_mais_30++
                }
            } else {
                primeira_dama++

                if (primeira_dama == 1) {
                    idade_mulher = idade
                    mulher_mais_jovem = nome_pessoa
                } else {
                    if (idade < idade_mulher) {
                        idade_mulher = idade
                        mulher_mais_jovem = nome_pessoa
                    }
                }

                if (idade < 18) {
                    mulheres_menos_18++
                }
            }

            media_geral = soma_idades / total_pessoas
        }
    }
}

const finalizar = document.querySelector('#finalizar')
finalizar.addEventListener('click', finalizar_cadastro)

function finalizar_cadastro() {
    controle = true
    cadastrar.innerHTML = 'Cadastrar novamente'

    res.innerHTML = `Nome da pessoa mais velha cadastrada: ${pessoa_mais_velha} <br>
    Nome da mulher mais jovem cadastrada: ${mulher_mais_jovem} <br><br>
    Média de idade do grupo: ${media_geral.toFixed(1)} <br><br>
    Total de homens com mais de 30 anos: ${homens_mais_30} <br>
    Total de mulheres com menos de 18 anos: ${mulheres_menos_18}`
}

function zerar_dados() {
    pessoa_mais_velha = 'Sem cadastros'
    mulher_mais_jovem = 'Sem cadastros'
    media_geral = 0
    homens_mais_30 = 0
    mulheres_menos_18 = 0

    total_pessoas = 0
    maior_idade = 0
    soma_idades = 0
    idade = 0
    idade_mulher = 0
    nome_pessoa = ''
    primeira_dama = 0
    controle = false
}