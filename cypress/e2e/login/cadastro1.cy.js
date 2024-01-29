/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Funcionalidade Cadastro', () => {

});

beforeEach(() => {
    cy.visit('minha-conta/')
});

/*afterEach(() => {
    cy.screenshot()
});
*/

it('Deve realizar Cadastro com sucesso _ Usando Faker', () => {
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type(faker.internet.password())
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(faker.name.firstName())
    cy.get('#account_last_name').type(faker.name.lastName())
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
});

it.only('Deve realizar Cadastro com sucesso _ Usando variáveis', () => {
    var email = faker.internet.email()
    var nome = faker.name.firstName()
    var sobrenome = faker.name.lastName()

    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(faker.internet.password())
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
});

//Funcionalidade Cadastro com cenário com Faker e variáveis