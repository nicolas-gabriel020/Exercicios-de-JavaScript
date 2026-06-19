const botao = document.querySelector('#botao')
botao.addEventListener('click', divisiveis_por_4)

function divisiveis_por_4() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let c = 30
    let sim_divisiveis = 0
    let nao_divisiveis = 0

    res.innerHTML ='Contagem: <br>'

    while (c > 0) {
        if (c % 4 == 0) {
            res.innerHTML += `[${c}] `

            sim_divisiveis++
        } else {
            res.innerHTML += `${c} `

            nao_divisiveis++
        }
        c--
    }

    res.innerHTML += `<br><br> Números divisiveis por 4 encontrados: ${sim_divisiveis} <br>
    Números não divisiveis por 4: ${nao_divisiveis}`
}