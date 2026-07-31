const executar = document.querySelector('#executar')
executar.addEventListener('click', progressao)

let termo = document.querySelector('#termo')
let razao = document.querySelector('#razao')
let res = document.querySelector('#res')

let soma = 0
let primeiro_termo = 0
let razao_formatada = 0
let sequencia = 0
let controle = false

function progressao() {
    if (controle) {
        soma = 0
        primeiro_termo = 0
        razao_formatada = 0
        sequencia = 0
        controle = false
    }

    if (termo.value == '' || razao.value == '') {
        res.innerHTML = 'Por favor digite todos os dados da PA!'

        termo.focus()
    } else {
        primeiro_termo = Number(termo.value)
        razao_formatada = Number(razao.value)
        sequencia = primeiro_termo

        res.innerHTML = ''

        res.innerHTML += 'PA: '
        for(let c = 1; c <= 10; c++) {
            soma += sequencia

            if (c == 10) {
                res.innerHTML += `${sequencia}. `
            } else {
                res.innerHTML += `${sequencia}, `
            }

            sequencia += razao_formatada
        }

        res.innerHTML += `<br> Soma dos valores: ${soma}.`

        controle = true
    }
}