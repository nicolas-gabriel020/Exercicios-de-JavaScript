let botao = document.querySelector('#botao')
botao.addEventListener('click', calcular)

function calcular() {
    let res = document.querySelector('#res')
    let cigarro = document.querySelector('#cigarro')
    let anos = document.querySelector('#anos')

    res.innerHTML = ''

    if (cigarro.value == '' || anos.value == '') {
        alert('Por favor preencha todos os campos!')
    } else {
        let tabaco = Number(cigarro.value)
        let tempo = Number(anos.value)

        if (tabaco < 0 || tempo < 0) {
            alert('Por favor insira valores válidos!')
        } else {
            let total_cigarros = tabaco * (tempo * 365)

            let minutos_perdidos = total_cigarros * 10

            let dias_perdidos = minutos_perdidos / 1440

            res.innerHTML = `Total de cigarros fumados: ${total_cigarros}. <br>
            Minutos de vida perdidos: ${minutos_perdidos}. <br>
            Você perdeu aproximadamente: ${dias_perdidos.toFixed(2)} dias de vida. <br>`

            if (dias_perdidos < 100) {
                res.innerHTML += 'Perda de vida considerada baixa!'
            } else if(dias_perdidos < 500) {
                res.innerHTML += 'Perda de vida considerada moderada!'
            } else {
                res.innerHTML += 'Perda de vida muito alta!'
            }
        }
    }
}