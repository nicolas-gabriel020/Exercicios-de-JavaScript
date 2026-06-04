const botao = document.querySelector('#botao')
botao.addEventListener('click', terreno)

function terreno() {
    let res = document.querySelector('#res')

    res.innerHTML = ''
    res.style.background = ''

    let largo = document.querySelector('#largura')
    let comprido = document.querySelector('#comprimento')

    if (largo.value == '' || comprido.value == '') {
        res.innerHTML = 'Por favor preencha todos os campos!'

        res.style.background = 'orange'
    } else {
        let largura = Number(largo.value)
        let comprimento = Number(comprido.value)
        let area = largura * comprimento

        if (area <= 100) {
            let falta = 101 - area

            res.innerHTML = `Largura do terreno: ${largura} m <br>
            Comprimento do terreno: ${comprimento} m <br>
            àrea do terreno: ${area} m² <br><br>
            Faltaram ${falta} m² para a categoria MASTER! <br>
            Classificação do terreno: TERRENO POPULAR!`

            res.style.background = 'green'
        } else if (area <= 500) {
            let falta = 501 - area

            res.innerHTML = `Largura do terreno: ${largura} m <br>
            Comprimento do terreno: ${comprimento} m <br>
            àrea do terreno: ${area} m² <br><br>
            Faltaram ${falta} m² para a categoria VIP! <br>
            Classificação do terreno: TERRENO MASTER!`

            res.style.background = 'blue'
        } else {
            res.innerHTML = `Largura do terreno: ${largura} m <br>
            Comprimento do terreno: ${comprimento} m <br>
            àrea do terreno: ${area} m² <br><br>
            Classificação do terreno: TERRENO VIP!`

            res.style.background = 'purple'
        }
    }
}