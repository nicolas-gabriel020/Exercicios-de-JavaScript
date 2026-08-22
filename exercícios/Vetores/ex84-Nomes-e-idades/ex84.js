const cadastrar = document.querySelector('#cadastrar')
cadastrar.addEventListener('click', cadastro)

let res = document.querySelector('#res')
let nome = document.querySelector('#nome')
let idade = document.querySelector('#idade')
let pessoa = document.querySelector('#pessoa')

let nome_vetor = []
let idade_vetor = []
let contador = 0
let controle = false

function cadastro() {
    if (controle) {
        resete()
        return
    }

    if (nome.value == '' || idade.value == '') {
        res.innerHTML = 'Por favor preencha com todos os dados!'
        idade.focus()
    } else {
        let idade_formatada = Number(idade.value)
        let decimal = Math.floor(idade_formatada)

        let nome_formatado = nome.value

        if (idade_formatada != decimal || idade_formatada < 1) {
            res.innerHTML = 'Por favor preencha com uma idade válida!'
            idade.focus()
        } else {
            nome.value = ''
            idade.value = ''
            nome.focus()

            contador++

            res.innerHTML = 'Aguardando execução...'
            if (contador === 1) {
                pessoa.innerHTML = `${contador} pessoa cadastrada`
            } else {
                pessoa.innerHTML = `${contador} pessoas cadastradas`
            }

            nome_vetor.push(nome_formatado)
            idade_vetor.push(idade_formatada)

            if (contador === 9) {
                let tot_menor = 0

                controle = true
                cadastrar.innerHTML = 'Cadastrar em outra seção'

                res.innerHTML = 'Lista das pessoas menores de idade: <br><br>'

                for(let c = 0; c <= 8; c++) {
                    if (idade_vetor[c] < 18) {
                        res.innerHTML += `${nome_vetor[c]}: ${idade_vetor[c]} anos de idade. <br>`
                        tot_menor++
                    }
                }

                if (tot_menor === 0) {
                    res.innerHTML += 'Nenhuma pessoa menor de idade foi cadastrada.'
                }
            }
        }
    }
}

function resete() {
    nome_vetor = []
    idade_vetor = []
    contador = 0
    controle = false

    cadastrar.innerHTML = 'Cadastrar'
    res.innerHTML = 'Aguardando execução...'
    pessoa.innerHTML = '0 pessoas cadastradas'

    return
}