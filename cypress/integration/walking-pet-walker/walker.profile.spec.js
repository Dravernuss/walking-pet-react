describe("Walker test", () => {
  it("Should edit profile", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="enter-login"]').click();
    cy.get('[data-test-id="login-radio-walker"]').click();
    cy.get('[data-test-id="login-email"]').type("esteban16.rodas@gmail.com");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login-success"]').click();
    cy.get('[data-test-id="walker-profile-edit"]').click();
    cy.get('[data-test-id="edit-walker-price"]').clear().type(18);
    cy.get('[data-test-id="edit-walker-district"]').click();
    cy.get('[data-test-id="list-districts"]').children().first().click();
    cy.get('[data-test-id="edit-walker-district"]').click();
    cy.get('[data-test-id="edit-walker-greeting"]')
      .clear()
      .type("Tu mascota la pasará increible!!");
    cy.get('[data-test-id="edit-walker-presentation"]')
      .clear()
      .type("Tengo mucha experiencia con los perros, los adoro");
    cy.get('[data-test-id="choose-file"]').click();
    cy.get("iframe")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .and("be.visible")
      .then(cy.wrap)
      .find('input[type="file"]')
      .selectFile("cypress/fixtures/walker-photo-2.jpg");
    cy.get("iframe")
      .its("0.contentDocument.body")
      .find('[data-test="queue-done"]')
      .click();
    cy.get('[data-test-id="edit-walker-available"]').click();
    cy.get('[data-test-id="edit-walker-finish"]').click();
    cy.reload();
    cy.get('[data-test-id="walker-price"]').should("contain", "18");
    cy.get('[data-test-id="walker-greeting"]').should(
      "contain",
      "Tu mascota la pasará increible!!"
    );
    cy.get('[data-test-id="walker-presentation"]').should(
      "contain",
      "Tengo mucha experiencia con los perros, los adoro"
    );
    cy.get('[data-test-id="walker-districts"]')
      .children()
      .should("contain", "Miraflores");
    cy.get('[data-test-id="walker-available"]').should("contain", "DISPONIBLE");
  });
});
