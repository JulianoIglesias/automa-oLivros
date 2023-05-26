Cypress.Commands.add('VerificaEasy', () => {

    cy.get('button').contains('Acessar').should('be.visible');
    cy.get('.cadastre_se > a').contains("Cadastre-se").should('be.visible');
    cy.get('.redefinir > a').contains("Redefinir").should('be.visible');
    cy.get('.cadastre_se > a').first().click();
    cy.on('window:alert', (str) => {
        expect(str).to.equal("Essa funcionalidade ainda não está pronta!");
    })
    cy.get('.redefinir > a').first().click()
    cy.on('window:alert', (str) => {
        expect(str).to.equal("Essa funcionalidade ainda não está pronta!");
    })
})
Cypress.Commands.add('VerificaEasy2', () => {
    cy.url().should('be.eq', "https://projeto-voluntario.vercel.app/index.html");
    cy.get('button').click();
    cy.title().should('be.eq', "MPTL-Home");
})
Cypress.Commands.add('VerificaEasy3', () => {
    cy.get('button').click();
    cy.get('[href="home.html"]').contains('Home').should('be.visible');
    cy.get('.cabecalho__menu > :nth-child(2)').contains('Minha estante').should('be.visible');
    cy.get('.cabecalho__menu > :nth-child(3)').contains('Cadastrar Livros').should('be.visible');
    cy.get('.cabecalho__menu > :nth-child(4)').contains('Quem somos').should('be.visible');
    cy.get('.cabecalho__menu > :nth-child(5)').contains('Contato').should('be.visible');
    cy.get('[href="index.html"]').contains('Sair').should('be.visible');
})
Cypress.Commands.add('VerificaEasy4', () => {
    cy.get('button').click();
    cy.get('.cabecalho__menu > :nth-child(2)').first().click()
    cy.on('window:alert', (str) => {
        expect(str).to.equal("Essa funcionalidade ainda não está pronta!");
    })
    cy.get('.cabecalho__menu > :nth-child(3)').first().click()
    cy.on('window:alert', (str) => {
        expect(str).to.equal("Essa funcionalidade ainda não está pronta!");
    })
    cy.get('.cabecalho__menu > :nth-child(4)').first().click()
    cy.on('window:alert', (str) => {
        expect(str).to.equal("Essa funcionalidade ainda não está pronta!");
    })
    cy.get('.cabecalho__menu > :nth-child(5)').first().click()
    cy.on('window:alert', (str) => {
        expect(str).to.equal("Essa funcionalidade ainda não está pronta!");
    })
    Cypress.Commands.add('VerificaEasy5', () => {
        cy.get('button').click();
        cy.get('[href="index.html"]').click();
        cy.url().should('be.eq', "https://projeto-voluntario.vercel.app/index.html");
        cy.title().should('be.eq', "MPTL-Login");
    })
})



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })