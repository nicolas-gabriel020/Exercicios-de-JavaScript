const executar = document.querySelector('#executar')
executar.addEventListener('click', gerador)

let res = document.querySelector('#res')

function gerador() {
    gerador_atualizado('Aprendendo JavaScript', 4) 
}

function gerador_atualizado(mensagem, quantidade) {
    res.innerHTML = `+-------=======------+ <br>`

    for (let c = 0; c < quantidade; c++) {
        res.innerHTML += `${mensagem} <br>`
    }

    res.innerHTML += `+-------=======------+`
}