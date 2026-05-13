let converter = document.querySelector('#botao')
converter.addEventListener('click', conversao)

function conversao() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    if (document.querySelector('#metro').value === '') {
        res.innerHTML = 'Por favor digite um valor'
    } else {
        let numero = Number(document.querySelector('#metro').value)

        let km = numero / 1000
        let hm = numero / 100
        let dam = numero / 10
        let dm = numero * 10
        let cm = numero * 100
        let mm = numero * 1000
       
        res.innerHTML += `A distância de ${numero} metros corresponde a: <br>`
        res.innerHTML += `${km.toFixed(2)} km <br>`
        res.innerHTML += `${hm.toFixed(2)} hm <br>`
        res.innerHTML += `${dam.toFixed(2)} dam <br>`
        res.innerHTML += `${dm.toFixed(2)} dm <br>`
        res.innerHTML += `${cm.toFixed(2)} cm <br>`
        res.innerHTML += `${mm.toFixed(2)} mm <br>`
    }
}