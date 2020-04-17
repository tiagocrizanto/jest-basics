let carrinhoCompras = [];

module.exports = {
    adicionarProdutos: (produtos) => {
        return carrinhoCompras.push(...produtos);
    },
    itensNoCarrinho: () => {
        return carrinhoCompras.length;
    },
    calcularDesconto: () => {
        let total = 0;
        carrinhoCompras.forEach((item) => {
            total += item.preco * item.qte;    
        });

        if(total > 299) {
            return total * 0.90;
        }
        if (carrinhoCompras.length >= 3) {
            return total * 0.95;
        }
    },
    limparCarrinho: () => {
        carrinhoCompras = [];
    },
    removerProduto: (produto) => {
        return carrinhoCompras.filter(f => f.nome != produto);
    }
}
