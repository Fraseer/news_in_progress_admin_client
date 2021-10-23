describe("A list of articles displayed on the review page", () => {
  beforeEach(() => {
    // cy.intercept("GET", "**api/articles/**", {
    //   fixture: "indexResponseFromAPI.json",
    //   statusCode: 200,
    // });

    cy.visit("/");
    cy.get("[data-cy=review-articles]").click();
  });

  it("is expected to display a table with the following headers", () => {
    cy.get("[data-cy=review-table]").within(() => {
      cy.get("[data-cy=table-headers]").within(() => {
        cy.get("[data-cy=title]").should("contain", "Title");
        cy.get("[data-cy=journalist]").should("contain", "Journalist");
        cy.get("[data-cy=lede]").should("contain", "Lede");
        cy.get("[data-cy=category]").should("contain", "Category");
        cy.get("[data-cy=body]").should("contain", "Body");
        cy.get("[data-cy=published]").should("contain", "Published Status");
      });
    });
  });
});
