const cadastrar = document.querySelector('#cadastrar')
cadastrar.addEventListener('click', cadastro)

let numero = document.querySelector('#idade')
let res = document.querySelector('#res')
let pessoa = document.querySelector('#pessoa')

let todas_idades = []
let posicoes = []
let media_idades = 0
let maior_idade = 0
let soma_idades = 0
let valor = 0
let decimal = 0
let contador = 0
let controle = false

function cadastro() {
if (controle) {
    recomeco()
    return
}

if (numero.value == '') {
    res.innerHTML = 'Por digite uma idade!'
    numero.focus()
} else {
    valor = Number(numero.value)
    decimal = Math.floor(valor)

    if (valor != decimal) {
        res.innerHTML = 'Por favor digite uma idade válida!'
        numero.focus()
    } else {
        numero.value = ''
        numero.focus()

        contador++
        pessoa.innerHTML = `Digite a ${contador + 1}ª idade`

        res.innerHTML = 'Aguardando execução...'

        todas_idades.push(valor)
        soma_idades += valor

        if (valor > maior_idade) {
            maior_idade = valor
        }

        if (contador === 8) {
            controle = true
            cadastrar.innerHTML = 'Começar novamente'
            pessoa.innerHTML = 'Limite de idade atingido'

            media_idades = soma_idades / contador

            res.innerHTML = `Média das idades cadastradas: ${media_idades.toFixed(1)} <br>
            Maior idade digitada: ${maior_idade} <br>
            Posições de pessoas com mais de 25 anos de idade: `

            for (let c = 0; c < todas_idades.length; c++) {
                if (todas_idades[c] > 25) {
                    posicoes.push(c)
                }
            }

            res.innerHTML += `${posicoes.join(', ')}`
            posicoes = []

            res.innerHTML += `<br> Posições que foram digitados a maior idade: `

            for (let i = 0; i < todas_idades.length; i++) {
                if (todas_idades[i] === maior_idade) {
                    posicoes.push(i)
                }
            }
            res.innerHTML += `${posicoes.join(', ')}`
        }
    }
}
}

function recomeco() {
    todas_idades = []
    posicoes = []
    media_idades = 0
    maior_idade = 0
    soma_idades = 0
    valor = 0
    decimal = 0
    contador = 0
    controle = false
    
    numero.value = ''
    res.innerHTML = 'Aguardando execução...'
    cadastrar.innerHTML = 'Cadastrar'
    pessoa.innerHTML = 'Digite a 1ª idade'
    return
}