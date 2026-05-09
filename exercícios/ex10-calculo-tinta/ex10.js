let botao = document.querySelector('#calcular')
botao.addEventListener('click', calcular)

function calcular() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let espa1 = document.querySelector('#largura')
    let espa2 = document.querySelector('#altura')

    if (espa1.value === 0 || espa2.value === 0) {
        res.innerHTML += 'Por favor preencha todos os campos'
    } else {
        let largura = Number(espa1.value)
        let altura = Number(espa2.value)

        let area = altura * largura
        let litros = area / 2

        res.innerHTML = `A área da parede é ${area}
        Você precisará de ${litros.toFixed(2)} litros de tinta`
    }
}