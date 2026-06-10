const botao = document.querySelector('#botao')
botao.addEventListener('click', jokenpo)

function jokenpo() {
    let res = document.querySelector('#res')

    let valor = Math.random() * 3
    
    let valor_formatado = Math.floor(valor)

    res.innerHTML = `${valor_formatado}`
}


/*  let res = document.querySelector('#res')

    let valor = Math.random() * 3

    let talvez_tesoura = Math.floor(valor)

    res.innerHTML = `${talvez_tesoura}` */