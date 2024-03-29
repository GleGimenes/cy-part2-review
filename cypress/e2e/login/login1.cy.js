/// <reference types="cypress" />

describe('Funcionalidade Login', () => {

it('Deve fazer login com sucesso', () => {
    cy.visit('minha-conta/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
})    

});

// Funcionalidade: Login sem otimizar