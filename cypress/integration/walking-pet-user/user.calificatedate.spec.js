describe("Calificate positibly a date", () => {
  it("Should calificate a date", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="enter-login"]').click();
    cy.get('[data-test-id="login-radio-user"]').click();
    cy.get('[data-test-id="login-email"]').type("mbaellav@uni.pe");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login-success"]').click();
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Ver Mis Citas")
      .click();
    cy.url().should("include", "/datesclient");
    cy.get('[data-test-id="0start-calification"]').click();
    cy.get('[data-test-id="comentary"]').type("Muy buen paseador");
    cy.get('[data-test-id="rating"]').click("right");
    cy.wait(1000);
    cy.get('[data-test-id="comentary-finished"]').click();
    cy.get('[data-test-id="final-calification"]').should(
      "contain",
      "¡Gracias por calificar a"
    );
    cy.wait(1000);
    cy.get('[data-test-id="close-comment"]').click();
  });
});
