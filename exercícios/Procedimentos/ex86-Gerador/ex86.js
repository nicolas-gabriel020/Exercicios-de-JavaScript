const executar = document.querySelector('#executar')
executar.addEventListener('click', gerador)

let res = document.querySelector('#res')

function gerador() {
    res.innerHTML = `+-------=======------+ <br>
    Olá, Mundo! <br>
    +-------=======------+`
}