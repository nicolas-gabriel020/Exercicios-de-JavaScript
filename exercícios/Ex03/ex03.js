var mostrar = document.querySelector('#mostrar')
mostrar.addEventListener('click',clicou)

function clicou () {
    var nome = document.querySelector('#nome')
    var sal = document.querySelector('#salario')
    var res = document.querySelector('#res')

    var salario = Number(sal.value)

    res.innerHTML = `O funcionario ${nome.value} recebe ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}}`
}