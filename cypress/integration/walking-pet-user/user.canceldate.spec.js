describe("User Profile test", () => {
  it("Should cancel date", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="enter-login"]').click();
    cy.get('[data-test-id="login-radio-user"]').click();
    cy.get('[data-test-id="login-email"]').type("mbaellav@uni.pe");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login-success"]').click();
    cy.get('[data-test-id="district-list"]')
      .children()
      .contains("Miraflores")
      .click();
    cy.get('[data-test-id="walker-list"]')
      .children()
      .first()
      .children(".btn")
      .click();
    cy.url().should("include", "/walker");
    cy.get('[data-test-id="ask-date"]').click();
    cy.url().should("include", "/askfordate");
    cy.get('[data-test-id="date-date"]').type("2022-04-07");
    cy.get('[data-test-id="date-hour"]').type("16:00");
    cy.get('[data-test-id="date-time"]').click();
    cy.get('[data-test-id="2"]').click();
    cy.get('[data-test-id="Princesa"]').click();
    cy.get('[data-test-id="reserve-date"]').click();
    cy.get('[data-test-id="return-principalpage"]').click();
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Ver Mis Citas")
      .click();
    cy.url().should("include", "/datesclient");
    cy.get('[data-test-id="user-list-dates"]')
      .children()
      .last()
      .children()
      .last()
      .click();
    cy.get('[data-test-id="cancel-date"]').click();
    cy.wait(1000);
    cy.get('[data-test-id="cancel-accepted"]').click();
    cy.wait(2000);
    cy.get('[data-test-id="user-list-dates"]')
      .children()
      .last()
      .should("contain", "Cancelado");
  });
});
