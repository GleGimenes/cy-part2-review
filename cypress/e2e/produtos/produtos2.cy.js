/// <reference types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page";
const produtos = require('../../fixtures/produtos.json')

describe('Funcionalidade Página de produtos', () => {

});

beforeEach(() => {
    produtosPage.visitarUrl()
});

it('Deve selecionar um produto da lista', () => {
    produtosPage.buscarProdutoLista('Abominable Hoodie')
    cy.get('.woocommerce-product-details__short-description > p').should('contain', 'This is a variable product called a Abominable Hoodie')

})

it('Deve buscar um produto com sucesso', () => {
    produtosPage.buscarProduto('Beaumont Summit Kit')
    cy.get('.woocommerce-product-details__short-description > p').should('contain', 'This is a variable product called a Beaumont Summit Kit')

});

it('Deve visitar a página de um produto', () => {
    produtosPage.visitarProduto('ariel-roll-sleeve-sweatshirt')
    cy.get('.woocommerce-product-details__short-description > p').should('contain', 'This is a variable product called a Ariel Roll Sleeve Sweatshirt')
});

it('Deve adicionar produto ao carrinho', () => {
    let quant = 3
    produtosPage.buscarProdutoLista('Abominable Hoodie')
    produtosPage.addProdutoCarrinho('M', 'Green', quant)
    cy.get('.woocommerce-message').should('contain', quant + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

});

it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
    cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(dados[0].tamanho,
            dados[0].cor,
            dados[0].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
    })
});

//Funcionalidade Página de produtos com cenário otimizado - Utilizando page objects
//Utilizando massa de dados (fixture)