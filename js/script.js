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
    const escondido = document.querySelector('.block');  
    const areaNovoproduto = document.querySelector('.areaNovoProduto');
    areaNovoproduto.classList.remove ("escondido");
    escondido.classList.remove("escondido");

    
    const codigo = document.querySelector('#txtCodigo');
    const nome = document.querySelector('#txtNome');
    const quantidade = document.querySelector('#txtQtd');    
    const valor = document.querySelector('#txtValor');   
    const salvar = document.querySelector('.salvarbtn'); 
    const cancelar = document.querySelector('.cancelarbtn');
    
    salvar.addEventListener("click",function(e){
        e.preventDefault()
        console.log(nome.value, quantidade.value, valor.value);
    });
    
    cancelar.addEventListener('click',function(e)
    {
        e.preventDefault()
        areaNovoproduto.classList.add("escondido");
        escondido.classList.add("escondido");
    
        codigo.value="";
        nome.value="";
        quantidade="";
        valor="";
    }
    );
}
);

