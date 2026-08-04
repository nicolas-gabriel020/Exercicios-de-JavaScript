const executar = document.querySelector('#executar')
executar.addEventListener('click', fibonacci)

let res = document.querySelector('#res')

function fibonacci() {
    let sequencia_1 = 1
    let sequencia_2 = 1
    let sequencia_3 = 0
    let soma = 0
    
    res.innerHTML = 'Sequência: '

    for (let c = 1; c <= 10; c++) {
       if (c == 10) {
            res.innerHTML += `${sequencia_1}. `
       } else {
            res.innerHTML += `${sequencia_1}, `
       }

       soma += sequencia_1

        sequencia_1 = sequencia_2 + sequencia_3
        sequencia_3 = sequencia_2
        sequencia_2 = sequencia_1
    }
    res.innerHTML += `<br> Soma dos 10 números da sequência: ${soma}.`
}