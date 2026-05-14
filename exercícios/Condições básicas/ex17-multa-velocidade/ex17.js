let botao = document.querySelector('#botao')
botao.addEventListener('click', calcular)

function calcular() {
    let res = document.querySelector('#res')
    let veiculo = document.querySelector('#velocidade')

    res.innerHTML = ''

    if (veiculo.value == '') {
        alert('Por favor preencha todos os campos!')
    } else {
        let velocidade = Number(veiculo.value)
        let km_excedidos = velocidade - 80
        let multa = km_excedidos * 5

        if (velocidade > 80) {
            res.innerHTML = `Você foi multado em ${multa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} por andar ${km_excedidos} KM acima do limite de velocidade.`
            res.style.background = 'red'
        } else if (velocidade > 70) {
            res.innerHTML = `${velocidade} Km/h, atenção!`
            res.style.background = 'yellow'
        }
        else {
            res.innerHTML = `${velocidade} Km/h, velocidade segura!`
            res.style.background = 'green'
        }
    }
}