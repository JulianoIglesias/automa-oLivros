describe('automação do site', function () {
    beforeEach(() => {
        cy.visit('https://projeto-voluntario.vercel.app/index.html')
    })
    it('verifica se a tela de login contém "Cadastre-se"", "Redefinir" e "Acessar" e verifica os alertas', function () {
        cy.VerificaEasy();
    })
    it('Verifica a página, clica no botão Acessar, acessa a página e verifica o título', function () {
        cy.VerificaEasy2();
    })
    it('Verifica botões home, Minha estante, Cadastrar Livros, Quem somos, Contato e Sair', function () {
        cy.VerificaEasy3();
    })
    it('verifica alertas dos campos "Minha estante, Cadastrar Livros, Quem somos Contato"', function () {
        cy.VerificaEasy4();
    })
    it('Clica no botão sair e retorna para tela de login', function () {
        cy.VerificaEasy5();
    })
})