var mostrar = document.querySelector('#mostrar')
mostrar.addEventListener('click',clicar)

function clicar () {
    var res = document.querySelector('#res')

    res.innerHTML = 'Olá, mundo!'
}