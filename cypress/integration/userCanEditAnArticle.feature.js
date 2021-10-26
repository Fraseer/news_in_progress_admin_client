describe("Editor can edit a specific article ", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/articles", {
      fixture: "indexResponseFromAPI.json",
      statusCode: 200,
    });
    cy.intercept("GET", "**api/articles/5**", {
      fixture: "articleExample.json",
      statusCode: 200,
    })
    // cy.intercept("PUT", "**api/articles**", {
    //   fixture: "indexResponseFromAPI.json",
    //   statusCode: 200,
    // }).as("@update-article");

    cy.visit("/");
    cy.get("[data-cy=review-articles]").click()
    cy.get("[data-cy=row-5]").click()
  });

  it("is expected to find a page header and 6 input fields", () => {
    cy.get("[data-cy=edit-article").children().should("have.length", 6);
  });

  // it("is expected input the following data", () => {
  //   cy.get("[data-cy=title-input]").type("My Title");
  //   cy.get("[data-cy=journalist-input]").type("Frank FakeName");
  //   cy.get("[data-cy=lede-input]").type("What going on");
  //   cy.get("[data-cy=category-input]")
  //     .click()
  //     .within(() => {
  //       cy.contains("Business").click();
  //     });
  //   cy.get("[data-cy=body-input]").type("Best story in the world");
  //   cy.get("[data-cy=submit-button]").click();
  //   cy.get("[data-cy=article-creation]").should(
  //     "contain",
  //     "You have successfully added the article to the site"
  //   );
  // });
});
