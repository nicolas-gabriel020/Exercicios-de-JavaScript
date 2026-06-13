const botao = document.querySelector('#botao')
botao.addEventListener('click', imc)

function imc() {
    let res = document.querySelector('#res')

    res.innerHTML = ''

    let altura = document.querySelector('#altura')
    let peso = document.querySelector('#peso')

    if (altura.value == '' || peso.value == '') {
        res.innerHTML = 'Por favor preencha todos os campos!'
    } else {
        let altura_formatada = Number(altura.value)
        let peso_formatado = Number(peso.value)

        if (altura_formatada <= 0 || peso_formatado <= 0) {
            alert('Por favor insira dados válidos')
        } else {
            let imc = peso_formatado / (altura_formatada ** 2)

            if (imc < 18.5) {
                res.innerHTML = `Peso: ${peso_formatado} kg <br>
                Altura: ${altura_formatada} m <br>
                IMC: ${imc.toFixed(1)} <br>
                Classificação: Abaixo do peso`
            } else if (imc < 25) {
                res.innerHTML = `Peso: ${peso_formatado} kg <br>
                Altura: ${altura_formatada} m <br>
                IMC: ${imc.toFixed(1)} <br>
                Classificação: Peso ideal`
            } else if (imc < 30) {
                res.innerHTML = `Peso: ${peso_formatado} kg<br>
                Altura: ${altura_formatada} m <br>
                IMC: ${imc.toFixed(1)} <br>
                Classificação: Sobre peso`
            } else if (imc < 40) {
                res.innerHTML = `Peso: ${peso_formatado} kg <br>
                Altura: ${altura_formatada} m <br>
                IMC: ${imc.toFixed(1)} <br>
                Classificação: Obesidade`
            } else {
                res.innerHTML = `Peso: ${peso_formatado} kg <br>
                Altura: ${altura_formatada} m <br>
                IMC: ${imc.toFixed(1)} <br>
                Classificação: Obesidade mórbida`
            }
        }
    }
}