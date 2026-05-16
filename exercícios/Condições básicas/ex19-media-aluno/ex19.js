let botao = document.querySelector('#botao')
botao.addEventListener('click', calcular)

function calcular() {
    let res = document.querySelector('#res')
    let nome = document.querySelector('#nome')
    let nota1 = document.querySelector('#nota1')
    let nota2 = document.querySelector('#nota2')

    res.innerHTML = ''

    if (nome.value == '' || nota1.value == '' || nota2.value == '') {
        alert('Preencha todos os campos!')
    } else {
        let nome_formatado = (nome.value)
        let nota1_formatada = Number(nota1.value)
        let nota2_formatada = Number(nota2.value)

        if (nota1_formatada < 0 || nota1_formatada > 10 || nota2_formatada < 0 || nota2_formatada > 10) {
            alert('Por favor, preencha com valores válidos!')
        } else {
            let media = (nota1_formatada + nota2_formatada) / 2

            if (media < 5) {
                res.innerHTML = `Aluno: ${nome_formatado} <br>
                Média: ${media.toFixed(2)} <br>
                Obs(desempenho ruim): Precisa melhorar as notas!.`
                res.style.background = 'red'
            } else if (media >= 5 && media <= 6.9) {
                res.innerHTML = `Aluno: ${nome_formatado} <br>
                Média: ${media.toFixed(2)} <br>
                Obs(desempenho médio): Ainda pode melhorar!.`
                res.style.background = 'yellow'
            } else {
                res.innerHTML = `Aluno: ${nome_formatado} <br>
                Média: ${media.toFixed(2)} <br>
                Obs(ótimo desempenho): Parabéns pelo desempenho!.`
                res.style.background = 'green'
            }
            }
    }
}