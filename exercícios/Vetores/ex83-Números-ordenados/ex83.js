const executar = document.querySelector('#executar')
executar.addEventListener('click', ramdom_numeros)

let res = document.querySelector('#res')

function ramdom_numeros() {
    let numeros_aleatorios = []
    let auxiliar

    for (let c = 0; c < 20; c++) {
        let numero = Math.floor(Math.random() * 99 + 1)
        numeros_aleatorios.push(numero)
    }

    res.innerHTML = ''

    res.innerHTML = `Números gerados pelo computador: <br>
    ${numeros_aleatorios.join(', ')}`

    res.innerHTML += `<br> Números gerados pelo computador em ordem crescente: <br>`
    
    for (let i = 0; i < 19; i++) {
        for (let p = i + 1; p < 20; p++) {
            if (numeros_aleatorios[i] > numeros_aleatorios[p]) {
               auxiliar = numeros_aleatorios[i]
               numeros_aleatorios[i] = numeros_aleatorios[p]
               numeros_aleatorios[p] = auxiliar
            } 
        }
    }
     res.innerHTML += `${numeros_aleatorios.join(', ')}`
}
