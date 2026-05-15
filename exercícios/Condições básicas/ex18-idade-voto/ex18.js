let botao = document.querySelector('#botao')
botao.addEventListener('click', calcular)

function calcular() {
    let res = document.querySelector('#res')
    let nascimento = document.querySelector('#nascimento')

    res.innerHTML = ''
    res.style.background = ''

    if (nascimento.value == '') {
        alert('Por favor preencha os campos vazios!')
    } else {
        let aniversario = Number(nascimento.value)
        let ano_atual = new Date().getFullYear()

        if (aniversario > ano_atual) {
            alert('Por favor, preencha o campo com um valor válido!')
        } else {
            let voto = ano_atual - aniversario

            res.innerHTML = `você tem ${voto} anos <br>`

            if (voto < 16) {
                res.innerHTML += `Você ainda não pode votar!`
                res.style.background = 'red'
            } else if (voto >= 16 && voto <= 17 || voto >= 65) {
                res.innerHTML += `Voto opcional!`
                res.style.background = 'yellow'
            } else {
                res.innerHTML += `Voto obrigatório!`
                res.style.background = 'green'
            }
        }
    }
}