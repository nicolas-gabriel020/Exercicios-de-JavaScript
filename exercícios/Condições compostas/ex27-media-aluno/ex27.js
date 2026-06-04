const botao = document.querySelector('#botao')
botao.addEventListener('click', calcular)

function calcular() {
    let res = document.querySelector('#res')

    res.innerHTML = ''
    res.style.background = ''

    let primeira_nota = document.querySelector('#nota1')
    let segunda_nota = document.querySelector('#nota2')

    if (primeira_nota.value == '' || segunda_nota.value == '') {
        res.innerHTML = 'Por favor preencha todos os campos!'

        res.style.background = 'orange'
    } else {
        let nota1 = Number(primeira_nota.value)
        let nota2 = Number(segunda_nota.value)

        if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
            res.innerHTML = 'Por favor preencha com valores válidos!'

            res.style.background = 'orange'
        } else {
            let media = (nota1 + nota2) / 2

            if (media <= 4.9) {
                let falta = 5 - media

                res.innerHTML = `Primeira nota: ${nota1} <br>
                Segunda nota: ${nota2} <br>
                Média: ${media.toFixed(1)} <br><br>
                Faltaram ${falta.toFixed(1)} pontos para recuperação <br>
                Situação: REPROVADO`

                res.style.background = 'red'
            } else if (media <= 6.9) {
                let falta = 7 - media

                res.innerHTML = `Primeira nota: ${nota1} <br>
                Segunda nota: ${nota2} <br>
                Média: ${media.toFixed(1)} <br><br>
                Faltaram ${falta.toFixed(1)} pontos para a aprovação <br>
                Situação: RECUPERAÇÃO`

                res.style.background = 'yellow'
            } else {
                res.innerHTML = `Primeira nota: ${nota1} <br>
                Segunda nota: ${nota2} <br>
                Média: ${media.toFixed(1)} <br><br>
                Situação: APROVADO`

                res.style.background = 'green'
            }
        }
    }
}