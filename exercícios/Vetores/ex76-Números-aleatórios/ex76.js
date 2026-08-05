const executar = document.querySelector('#executar')
executar.addEventListener('click', numeros_aleatorios)

let res = document.querySelector('#res')

function numeros_aleatorios() {
    res.innerHTML = ''
    
    let sequencia = []
    let decimal = 0

    for (let c = 0; c < 7; c++) {
        decimal = Math.floor(Math.random() * 100 + 1)
        sequencia.push(decimal)
    }

    res.innerHTML = `Números aleatórios gerados pelo computador: ${sequencia}, fim!`
}