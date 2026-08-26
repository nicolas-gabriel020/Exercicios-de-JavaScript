const executar = document.querySelector('#executar')
executar.addEventListener('click', gerador)

let res = document.querySelector('#res')

function gerador() {
    gerador_atualizado('Aprendendo JavaScript') 
}

function gerador_atualizado(mensagem) {
    res.innerHTML = `+-------=======------+ <br>
    ${mensagem} <br>
    +-------=======------+`
}