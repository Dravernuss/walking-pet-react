describe("Walker accept date test", () => {
  it("Should accept date", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="enter-login"]').click();
    cy.get('[data-test-id="login-radio-walker"]').click();
    cy.get('[data-test-id="login-email"]').type("esteban16.rodas@gmail.com");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login-success"]').click();
    cy.get('[data-test-id="walker-dates"]').click();
    cy.url().should("include", "/dateswalker");
    cy.wait(2000);
    cy.contains("Sin Confirmar")
      .parent()
      .children()
      .last()
      .contains("✅")
      .click();
    cy.get('[data-test-id="date-accept-true"]').click();
    cy.get('[data-test-id="walker-list-dates"]').should(
      "contain",
      "Confirmado"
    );
  });
});
