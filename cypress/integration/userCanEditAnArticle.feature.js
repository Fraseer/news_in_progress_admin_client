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
    cy.intercept("PUT", "**/api/articles**", {
      message: "You have successfully added My Title to the site",
    });

    cy.visit("/");
    cy.get("[data-cy=review-articles]").click();
    cy.get("[data-cy=title-5]").click();
  });

  it("is expected to find a page header and 5 input fields", () => {
    cy.get("[data-cy=edit-article").children().should("have.length", 5);
  });

  it.only("is expected to display the article to be edited", () => {
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

  it("is expected to contain the following editable data", () => {
    cy.get("[data-cy=edit-title]").type(" lord's hippos");
    cy.get("[data-cy=edit-lede]").type("herd near Escobar's former ranch.");
    // cy.get("[data-cy=category-input]")
    //   .click()
    //   .within(() => {
    //     cy.contains("Business").click();
    //   });
    cy.get("[data-cy=edit-body]").should("include.text", "A group of hippos");
    // cy.get("[data-cy=submit-button]").click();
    // cy.get("[data-cy=edit-article]").should(
    //   "contain",
    //   "You have successfully editted the article"
    // );
  });
});
