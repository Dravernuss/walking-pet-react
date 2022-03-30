describe("Report a date", () => {
  it("Should report a date", () => {
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
    cy.get('[data-test-id="1start-calification"]').click();
    cy.wait(1000);
    cy.get('[data-test-id="report-start"]').click();
    cy.get('[data-test-id="rating"]').click("left");
    cy.get('[data-test-id="report"]').type("Mi perro termino muy débil >:/");
    cy.get('[data-test-id="choose-file"]').click();
    cy.get("iframe")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .and("be.visible")
      .then(cy.wrap)
      .find('input[type="file"]')
      .selectFile("cypress/fixtures/beagle-cansado.jpg");
    cy.get("iframe")
      .its("0.contentDocument.body")
      .find('[data-test="queue-done"]')
      .click();
    cy.wait(1000);
    cy.get('[data-test-id="report-end"]').click();
    cy.get('[data-test-id="report-received"]').should(
      "contain",
      "Un administrador revisará tu reporte y se comunicará contigo lo antes posible."
    );
    cy.wait(1000);
    cy.get('[data-test-id="report-finished"]').click();
  });
});
