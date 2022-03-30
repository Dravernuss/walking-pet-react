describe("Reports test", () => {
  it("Should visit reports", () => {
    cy.visit("http://localhost:3000/admin");
    cy.get('[data-test-id="login-email"]').type("admin.test@gmail.com");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login"]').click();
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Reportes y Quejas")
      .click();
    cy.wait(1000);
    cy.get('[data-test-id="reports-list"]')
      .children()
      .last()
      .children()
      .last()
      .children()
      .click();
    cy.get('[data-test-id="message-walker"]').type(
      "Tenga mas cuidado para la proxima"
    );
    cy.get('[data-test-id="send-walker"]').click();
    cy.get('[data-test-id="walker-yes"]').click();
    cy.get('[data-test-id="message-user"]').type(
      "Disculpe los inconvenientes, ya nos hemos comunicado con el paseador."
    );
    cy.get('[data-test-id="send-user"]').click();
    cy.get('[data-test-id="user-yes"]').click();
    cy.wait(1500);
    cy.get('[data-test-id="report-finished"]').click();
    cy.wait(4000);
    cy.get('[data-test-id="reports-list"]')
      .children()
      .last()
      .should("contain", "Revisado");
  });
});
