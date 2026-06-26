const botao = document.querySelector('#botao')
botao.addEventListener('click', valores_adicionados)

let c = 0
let par = 0
let impar = 0
let porcentagem_par = 0
let porcentagem_impar = 0

function valores_adicionados() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let valor = document.querySelector('#valor')
      
    if (valor.value == '') {
        res.innerHTML = 'Por favor preencha com todos os dados!'
    } else {
        let numero = Number(valor.value)
        
        valor.value = ''
        valor.focus()

        let decimal = Math.floor(numero)

        if (numero != decimal) {
            res.innerHTML = 'Por favor digite apenas números inteiros!'
        } else {  
            c++

            if (numero % 2 == 0) {
                par++
            } else {
                impar++
            }

            res.innerHTML = `${c} números adicionados!`

            if (c == 6) {
                porcentagem_par = (par / 6) * 100
                porcentagem_impar = (impar / 6) * 100

                return(res.innerHTML = `Total de números pares: ${par} <br>
                    Total de números impares: ${impar} <br><br>
                    ${porcentagem_par.toFixed(1)}% de números pares <br>
                    ${porcentagem_impar.toFixed(1)}% de números impares <br><br>
                    Total de números digitados: ${c}`)
            } else if (c > 6) {
                return(res.innerHTML = 'Sequência finalizada!')
            }
        }
    }
}

/*c++

            if (c <= 6) {

                if (numero % 2 == 0) {
                    par++
                } else {
                    impar++
                }

                res.innerHTML = `${c} número adicionado!`
            } else {
                return(res.innerHTML = `Total de números pares: ${par} <br>
                    Total de números impares: ${impar} <br>
                    Contador: ${c}`)
            }*/