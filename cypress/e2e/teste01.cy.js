describe('automação do site', function () {
  beforeEach(() => {
    cy.visit('https://projeto-voluntario.vercel.app/index.html')
  })
  it('verifica se a tela de login contém "Cadastre-se"", "Redefinir" e "Acessar" e verifica os alertas', function () {
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
  it('Verifica a página, clica no botão Acessar, acessa a página e verifica o título', function () {
    cy.url().should('be.eq', "https://projeto-voluntario.vercel.app/index.html");
    cy.get('button').click();
    cy.title().should('be.eq', "MPTL-Home");
  })
  it('Verifica botões home, Minha estante, Cadastrar Livros, Quem somos, Contato e Sair', function () {
    cy.get('button').click();
    cy.get('[href="home.html"]').contains('Home').should('be.visible');
    cy.get('.cabecalho__menu > :nth-child(2)').contains('Minha estante').should('be.visible');
    cy.get('.cabecalho__menu > :nth-child(3)').contains('Cadastrar Livros').should('be.visible');
    cy.get('.cabecalho__menu > :nth-child(4)').contains('Quem somos').should('be.visible');
    cy.get('.cabecalho__menu > :nth-child(5)').contains('Contato').should('be.visible');
    cy.get('[href="index.html"]').contains('Sair').should('be.visible');
  })
  it('verifica alertas dos campos "Minha estante, Cadastrar Livros, Quem somos Contato"', function () {
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
  })
  it('Clica no botão sair e retorna para tela de login', function () {
    cy.get('button').click();
    cy.get('[href="index.html"]').click();
    cy.url().should('be.eq', "https://projeto-voluntario.vercel.app/index.html");
    cy.title().should('be.eq', "MPTL-Login");
  })
})