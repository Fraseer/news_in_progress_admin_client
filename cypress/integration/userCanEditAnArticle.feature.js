/* eslint-disable no-undef */
describe("Editor can edit a specific article ", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/articles", {
      fixture: "indexResponseFromAPI.json",
      statusCode: 200,
    });
    cy.intercept("GET", "**api/articles/5**", {
      fixture: "articleExample.json",
      statusCode: 200,
    });
    cy.intercept("PUT", "**/api/articles/5**", {
      message: "You have successfully edited the article",
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
    cy.get("[data-cy=review-articles]").click();
    cy.get("[data-cy=title-5]").click();
  });

  it("is expected to find a page header and 6 input fields", () => {
    cy.get("[data-cy=edit-article").children().should("have.length", 6);
  });

  it("is expected to display the article to be edited", () => {
    cy.get("[data-cy=edit-title]")
      .children()
      .should("have.value", "Pablo Escobar: Colombia sterilises drug");
    cy.get("[data-cy=edit-lede]")
      .children()
      .should(
        "have.value",
        "Scientists are concered about the impact of the rogue non-native "
      );
    cy.get("[data-cy=edit-body]").should(
      "contain.text",
      "A group of hippos - an unwanted legacy following the death of notorious Colombian drug lord Pablo"
    );
  });

  it("is expected to display a message upon submission", () => {
    cy.get("[data-cy=category-input]").as("selectCategory");
    cy.get("[data-cy=edit-title]").type(" lord's hippos");
    cy.get("[data-cy=edit-lede]").type("herd near Escobar's former ranch.");
    cy.get("@selectCategory").click();
    cy.get("@selectCategory").within(() => {
      cy.get("span").contains("Business").click();
    });
    cy.get("[data-cy=submit-btn]").click();
    cy.get("[data-cy=response-message]").should(
      "contain.text",
      "You have successfully edited the article"
    );
  });

  it('is expected to redirect to the list of articles after submission', () => {
    cy.get("[data-cy=submit-btn]").click();
    cy.wait(3000)
    cy.url().should('contain', 'review-articles')
  });
});
