const botao = document.querySelector('#botao')
botao.addEventListener('click', calcular)

function calcular() {
    let res = document.querySelector('#res')

    res.innerHTML = ''
    res.style.background = ''

    let valor1 = document.querySelector('#valor1')
    let valor2 = document.querySelector('#valor2')
    let valor3 = document.querySelector('#valor3')

    if (valor1.value == '' || valor2.value == '' || valor3.value == '') {
        alert('Por favor preencha todos os campos!')
    } else {
        let ladoA = Number(valor1.value)
        let ladoB = Number(valor2.value)
        let ladoC = Number(valor3.value)

        if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
            alert('Por favor preencha com valores válidos!')
        } else {
            if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
                let perimetro = ladoA + ladoB + ladoC
                
                if (ladoA == ladoB && ladoB == ladoC) {
                    res.innerHTML = `Tipo de triangulo: Equilátero <br><br>
                    Lado A: ${ladoA} <br>
                    Lado B: ${ladoB} <br>
                    Lado C: ${ladoC} <br><br>
                    Perímetro: ${perimetro}`

                    res.style.background = 'green'
                } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
                    res.innerHTML = `Tipo de triangulo: Escaleno <br><br>
                    Lado A: ${ladoA} <br>
                    Lado B: ${ladoB} <br>
                    Lado C: ${ladoC} <br><br>
                    Perímetro: ${perimetro}`

                    res.style.background = 'orange'
                } else {
                    res.innerHTML = `Tipo de triangulo: Isósceles <br><br>
                    Lado A: ${ladoA} <br>
                    Lado B: ${ladoB} <br>
                    Lado C: ${ladoC} <br><br>
                    Perímetro: ${perimetro}`

                    res.style.background = 'blue'
                }
            } else {
                res.innerHTML = `Não é possivel formar um triângulo! <br>
                Lado A: ${ladoA} <br>
                Lado B: ${ladoB} <br>
                Lado C: ${ladoC} <br>`

                res.style.background = 'red'
            }
        }
    }
}