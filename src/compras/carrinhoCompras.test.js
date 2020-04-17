/// <reference types='jest' />

const carrinhoCompras = require('./carrinhoCompras');

describe('Testes para o carrinho de compras', () => {
    it('Aplicar desconto de 5% quando houver 3 ou mais produtos', () => {
        carrinhoCompras.limparCarrinho();
        const produtos = [
            {
                nome: 'Item 1',
                preco: 50,
                qte: 1
            },
            {
                nome: 'Item 2',
                preco: 5,
                qte: 2
            },
            {
                nome: 'Item 3',
                preco: 40,
                qte: 1
            }
        ];

        carrinhoCompras.adicionarProdutos(produtos);

        expect(carrinhoCompras.itensNoCarrinho(produtos)).toBeGreaterThanOrEqual(3);
        expect(carrinhoCompras.calcularDesconto(produtos)).toEqual(95);
    });

    it('Desconto de 10% acima de 299 reais', () => {
        carrinhoCompras.limparCarrinho();
        const produtos = [
            {
                nome: 'Item 1',
                preco: 300,
                qte: 1,
            }
        ];

        carrinhoCompras.adicionarProdutos(produtos);
        expect(carrinhoCompras.calcularDesconto(produtos)).toEqual(270);
    });

    it('Obter o total do carrinho de compras', () => {
        carrinhoCompras.limparCarrinho();
        const produtos = [
            {
                nome: 'Item 1',
                preco: 300,
                qte: 1,
            },
            {
                nome: 'Item 2',
                preco: 100,
                qte: 2,
            }
        ];

        carrinhoCompras.adicionarProdutos(produtos);
        expect(carrinhoCompras.calcularDesconto(produtos)).toEqual(450);
        expect(carrinhoCompras.removerProduto('Item 1')).toHaveLength(1);
    });
});