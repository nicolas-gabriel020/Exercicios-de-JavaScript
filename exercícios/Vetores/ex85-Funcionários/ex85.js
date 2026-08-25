const adicionar = document.querySelector('#adicionar')
adicionar.addEventListener('click', empresa)

let res = document.querySelector('#res')
let pessoa = document.querySelector('#pessoa')
let nome = document.querySelector('#nome')
let numero = document.querySelector('#salario')
let sexo = document.getElementsByName('sexo')

let nome_formatado = []
let salario = []
let genero = []
let contador = 0
let tot_mulheres = 0
let controle = false

function empresa() {
    if (controle) {
        resetar()
        return
    }

    if (nome.value == '' || numero.value == '') {
        res.innerHTML = 'Por favor digite todas as informações!'
        numero.focus()
    } else { 
        contador++

        pessoa.innerHTML = `Digite as seguintes informações do ${contador + 1} funcionário`
        res.innerHTML = 'Aguardando finalização...'

        nome_formatado.push(nome.value)
        salario.push(Number(numero.value))

        nome.value = ''
        numero.value = ''
        nome.focus()

        if (sexo[0].checked) {
            genero.push('H')
        } else {
            genero.push('M')
        }

        if (contador === 5) {
            controle = true

            adicionar.innerHTML = 'Adicionar novamente'
            pessoa.innerHTML = 'Número de funcionários atingido'
            res.innerHTML = 'Mulheres que ganham mais que R$ 5.000 <br><br>'

            for (let c = 0; c < genero.length; c++) {
                if (genero[c] === 'M' && salario[c] > 5000) {
                    res.innerHTML += `Funcionária: ${nome_formatado[c]} <br>
                    Salário: ${salario[c].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br><br>`
                    tot_mulheres++
                } 
            }
            if (tot_mulheres === 0) {
                res.innerHTML = 'Não houve nenhuma mulher com salário acima de R$ 5.000.'
            }
        }
    }
}

function resetar() {
    nome.value = ''
    numero.value = ''
    sexo[0].checked = true
    nome_formatado = []
    salario = []
    genero = []
    contador = 0
    tot_mulheres = 0
    controle = false

    pessoa.innerHTML = `Digite as seguintes informações do 1 funcionário`
    res.innerHTML = 'Aguardando finalização...'
    adicionar.innerHTML = 'Adicionar'
    return
}