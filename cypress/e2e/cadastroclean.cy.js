/// <reference types= "cypress" />
describe('automação cadastro de usuário', function () {
    beforeEach(function () {
        cy.visit('https://projeto-voluntario.vercel.app/index.html');
    })
    it('verifica a página e seu título', function () {
        cy.clean01();
    })
    it('acessa a função Cadastrar Usuário e verifica os campos "Nome Completo, E-mail, Confirmação de E-mail, Senha e Confirmar Senha"', function () {
        cy.clean02();
    })
    it('verifica Requisito de Preencher Campos', function () {
        cy.clean03();
    })
    it('verifica o campo de E-mail e seu requisito', function () {
        cy.clean04();
    })

    it('verifica o campo de senha e seu requisito', function () {
        cy.clean05();
    })
    it('campos de senhas divergentes e o teste positivo', function () {
        cy.clean06();
    })
})