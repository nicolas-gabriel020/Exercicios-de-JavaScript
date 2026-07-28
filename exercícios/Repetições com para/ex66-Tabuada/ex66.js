const gerador = document.querySelector('#gerador')
gerador.addEventListener('click', tabuada)

let numero = document.querySelector('#numero')
let seltab = document.querySelector('#seltab')
let valor = null

function tabuada() {
        valor = Number(numero.value)

        seltab.innerHTML = ''

        for (let c = 1; c <= 20; c++) {
            let item = document.createElement('option')
            item.text = `${valor} X ${c} = ${valor * c}`
            item.value = `seltab${c}`
            seltab.appendChild(item)
        }
}

const limpar = document.querySelector('#limpar')
limpar.addEventListener('click', resetar)

function resetar() {
    seltab.innerHTML = ''
    item = document.createElement('option')
    item.text = 'Digite um número acima!'
    seltab.appendChild(item)

    valor = null
    numero.value = ''
    numero.focus()
    return
}