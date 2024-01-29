/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
    })

    it('Deve fazer login com sucesso - Utilizado massa de dados (fixture)', () => { //É criada uma vaiável (linha 2) que recebe o arquivo json.
        cy.visit('minha-conta/')                                                    //
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')

    });

    it.only('Deve fazer login com sucesso - Utilizado fixture (de forma nativa)', () => { //Não é necessário a importação, o método já é nativo do cypress
        cy.visit('minha-conta/')                                                         //  Foi criada a variavel dados dentro do metodo
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain', 'Minha conta')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
        })
    });

});

// Funcionalidade Login utilizando massa de dados (fixture) e Fixture de forma nativa