const botao = document.querySelector('#executar')
botao.addEventListener('click', recebe_valores)

let res = document.querySelector('#res')
let comeco = document.querySelector('#inicio')
let final = document.querySelector('#fim')
let meio = document.querySelector('#incremento')

function recebe_valores() {
    if (comeco.value == '' || final.value == '' || meio.value == '') {
        res.innerHTML = 'Por favor preencha todos os campos!'
        comeco.focus()
    } else {
        let inicio = Number(comeco.value)
        let fim = Number(final.value)
        let incremento = Number(meio.value)

        if (incremento <= 0) {
            res.innerHTML = 'Por favor digite um incremento maior que 0!!!'
        } else {
            comeco.value = ''
            final.value = ''
            meio.value = ''
            comeco.focus()

            contador(inicio, fim, incremento)
        }  
    }
}

function contador(num1, num2, num3) {
    let sequencia = []

    if (num1 > num2) {
        for (let c = num1; c >= num2; c -= num3) {
            sequencia.push(c)
        }

        res.innerHTML = `Contador final: ${sequencia.join(', ')}`
    } else {
        for (let c = num1; c <= num2; c += num3) {
            sequencia.push(c)
        }

        res.innerHTML = `Contador final: ${sequencia.join(', ')}`
    }
}