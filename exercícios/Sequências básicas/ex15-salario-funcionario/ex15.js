let botao = document.querySelector('#botao')
botao.addEventListener('click',calcular)

function calcular() {
    let res = document.querySelector('#res')
    let dias = document.querySelector('#dias')

    if (dias.value == '') {
        alert('Por favor preencha todos os campos!')
    } else {
        let dia_formatado = Number(dias.value)

        let horas = dia_formatado * 8
        let salario = horas * 25

        res.innerHTML = `Dias trabalhados: ${dia_formatado} <br>
        Horas trabalhadas: ${horas}
        Salário total: ${salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }
}