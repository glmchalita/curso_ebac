/// <reference types="cypress"/>

describe('Testes para controles dos contatos', () => {

  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get('div[class*=contato]', {timeout: 10000}).as('contacts')
  })
  
  it('Deve adicionar um novo contato', () => {
    cy.get('@contacts').should('have.length', 3)
    cy.get('input[placeholder*="Nome"]').type('Guilherme')
    cy.get('input[placeholder*="E-mail"]').type('guilherme@gmail.com')
    cy.get('input[placeholder*="Telefone"]').type('11912341234{enter}')
    cy.get('@contacts').should('have.length', 4)
  })

  it('Deve remover um contato', () => {
    cy.get('@contacts').should('have.length', 4)
    cy.contains('.contato', 'Guilherme').find('.delete').click();
    cy.get('@contacts').should('have.length', 3)
  })

  it('Deve editar um contato', () => {
    cy.get('@contacts').should('have.length', 3)
    cy.contains('.contato', 'ian').find('.edit').click();
    cy.get('input[placeholder*="Nome"]').clear().type('Gian Souza{enter}')
    cy.get('li').should('contain', 'Gian Souza')
  })
})