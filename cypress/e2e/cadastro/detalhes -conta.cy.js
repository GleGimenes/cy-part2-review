/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Funcionalidade Detalhes da Conta - Utilizando Commando Customizados', () => {

});

beforeEach(() => {
    cy.visit('minha-conta/edit-account/')
    cy.fixture('perfil').then(login => {
        cy.login(login.usuario, login.senha)
    })
});

it('Deve completar Detalhes da Conta com sucesso', () => {
    cy.detalhesConta(faker.name.firstName(), faker.name.lastName(), faker.name.zodiacSign())
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')



});

//Funcionalidade Detalhes da Conta -  utilizando Fixture para o login (no beforeEach) e Commandos Customizados para completar o pre Cadastro