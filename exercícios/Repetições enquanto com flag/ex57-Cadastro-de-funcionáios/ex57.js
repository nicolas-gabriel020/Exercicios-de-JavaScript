const botao = document.querySelector('#botao')
botao.addEventListener('click', cadastro)

let res = document.querySelector('#res')
let numero = document.querySelector('#salario')
let genero = document.getElementsByName('genero')

let total_homem = 0
let total_mulher = 0
let total_funcionarios = 0
let salario_geral = 0
let salario_mulher = 0
let salario_homem = 0
let media_mulher = 0
let media_homem = 0
let maior_salario = 0
let menor_salario = 0
let media = 0
let diferenca = 0
let porcentagem_homem = 0
let porcentagem_mulher = 0

function cadastro() {
    if (numero.value == '') {
        res.innerHTML = 'Por favor preencha todos os dados!'
        numero.focus()
    } else {
        let salario = Number(numero.value)

        if (salario <= 0) {
            res.innerHTML = 'Por favor coloque um valor válido!'
        } else {
            numero.value = ''
            numero.focus()

            total_funcionarios++

            if (genero[0].checked) {
                total_mulher++
                salario_mulher += salario
                media_mulher = salario_mulher / total_mulher
            } else {
                total_homem++
                salario_homem += salario
                media_homem = salario_homem / total_homem
            }

            if (total_funcionarios == 1) {
                maior_salario = salario
                menor_salario = salario
            } else {
                if (salario > maior_salario) {
                    maior_salario = salario
                }

                if (salario < menor_salario) {
                    menor_salario = salario
                }

                diferenca = maior_salario - menor_salario
            }

            salario_geral += salario
            media = salario_geral / total_funcionarios

            porcentagem_homem = (total_homem / total_funcionarios) * 100
            porcentagem_mulher = (total_mulher / total_funcionarios) * 100

            res.innerHTML = `Total de salarios pagos aos homens: ${salario_homem.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Total de salários pagos as mulheres: ${salario_mulher.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br><br>
            Total de homens: ${total_homem} <br>
            Total de mulheres: ${total_mulher} <br>
            Total de funcionários: ${total_funcionarios} <br><br>
            Percentual de funcionários homens: ${porcentagem_homem.toFixed(1)}% <br>
            Percentual de funcinários mulheres: ${porcentagem_mulher.toFixed(1)}% <br>
            Média salarial geral: ${media.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Média salarial dos homens: ${media_homem.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Média salarial das mulheres: ${media_mulher.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br><br>
            Maior salário: ${maior_salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Menor salário: ${menor_salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br><br>
            Diferença entre maior e menor salário: ${diferenca.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
        }
    }

}