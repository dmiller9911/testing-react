describe('My First Test', function() {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('finds the content "type"', function() {
    cy.get('[data-testid=park] [data-testid=favorite-toggle]')
      .first()
      .click();

    cy.get('[data-testid="Favorites"]').click();
    cy.get('[data-testid=park]').should('have.length', 1);
  });
});
