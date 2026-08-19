const adicionar = document.querySelector('#adicionar')
adicionar.addEventListener('click', nota_turma)

let numero = document.querySelector('#nota')
let res = document.querySelector('#res')
let aluno = document.querySelector('#aluno')

let todas_notas = []
let posicoes = []
let media_notas = 0
let acima_media = 0
let maior_nota = 0
let soma_notas = 0
let contador = 0
let controle = false

function nota_turma() {
if (controle) {
    recomeco()
    return
}

if (numero.value == '') {
    res.innerHTML = 'Por favor digite uma nota!'
    numero.focus()
} else {
    let valor = Number(numero.value)

    if (valor < 0 || valor > 10) {
        res.innerHTML = 'Por favor digite uma nota válida!'
        numero.focus()
    } else {
        numero.value = ''
        numero.focus()

        contador++
        aluno.innerHTML = `Digite a ${contador + 1}ª nota`

        res.innerHTML = 'Aguardando execução...'

        todas_notas.push(valor)
        soma_notas += valor

        if (valor > maior_nota) {
            maior_nota = valor
        }

        if (contador === 10) {
            controle = true
            adicionar.innerHTML = 'Começar novamente'
            aluno.innerHTML = 'Limite de notas atingido'

            media_notas = soma_notas / contador

            res.innerHTML = `Média das notas cadastradas: ${media_notas.toFixed(1)} <br>
            Maior nota digitada: ${maior_nota} <br>
            Total de alunos acima da média: `

            for (let c = 0; c < todas_notas.length; c++) {
                if (todas_notas[c] > media_notas) {
                    acima_media++
                }
            }

            res.innerHTML += `${acima_media}`
            res.innerHTML += `<br> Posições das maiores notas: `

            for (let i = 0; i < todas_notas.length; i++) {
                if (todas_notas[i] === maior_nota) {
                    posicoes.push(i)
                }
            }
            res.innerHTML += `${posicoes.join(', ')}`
        }
    }
}
}

function recomeco() {
    todas_notas = []
    posicoes = []
    media_notas = 0
    acima_media = 0
    maior_nota = 0
    soma_notas = 0
    contador = 0
    controle = false
    
    numero.value = ''
    res.innerHTML = 'Aguardando execução...'
    adicionar.innerHTML = 'Adicionar nota'
    aluno.innerHTML = 'Digite a 1ª nota'
    return
}