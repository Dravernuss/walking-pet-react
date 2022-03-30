describe("Walker dates test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="enter-login"]').click();
    cy.get('[data-test-id="login-radio-walker"]').click();
    cy.get('[data-test-id="login-email"]').type("esteban16.rodas@gmail.com");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login-success"]').click();
  });

  it("Should view walker dates", () => {
    cy.get('[data-test-id="walker-dates"]').click();
    cy.url().should("include", "/dateswalker");
    cy.wait(2000);
    cy.get('[data-test-id="walker-list-dates"]').should(
      "to.have.length.of.at.most",
      1
    );
  });

  it("Should view details", () => {
    cy.get('[data-test-id="walker-dates"]').click();
    cy.url().should("include", "/dateswalker");
    cy.get('[data-test-id="walker-list-dates"]')
      .children()
      .last()
      .children()
      .last()
      .children()
      .last()
      .click();
    cy.wait(2000);
    cy.get('[data-test-id="details"]').should("contain", "Detalles del Paseo");
    cy.get('[data-test-id="volver"]').click();
  });

  it("Should visit client profile from details", () => {
    cy.get('[data-test-id="walker-dates"]').click();
    cy.url().should("include", "/dateswalker");
    cy.get('[data-test-id="walker-list-dates"]')
      .children()
      .last()
      .children()
      .last()
      .children()
      .last()
      .click();
    cy.wait(2000);
    cy.get('[data-test-id="clientprofile"]').click();
    cy.url().should("include", "/client");
  });
});
