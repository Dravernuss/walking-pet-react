describe("User test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="enter-login"]').click();
    cy.get('[data-test-id="login-radio-user"]').click();
    cy.get('[data-test-id="login-email"]').type("mbaellav@uni.pe");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login-success"]').click();
  });

  afterEach("Should end session", () => {
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Cerrar Sesión")
      .click();
    cy.url().should("include", "/");
  });

  it("should logged user properly", () => {
    cy.url().should("include", "/principalpage");
  });

  it("Should render walkers properly", () => {
    cy.get('[data-test-id="walker-list"]')
      .children()
      .should("to.have.length.of.at.most", 1);
  });

  it("Should render walkers in district selected", () => {
    cy.get('[data-test-id="district-list"]')
      .children()
      .contains("Miraflores")
      .click();
    cy.get('[data-test-id="district-select-title"]').should(
      "contain",
      "Miraflores"
    );
  });

  // navbar TEST
  it("Should go principal page", () => {
    cy.get('[data-test-id="button-logo"]').click();
    cy.url().should("include", "/principalpage");
  });

  it("Should visit profile", () => {
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Ver Perfil")
      .click();
    cy.url().should("include", "/clientprofile");
  });

  it("Should visit search walkers", () => {
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Buscar Paseador")
      .click();
    cy.url().should("include", "/principalpage");
  });

  it("Should visit view my dates", () => {
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Ver Mis Citas")
      .click();
    cy.url().should("include", "/datesclient");
  });
});
