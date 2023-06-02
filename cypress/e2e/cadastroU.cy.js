/// <reference types= "cypress" />
describe('automação cadastro de usuário', function () {
    beforeEach(function () {
        cy.visit('https://projeto-voluntario.vercel.app/index.html');
    })
    it('verifica a página e seu título', function () {
        cy.url()
            .should('be.eq', "https://projeto-voluntario.vercel.app/index.html");
        cy.title()
            .should('be.eq', "MPTL-Login");
    })
    it('acessa a função Cadastrar Usuário e verifica os campos "Nome Completo, E-mail, Confirmação de E-mail, Senha e Confirmar Senha"', function () {
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
    it('verifica Requisito de Preencher Campos', function () {
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
    it('verifica o campo de E-mail e seu requisito', function () {
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
    
    it('verifica o campo de senha e seu requisito', function () {
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
    it.only('campos de senhas divergentes e o teste positivo', function () {
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
})