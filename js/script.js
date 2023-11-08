const areaNovoproduto = document.querySelector('.areaNovoProduto');
const escondido = document.querySelector('.block');  
const codigo = document.querySelector('#txtCodigo');
const nome = document.querySelector('#txtNome');
const quantidade = document.querySelector('#txtQtd');    
const valor = document.querySelector('#txtValor');   

function verificarSituacaoEstoque(quantidade)
{
    let quantidadeProduto = Number(quantidade);

    if (quantidadeProduto < 100){
        return "<span class='vermelho'>Comprar</span>";
    }
    else
    {
        return "Regular";
    }
}

/* Código sem bloco de execução é executado imediatamente */

const linhasProdutos = document.querySelectorAll('.linha-produto');


for (let i = 0; i < linhasProdutos.length; i++) {
    
    const localQuantidade = linhasProdutos[i].children[2];
    const localSituacao = linhasProdutos[i].children[4];

    localSituacao.innerHTML = verificarSituacaoEstoque(localQuantidade.textContent)    
}

/* remover o escondido,receber valor e cancelar */


const botao = document.querySelector ('.btnNovo');
botao.addEventListener('click',function(e)
{
    e.preventDefault()
    areaNovoproduto.classList.remove("escondido");
    escondido.classList.remove("escondido");
}
);

const salvar = document.querySelector('.salvarbtn'); 
salvar.addEventListener("click",function(e){
    e.preventDefault()

    const linhaNova = document.createElement("tr")
    linhaNova.classList.add("linha-produto")

    
   
    const linhaNovaCodigo = document.createElement("td")
    const linhaNovaNome = document.createElement("td")
    const linhaNovaQtd = document.createElement("td")
    const linhaNovaValor = document.createElement("td")
    const linhaNovaSituacao = document.createElement("td")

    linhaNovaSituacao.innerHTML = verificarSituacaoEstoque(localQuantidade)


    linhaNovaNome.textContent = nome.value
    linhaNovaQtd.textContent = quantidade.value
    linhaNovaValor.textContent = valor.value

    const tabela = document.querySelector("#tabela")
    tabela.appendChild(linhaNova)
    linhaNova.appendChild(linhaNovaCodigo)
    linhaNova.appendChild(linhaNovaNome)
    linhaNova.appendChild(linhaNovaQtd)
    linhaNova.appendChild(linhaNovaValor)
    linhaNova.appendChild(linhaNovaSituacao)

    areaNovoproduto.classList.add("escondido");
    escondido.classList.add("escondido");

    codigo.value="";
    nome.value="";
    quantidade.value="";
    valor.value="";
});

const cancelar = document.querySelector('.cancelarbtn');
cancelar.addEventListener('click',function(e)
{
    e.preventDefault()
    areaNovoproduto.classList.add("escondido");
    escondido.classList.add("escondido");

    codigo.value="";
    nome.value="";
    quantidade.value="";
    valor.value="";
}
);
