/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

});

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
});
/*
afterEach(() => {
    cy.screenshot()
});
*/
it('Deve selecionar um produto da lista', () => {
    cy.get('.product-block').first().click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.input-text').clear().type('1')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.')

})

it('Deve selecionar um produto da lista', () => {
    cy.get('.product-block').last().click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type('2')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
})

it('Deve selecionar um produto da lista', () => {
    cy.get('.product-block').eq(4).click()
    cy.get('.button-variable-item-34').click()
    cy.get('.button-variable-item-Black').click()
    cy.get('.input-text').clear().type('4')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
})

it.only('Deve selecionar um produto da lista', () => {
    cy.get('.product-block').contains('Ajax Full-Zip Sweatshirt').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type('4')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
    
})

//Funcionalidade Página de produtos com cenário sem otimizar - Capiturando elemensto por arrays e pelo nome do produto