describe("User Profile test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="enter-login"]').click();
    cy.get('[data-test-id="login-radio-user"]').click();
    cy.get('[data-test-id="login-email"]').type("mbaellav@uni.pe");
    cy.get('[data-test-id="login-password"]').type("123");
    cy.get('[data-test-id="login-success"]').click();
    cy.get('[data-test-id="open-menu"]').click();
    cy.get('[data-test-id="list-menu"]')
      .children()
      .contains("Ver Perfil")
      .click();
  });

  it("Should edit profile", () => {
    cy.get('[data-test-id="user-profile-edit"]').click();
    cy.get('[data-test-id="edit-user-district"]').click();
    cy.get('[data-test-id="Miraflores"]').click();
    cy.get('[data-test-id="edit-user-address"]')
      .clear()
      .type("Calle Sarmientos 123");
    cy.get('[data-test-id="edit-user-phone"]').clear().type("987123654");
    //
    // cy.intercept({
    //   method: "GET",
    //   url: "https://widget.cloudinary.com/info/walkingpet.json?sources[]=local&sources[]=camera&uploadPreset=1&uploadPrefix=0&secure=1&folder=0&maxFiles=0&cropping=0&inlineMode=0&defaultSource=1&multiple=1&googleApiKey=0&dropboxAppKey=0&facebookAppId=0&instagramServer=0&shutterstockServer=0&istockServer=0&gettyServer=0&searchBySites=0&searchByRights=0&publicId=0&autoMinimize=0&requirePrepareParams=0&useTagsCallback=0&useUploadPresetsCallback=0&useMetadataCallback=0&text=0&language=1&showAdvancedOptions=0&showPoweredBy=1&showCompletedButton=0&showInsecurePreview=0&window=1&sourceBg=1&windowBorder=1&tabIcon=1&inactiveTabIcon=1&menuIcons=1&link=1&action=1&inProgress=1&complete=1&error=1&textDark=1&textLight=1&fonts=1&croppingShowBackButton=1&croppingCoordinatesMode=1&croppingDefaultSelectionRatio=1&croppingShowDimensions=0&theme=0&tabInsideWidget=1&apiKey=0&usePreBatchCallback=0&debug=0&showUploadMoreButton=1&singleUploadAutoClose=1&showSkipCropButton=1&version=2-1.54.98&browser=Chrome-99&device=desktop&os=Windows-10&source=uw",
    // }).as("Alias");
    cy.get('[data-test-id="choose-file"]').click();
    // cy.wait("@Alias");
    cy.get("iframe")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .and("be.visible")
      .then(cy.wrap)
      .find('input[type="file"]')
      .selectFile("cypress/fixtures/user-photo.jpg");
    cy.get("iframe")
      .its("0.contentDocument.body")
      .find('[data-test="queue-done"]')
      .click();
    //
    cy.get('[data-test-id="edit-user-finish"]').click();
    cy.get('[data-test-id="info-user-address"]').should(
      "contain",
      "Calle Sarmientos 123"
    );
    cy.get('[data-test-id="info-user-district"]').should(
      "contain",
      "Miraflores"
    );
    cy.get('[data-test-id="info-user-phone"]').should("contain", "987123654");
    cy.wait(2000);
  });

  it("Should create a pet info", () => {
    cy.get('[data-test-id="create-pet"]').click();
    cy.get('[data-test-id="pet-name"]').type("Poppy");
    cy.get('[data-test-id="pet-age"]').type(1);
    cy.get('[data-test-id="open-sex"]').click();
    cy.get('[data-test-id="sex-male"]').click();
    cy.get('[data-test-id="open-breed"]').click();
    cy.get('[data-test-id="Beagle"]').click();
    cy.get('[data-test-id="open-size"]').click();
    cy.get('[data-test-id="size-small"]').click();
    cy.get('[data-test-id="open-nature"]').click();
    cy.get('[data-test-id="nature-friendly"]').click();
    cy.get('[data-test-id="additional-info"]').type("Es muy jugueton");
    cy.get('[data-test-id="choose-file"]').click();
    cy.get("iframe")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .and("be.visible")
      .then(cy.wrap)
      .find('input[type="file"]')
      .selectFile("cypress/fixtures/beagle.jpg");
    cy.get("iframe")
      .its("0.contentDocument.body")
      .find('[data-test="queue-done"]')
      .click();
    cy.get('[data-test-id="create-finished"]').click();
    cy.wait(1000);
    cy.get('[data-test-id="list-pets"]')
      .children()
      .last()
      .should("contain", "1 año")
      .and("contain", "Macho")
      .and("contain", "Beagle")
      .and("contain", "Pequeño")
      .and("contain", "Amigable");
  });

  it("Should edit pet info", () => {
    cy.get('[data-test-id="list-pets"]')
      .children()
      .last()
      .children()
      .first()
      .click();
    cy.get('[data-test-id="edit-age"]').clear().type(2);
    cy.get('[data-test-id="edit-size"]').click();
    cy.get('[data-test-id="size-medium"]').click();
    cy.get('[data-test-id="edit-nature"]').click();
    cy.get('[data-test-id="nature-shy"]').click();
    cy.get('[data-test-id="edit-info"]')
      .clear()
      .type("Se volvio timido desde el accidente");
    cy.get('[data-test-id="choose-file"]').click();
    cy.get("iframe")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .and("be.visible")
      .then(cy.wrap)
      .find('input[type="file"]')
      .selectFile("cypress/fixtures/beagle-mediano.jpg");
    cy.get("iframe")
      .its("0.contentDocument.body")
      .find('[data-test="queue-done"]')
      .click();
    cy.get('[data-test-id="edit-finished"]').click();
    cy.wait(1000);
    cy.get('[data-test-id="list-pets"]')
      .children()
      .last()
      .should("contain", "2 años")
      .and("contain", "Macho")
      .and("contain", "Beagle")
      .and("contain", "Mediano")
      .and("contain", "Tímido");
    cy.wait(1000);
  });

  it("Should delete pet info", () => {
    cy.get('[data-test-id="list-pets"]')
      .children()
      .last()
      .children()
      .first()
      .click();
    cy.get('[data-test-id="delete-pet"]').click();
    cy.wait(1000);
    cy.get('[data-test-id="delete-finished"]').click();
    cy.wait(1000);
    cy.get('[data-test-id="list-pets"]')
      .children()
      .last()
      .should("contain", "3 años")
      .and("contain", "Hembra")
      .and("contain", "Cocker")
      .and("contain", "Mediano")
      .and("contain", "Amigable");
    cy.wait(1000);
  });
});
