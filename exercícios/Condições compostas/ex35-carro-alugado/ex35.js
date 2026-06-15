const botao = document.querySelector('#botao')
botao.addEventListener('click', aluguel_carros)

function aluguel_carros() {
    let res = document.querySelector('#res')

    let dias = document.querySelector('#dias')
    let quilometros = document.querySelector('#quilometros')

    if (dias.value == '' || quilometros.value == '') {
        res.innerHTML = 'Por favor preencha todos os campos!'
    } else {
        let tempo = Number(dias.value)
        let km = Number(quilometros.value)

        if (tempo <= 0 || km <= 0) {
            res.innerHTML = 'Por favor informe valores válidos!'
        } else {
            let aluguel = 0
            let distancia = 0
            let carro = null

            let tipo = document.getElementsByName('tipo')

            if (tipo[0].checked) {
                carro = 'Carro popular'
                aluguel = tempo * 90

                if (km <= 100) {
                    distancia = km * 0.20
                } else {
                    distancia = km * 0.10
                }
            } else {
                carro = 'Carro de luxo'
                aluguel = tempo * 150

                if (km <= 200) {
                    distancia = km * 0.30
                } else {
                    distancia = km * 0.25
                }
            }

            let valor_final = aluguel + distancia

            res.innerHTML = `Tipo de carro: ${carro} <br>
            Dias alugados: ${tempo} <br>
            Km percorridos: ${km} <br><br>
            Valor das diárias: ${aluguel.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Valor da quilometragem: ${distancia.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br><br>
            Total a pagar: ${valor_final.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
        }
    }
}