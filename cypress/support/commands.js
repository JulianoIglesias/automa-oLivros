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



Cypress.Commands.add('clean01', () => {

    cy.url()
        .should('be.eq', "https://projeto-voluntario.vercel.app/index.html");
    cy.title()
        .should('be.eq', "MPTL-Login");
})
Cypress.Commands.add('clean02', () => {
    cy.get('#usuario')
        .first()
        .click()
        .type('admin');
    cy.get('#senha')
        .first()
        .click()
        .type('123');
    cy.get('button').click();
    cy.get('[href="cadastro_usuario.html"]').contains("Cadastrar Usuário").should('be.exist')
        .click();
    cy.get('#novoCadastroUsuario').contains('Nome completo').should('be.visible');
    cy.get('#novoCadastroUsuario').contains('Email').should('be.visible');
    cy.get('#novoCadastroUsuario').contains('Email').should('be.visible');
    cy.get('#novoCadastroUsuario').contains('Senha').should('be.visible');
    cy.get('#novoCadastroUsuario').contains('Confirmar Senha').should('be.visible');
    cy.get('#nomeCompleto')
        .type('Juliano Henrique Iglesias');
    cy.get('#novoCadastroUsuario > :nth-child(5)')
        .type('julianohenriqueiglesias@gmail.com');
    cy.get('#novoCadastroUsuario > :nth-child(7)')
        .type('julianohenriqueiglesias@gmail.com');
    cy.get('#senha')
        .type('babaloka35');
    cy.get('#confirmarSenha')
        .type('babaloka35');
    cy.get('#btnCadastrarNovoUsuario')
        .first()
        .click();
})
Cypress.Commands.add('clean03', () => {
    cy.get('#usuario')
        .first()
        .click()
        .type('admin');
    cy.get('#senha')
        .first()
        .click()
        .type('123');
    cy.get('button').click();
    cy.get('[href="cadastro_usuario.html"]')
        .click();
    cy.get('#btnCadastrarNovoUsuario').click();
    cy.get('#nomeCompleto')
        .should('have.attr', 'required');
    cy.get('#novoCadastroUsuario > :nth-child(5)')
        .should('have.attr', 'required');
    cy.get('#novoCadastroUsuario > :nth-child(7)')
        .should('have.attr', 'required');
    cy.get('#senha')
        .should('have.attr', 'required');
    cy.get('#confirmarSenha')
        .should('have.attr', 'required');
})
Cypress.Commands.add('clean04', () => {
    cy.get('#usuario')
        .first()
        .click()
        .type('admin');
    cy.get('#senha')
        .first()
        .click()
        .type('123');
    cy.get('button').click();
    cy.get('[href="cadastro_usuario.html"]').click();
    cy.get('#nomeCompleto')
        .type('Juliano Henrique Iglesias');
    cy.get('#novoCadastroUsuario > :nth-child(5)')
        .type('julianohenriqueiglesiasgmail.com');
    cy.get('#novoCadastroUsuario > :nth-child(7)')
        .type('julianohenriqueiglesias@gmail.com').should('have.attr', 'required')
    cy.get('#senha')
        .type('babaloka35');
    cy.get('#confirmarSenha')
        .type('babaloka35');
    cy.get('#btnCadastrarNovoUsuario')
        .first()
        .click();
    cy.get('#novoCadastroUsuario > :nth-child(5)').should('have.attr', 'required')
})
Cypress.Commands.add('VerificaEasy5', () => {
    cy.get('button').click();
    cy.get('[href="index.html"]').click();
    cy.url().should('be.eq', "https://projeto-voluntario.vercel.app/index.html");
    cy.title().should('be.eq', "MPTL-Login");
})

Cypress.Commands.add('clean05', () => {
    cy.get('#usuario')
        .first()
        .click()
        .type('admin');
    cy.get('#senha')
        .first()
        .click()
        .type('123');
    cy.get('button').click();
    cy.get('[href="cadastro_usuario.html"]').click();
    cy.get('#nomeCompleto')
        .type('Juliano Henrique Iglesias');
    cy.get('#novoCadastroUsuario > :nth-child(5)')
        .type('julianohenriqueiglesias@gmail.com');
    cy.get('#novoCadastroUsuario > :nth-child(7)')
        .type('julianohenriqueiglesias@gmail.com').should('have.attr', 'required')
    cy.get('#senha')
        .type('babaloka35');
    cy.get('#confirmarSenha')
        .type('babaloka35');
    cy.get('#btnCadastrarNovoUsuario')
        .first()
        .click();
    cy.get('#novoCadastroUsuario > :nth-child(5)').should('have.attr', 'required')
})

Cypress.Commands.add('clean06', () => {
    cy.get('#usuario')
        .first()
        .click()
        .type('admin');
    cy.get('#senha')
        .first()
        .click()
        .type('123');
    cy.get('button').click();
    cy.get('[href="cadastro_usuario.html"]').click();
    cy.get('#nomeCompleto')
        .type('Juliano Henrique Iglesias');
    cy.get('#novoCadastroUsuario > :nth-child(5)')
        .type('julianohenriqueiglesias@gmail.com');
    cy.get('#novoCadastroUsuario > :nth-child(7)')
        .type('julianohenriqueiglesias@gmail.com').should('have.attr', 'required')
    cy.get('#senha')
        .type('babaloka35');
    cy.get('#confirmarSenha')
        .type('babaloka34213123124124');
    cy.get('#btnCadastrarNovoUsuario')
        .first()
        .click();
    cy.get('#novoCadastroUsuario > :nth-child(5)').should('have.attr', 'required')
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