const adicionar = document.querySelector('#executar')
adicionar.addEventListener('click', adicionar_nome)

let res = document.querySelector('#res')
let nome = document.querySelector('#nome')
let pessoas = document.querySelector('#pessoas')

let Todos_nomes = []
let i = 0
let controle = false

function adicionar_nome() {
    if (controle) {
        resetar()
        return
    }

    if (nome.value == '') {
        alert('erro ao adicionar nome!')
    } else {
        i++
        Todos_nomes.push(nome.value)

        nome.value = ''
        nome.focus()

        if (i === 7) {
            i = 0
            res.innerHTML = 'Lista dos nomes na ordem inversa: <br>'

            for (let c = Todos_nomes.length - 1; c >= 0; c--) {
                i++
                res.innerHTML += `${i}º: ${Todos_nomes[c].toLowerCase()} <br>`
            }

            adicionar.innerHTML = 'Adicionar novamente'
            controle = true
        } else {
            pessoas.innerHTML = `Digite o ${i + 1}º nome`
        }
    }
}

function resetar() {
    controle = false
    Todos_nomes = []
    i = 0

    nome.value = ''
    nome.focus()

    pessoas.innerHTML = 'Digite o 1º nome'
    res.innerHTML = 'Aguardando finalização...'
}