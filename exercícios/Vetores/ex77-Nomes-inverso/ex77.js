const adicionar = document.querySelector('#executar')
adicionar.addEventListener('click', adicionar_nome)

let res = document.querySelector('#res')
let nome = document.querySelector('#nome')

let Todos_nomes = []

function adicionar_nome() {
    if (nome.value == '') {
        alert('erro ao adicionar nome!')
    } else {
        Todos_nomes.push = nome.value
    }
}