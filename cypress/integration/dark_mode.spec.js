describe('Toggle button', () => {
  it('Changes to and from dark mode', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="toggle-darkmode"]')
      .should('be.visible');

    cy.get('.light')
      .should('be.visible');

    cy.get('[data-testid="toggle-darkmode"]')
      .click();

    cy.get('.dark')
      .should('be.visible');

    cy.get('.light')
      .should('not.be.visible');

    cy.get('[data-testid="toggle-darkmode"]')
      .click();

    cy.get('.light')
      .should('be.visible');

    cy.get('.dark')
      .should('not.be.visible');
  })
})