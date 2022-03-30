describe("Render reserved tours", () => {
  it("Should render reserved tours", () => {
    cy.visit("http://localhost:3000/admin");
    cy.get('[data-test-id="login-email"]').type("admin.test@gmail.com");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login"]').click();
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Paseos Reservados")
      .click();
    cy.wait(1000);
    cy.get('[data-test-id="0details"]').click();
    cy.wait(1000);
    cy.get('[data-test-id="modal"]').should("contain", "Detalles del Paseo");
    cy.get('[data-test-id="volver"]').click();
  });
});
