describe("Admin test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/admin");
    cy.get('[data-test-id="login-email"]').type("admin.test@gmail.com");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login"]').click();
  });

  // navbar TEST
  it("Should go reserved tours", () => {
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Paseos Reservados")
      .click();
    cy.url().should("include", "/reservedtours");
    cy.wait(1000);
    cy.get('[date-test-id="list-dates-admin"]').should(
      "to.have.length.of.at.most",
      1
    );
  });
  it("Should go walker registrations", () => {
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Registro de Paseadores")
      .click();
    cy.url().should("include", "/walkerregistration");
    cy.wait(1000);
    cy.get('[data-test-id="list-walkers-admin"]').should(
      "to.have.length.of.at.most",
      1
    );
  });

  it("Should visit reports", () => {
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Reportes y Quejas")
      .click();
    cy.url().should("include", "/reports");
  });

  it("Should end session", () => {
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Cerrar Sesión")
      .click();
    cy.url().should("include", "/");
  });
});
