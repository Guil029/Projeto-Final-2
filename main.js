const form = document.getElementById('forms')
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
})

function adicionarLinha (){
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    let linha = '<tr>';
    linha += `<td> ${inputNome.value}</td>`;
    linha += `<td> ${inputTelefone.value}</td>`;
    linha += '</tr>';
    linhas += linha; 

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const table = document.querySelector('tbody');
    table.innerHTML = linhas;
}




