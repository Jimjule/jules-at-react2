describe('Blog posts', () => {
  it('Opens post on click', () => {
    cy.visit('http://localhost:3000/blog');

    cy.get('[data-testid="Here in my Blogs"]')
      .should('be.visible');

    cy.get('[data-testid="Here in my Blogs_0_preview"]')
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