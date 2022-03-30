describe("Walker test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="enter-login"]').click();
    cy.get('[data-test-id="login-radio-walker"]').click();
    cy.get('[data-test-id="login-email"]').type("esteban16.rodas@gmail.com");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login-success"]').click();
  });

  it("should logged user properly", () => {
    cy.url().should("include", "/walkerprofile");
  });

  // navbar TEST
  it("Should go principal page", () => {
    cy.get('[data-test-id="button-logo"]').click();
    cy.url().should("include", "/");
  });

  it("Should visit profile", () => {
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Ver Perfil")
      .click();
    cy.url().should("include", "/walkerprofile");
  });

  it("Should visit view my dates", () => {
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Ver Mis Citas")
      .click();
    cy.url().should("include", "/dateswalker");
  });
});
