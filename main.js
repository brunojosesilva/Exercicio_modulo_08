formulario = document.getElementById('formularioContatos');
const inputNomecontato = document.getElementById('nomeContato');
const inputTelefonecontato = document.getElementById('telefoneContato');

/* arrays para validacao */
const listaContatos = [];
const listatelefoneContatos = [];

/* indicador de alerta */
let inAlerta = false;

/* linhas da tabela contato */
let linhasContatos = '';

/* ouvir o formulario */
formulario.addEventListener('submit',function(e) {
    /* retira comportamento de limpar pagina */
    e.preventDefault();
    
    validaFormulario();

    if (!inAlerta) {
        adicionaContato();
        adicionaTabela();
    }
    atualizaTotal();
});

/* valida o se nome do contato esta na lista */
function validaFormulario() {
    const mensagemErro = document.querySelector('.mensagem');

    if (listaContatos.includes(inputNomecontato.value)) {
        mensagemErro.innerHTML = `Contato: ${inputNomecontato.value} ja foi incluido.`;
        mensagemErro.style.display = 'block';
        inAlerta = true;
    } else {
        mensagemErro.style.display = 'none';
        inAlerta = false;
    }
}

/* adiciona contato na lista */
function adicionaContato() {
    
    /* adiciona nos arrays */
    listaContatos.push(inputNomecontato.value);
    listatelefoneContatos.push(parseInt(inputTelefonecontato.value));

    /* inclui a linha para adicionar na tabela */
    let linha = '<tr>';
    linha += `<td>${inputNomecontato.value}</td>`;
    linha += `<td>${inputTelefonecontato.value}</td>`;
    linha += '</tr>';

    linhasContatos += linha;

}

/* adiciona conteudo do formulario na tabela */
function adicionaTabela() {
    
    const conteudotabela = document.querySelector('tbody');
    conteudotabela.innerHTML = linhasContatos;

}

/* atualiza o total de contatos na tabela */
function atualizaTotal() {
    document.getElementById('totalContatos').innerHTML = listaContatos.length;

    inputNomecontato.value = '';
    inputTelefonecontato.value = '';
}