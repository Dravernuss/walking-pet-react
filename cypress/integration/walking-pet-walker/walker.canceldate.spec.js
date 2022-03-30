describe("Walker cancel date test", () => {
  it("Should cancel date", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="enter-login"]').click();
    cy.get('[data-test-id="login-radio-walker"]').click();
    cy.get('[data-test-id="login-email"]').type("esteban16.rodas@gmail.com");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login-success"]').click();
    cy.get('[data-test-id="walker-dates"]').click();
    cy.wait(2000);
    cy.contains("Confirmado")
      .parent()
      .children()
      .last()
      .contains("Detalles")
      .click();
    cy.get('[data-test-id="cancel-date"]').click();
    cy.wait(1000);
    cy.get('[data-test-id="cancel-true"]').click();
    cy.get('[data-test-id="walker-list-dates"]').should("contain", "Cancelado");
  });
});
