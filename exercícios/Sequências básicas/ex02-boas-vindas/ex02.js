var botao = document.getElementById('botao')
botao.addEventListener('click',clicou)

function clicou () {
    var nome = document.querySelector('#nome')
    var res = document.querySelector('#res')
    
    res.innerHTML = `olá ${nome.value}, é um prazer te conhecer!`
}