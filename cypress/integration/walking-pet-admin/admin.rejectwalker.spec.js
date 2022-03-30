describe("Admin test", () => {
  it("Reject a new walker registration", () => {
    cy.visit("http://localhost:3000/admin");
    cy.get('[data-test-id="login-email"]').type("admin.test@gmail.com");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login"]').click();
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Registro de Paseadores")
      .click();
    cy.wait(1000);
    cy.get('[data-test-id="list-walkers-admin"]')
      .contains("Sin Revisar")
      .parent()
      .children()
      .last()
      .children()
      .click();
    cy.get('[data-test-id="admin-comment"]').type(
      "Su perfil no cumple con los requisitos para ser parte de nuestra comunidad de paseadores"
    );
    cy.get('[data-test-id="reject"]').click();
    cy.get('[data-test-id="reject-end"]').click();
    cy.get('[data-test-id="list-walkers-admin"]');
    cy.wait(1000);
    cy.should("contain", "Rechazado");
  });
});
