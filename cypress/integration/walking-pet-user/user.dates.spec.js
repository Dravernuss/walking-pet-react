describe("User Dates test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="enter-login"]').click();
    cy.get('[data-test-id="login-radio-user"]').click();
    cy.get('[data-test-id="login-email"]').type("mbaellav@uni.pe");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login-success"]').click();
  });

  it("Should generate a date", () => {
    cy.wait(1000);
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
    cy.get('[data-test-id="date-date"]').type("2022-04-05");
    cy.get('[data-test-id="date-hour"]').type("15:30");
    cy.get('[data-test-id="date-time"]').click();
    cy.get('[data-test-id="1"]').click();
    cy.get('[data-test-id="Princesa"]').click();
    cy.get('[data-test-id="reserve-date"]').click();
    cy.url().should("include", "/dateinfo");
    cy.get('[data-test-id="date"]').should("contain", "05-04-2022");
    cy.get('[data-test-id="hour"]').should("contain", "3:30");
    cy.get('[data-test-id="time"]').should("contain", "1");
    cy.get('[data-test-id="pets"]').children().should("contain", "Princesa");
    cy.get('[data-test-id="return-principalpage"]').click();
    cy.url().should("include", "/principalpage");
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Ver Mis Citas")
      .click();
    cy.url().should("include", "/datesclient");
    cy.get('[data-test-id="user-list-dates"]')
      .children()
      .last()
      .should("contain", "05-04-2022");
  });

  it("Should view details", () => {
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
    cy.get('[data-test-id="details"]')
      .should("contain", "05-04-2022")
      .and("contain", "3:30")
      .and("contain", "1")
      .and("contain", "Princesa");
    cy.wait(2000);
    cy.get('[data-test-id="volver"]').click();
  });

  it("Should visit walker profile", () => {
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
    cy.wait(2000);
    cy.get('[data-test-id="walkerprofile"]').click();
    cy.url().should("include", "/walker");
  });
});
