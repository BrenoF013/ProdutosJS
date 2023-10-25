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