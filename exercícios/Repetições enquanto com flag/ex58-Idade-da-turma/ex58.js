const botao = document.querySelector('#botao')
botao.addEventListener('click', cadastro_alunos)

let res = document.querySelector('#res')
let numero = document.querySelector('#idade')
let aluno = document.querySelector('#aluno')

let total_alunos = 0
let soma_idade = 0
let media_idade = 0
let maior_idade = 0
let menor_idade = 0
let mais_18 = 0
let mair_10 = 0
let diferenca = 0
let controle = false

function dados_zerados () {
    numero.value = ''
    numero.focus()

    total_alunos = 0
    soma_idade = 0
    media_idade = 0
    maior_idade = 0
    menor_idade = 0
    mais_18 = 0
    mair_10 = 0
    diferenca = 0
    controle = false

    aluno.innerHTML = `digite a idade do ${total_alunos + 1}º aluno`
    botao.innerHTML = 'Adicionar cadastro'

    res.innerHTML = `Aguardando execução... <br>
    Obs: ao digitar 999 o programa se encerra`
}

function cadastro_alunos() {
    if (controle) {
        dados_zerados()
        return
    }

    res.innerHTML = `Aguardadando execução... <br>
    Obs: ao digitar 999 o programa se encerra`

    if (numero.value == '') {
        res.innerHTML = 'Por favor digite uma idade!'

        numero.focus()
    } else {
        let idade = Number(numero.value)
        let decimal = Math.floor(idade)

        if (idade != decimal) {
            res.innerHTML = 'Por favor digite uma idade válida!'

            numero.focus()
        } else {
            numero.value = ''
            numero.focus()

            if (idade != 999) {
                total_alunos++
                soma_idade += idade

                if (total_alunos == 1) {
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

                if (idade > 18) {
                    mais_18++
                }

                if (idade > 10) {
                    mair_10++
                }
                aluno.innerHTML = `digite a idade do ${total_alunos + 1}º aluno`
            } else {
                controle = true
                aluno.innerHTML = 'Finalizado'
                botao.innerHTML = 'Cadastrar novamente'

                if (total_alunos == 0) {
                    media_idade = 0
                } else {
                    media_idade = soma_idade / total_alunos
                }

                diferenca = maior_idade - menor_idade

                res.innerHTML = `Total de alunos na turma: ${total_alunos} <br>
                Média de idades dos alunos: ${media_idade.toFixed(1)} <br><br>
                Maior idade: ${maior_idade} <br>
                Menor idade: ${menor_idade} <br>
                Diferença entre maior e menor idade: ${diferenca} <br><br>
                Total de alunos maiores de 18 anos: ${mais_18} <br>
                Total de alunos maiores de 10 anos: ${mair_10}`
            }
        }
    }
}