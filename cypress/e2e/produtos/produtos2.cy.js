/// <reference types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade Página de produtos', () => {

});

beforeEach(() => {
    produtosPage.visitarUrl()
});

it('Deve selecionar um produto da lista', () => {
    produtosPage.buscarProdutoLista('Abominable Hoodie')
    cy.get('.woocommerce-product-details__short-description > p').should('contain', 'This is a variable product called a Abominable Hoodie')

})

it.only('Deve buscar um produto com sucesso', () => {
    produtosPage.buscarProduto('Beaumont Summit Kit')
    cy.get('.woocommerce-product-details__short-description > p').should('contain', 'This is a variable product called a Beaumont Summit Kit')

});

it('Deve visitar a página de um produto', () => {

});

it('Deve adicionar produto ao carrinho', () => {

});

//Funcionalidade Página de produtos com cenário otimizado - Utilizando page objects