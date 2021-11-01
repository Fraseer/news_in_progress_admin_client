/* eslint-disable no-undef */
describe("User can create an article", () => {
  beforeEach(() => {
    cy.intercept("POST", "**/api/articles**", {
      message: "You have successfully added My Title to the site",
    });
    cy.intercept("POST", "**api/auth/sign_in", {
      fixture: "authenticationSuccess.json",
      headers: { uid: "user@email.com" },
    });
    cy.intercept("GET", "**api/auth/validate_token**", {
      fixture: "authenticationSuccess.json",
    });

    cy.visit("/");
    cy.get("[data-cy=btn-login]").click();
    cy.get("[data-cy=add-article]").click();
  });

  it("is expected to find a page header and 6 input fields", () => {
    cy.get("[data-cy=page-header]").should("contain", "Create Article");
    cy.get("[data-cy=create-article").children().should("have.length", 6);
  });

  it("is expected to input the following data", () => {
    cy.get("[data-cy=title-input]").type("My Title");
    cy.get("[data-cy=journalist-input]").type("Frank FakeName");
    cy.get("[data-cy=lede-input]").type("What going on");
    cy.get("[data-cy=category-input]")
      .click()
      .within(() => {
        cy.contains("Business").click();
      });
    cy.file_upload("[data-cy=article-image]", "dummy.png", "image/png");
    cy.get("[data-cy=body-input]").type("Best story in the world");
    cy.get("[data-cy=submit-button]").click();
    cy.get("[data-cy=article-creation]").should(
      "contain",
      "You have successfully added the article to the site"
    );
  });
});
