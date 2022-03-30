describe("Walker registration", () => {
  it("Should register new user properly", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="enter-register"]').click();
    cy.get('[data-test-id="register-walker"]').click();
    cy.get('[data-test-id="register-name"]').type("Jorge");
    cy.get('[data-test-id="register-lastname"]').type("Marin");
    cy.get('[data-test-id="register-email"]').type("jorgemarin@gmail.com");
    cy.get('[data-test-id="register-password"]').type("123");
    cy.get('[data-test-id="register-password-confirm"]').type("123");
    cy.get('[data-test-id="register-phone"]').type(931564252);
    cy.get('[data-test-id="register-select"]').click();
    cy.get('[data-test-id="San Miguel"]').click();
    cy.get('[data-test-id="register-address"]').type("Calle Las Malvinas 1214");
    cy.get('[data-test-id="register-success"]').click();
    cy.url().should("include", "/registerWalker");
    cy.get('[data-test-id="choose-file"]').click();
    cy.get("iframe")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .and("be.visible")
      .then(cy.wrap)
      .find('input[type="file"]')
      .selectFile("cypress/fixtures/dni.jpg");
    cy.get("iframe")
      .its("0.contentDocument.body")
      .find('[data-test="queue-done"]')
      .click();
    cy.wait(1000);
    cy.get('[data-test-id="next"]').click();
    cy.get('[data-test-id="text-1"]').type(
      "Llevo 4 años paseando mascotas en la ciudad de Lima."
    );
    cy.get('[data-test-id="text-2"]').type("Trataria de tranquilizarlo.");
    cy.get('[data-test-id="text-3"]').type(
      "Bozal de seguridad, agua para el camino y algo de comida."
    );
    cy.get('[data-test-id="yes"]').click();
    cy.get('[data-test-id="choose-file-2"]').click();
    cy.get("iframe")
      .its("1.contentDocument.body")
      .should("not.be.empty")
      .and("be.visible")
      .then(cy.wrap)
      .find('input[type="file"]')
      .selectFile("cypress/fixtures/walker-photo.jpg");
    cy.get("iframe")
      .its("1.contentDocument.body")
      .find('[data-test="queue-done"]')
      .click();
    cy.wait(1000);
    cy.get('[ data-test-id="register-finished"]').click();
    cy.get('[ data-test-id="thank-join"]').should(
      "contain",
      "Un administrador revisará tu solicitud y se te enviará un correo electrónico de confirmación lo más pronto posible."
    );
    cy.wait(1000);
    cy.get('[ data-test-id="return"]').click();
    cy.url().should("include", "/");
  });
});
