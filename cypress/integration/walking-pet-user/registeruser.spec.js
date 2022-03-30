describe("User registration", () => {
  it("Should register new user properly", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="enter-register"]').click();
    cy.get('[data-test-id="register-user"]').click();
    cy.get('[data-test-id="register-name"]').type("Juan");
    cy.get('[data-test-id="register-lastname"]').type("Pérez");
    cy.get('[data-test-id="register-email"]').type("juanperez@gmail.com");
    cy.get('[data-test-id="register-password"]').type("123");
    cy.get('[data-test-id="register-password-confirm"]').type("123");
    cy.get('[data-test-id="register-phone"]').type(948512632);
    cy.get('[data-test-id="register-select"]').click();
    cy.get('[data-test-id="San Isidro"]').click();
    cy.get('[data-test-id="register-address"]').type("Calle San Genaro 322");
    cy.get('[data-test-id="register-success"]').click();
    cy.url().should("include", "/registerSuccess");
    cy.wait(1000);
    cy.get('[data-test-id="register-done"]').click();
    cy.url().should("include", "/");
  });
});
