describe('Blog posts', () => {
  it('Opens post on click', () => {
    cy.visit('http://localhost:3001/blog');

    cy.get('[data-testid="thang"]')
      .should('be.visible');

    cy.get('[data-testid="thang_0_preview"]')
      .should('be.visible');

    cy.get('[data-testid="thang_open"]')
      .click();

    cy.get('[data-testid="thang_0_preview"]')
      .should('not.be.visible');

    cy.get('[data-testid="thang_0_full"]')
      .should('be.visible');

    cy.get('[data-testid="thang_0_container"]')
      .should('be.visible');
  })
})