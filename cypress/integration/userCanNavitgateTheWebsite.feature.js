describe("User can navigate to the app", () => {
  beforeEach(() => {
    // cy.intercept("GET", "**api/articles**", {
    //   fixture: "indexRespondsFromApi.json",
    // });

    cy.visit("/");
  });

  describe("and on the home page", () => {
    it("it is expected to display a header", () => {
      cy.get("[data-cy=header]").should("be.visible");
      cy.get("[data-cy=header]").should(
        "contain",
        "News In Progress - Admin Site"
      );
    });

    it("is expected to display a add article button", () => {
      cy.get("[data-cy=add-article]").should("be.visible");
    });

    it("is expected to display a review articles button", () => {
      cy.get("[data-cy=review-articles]").should("be.visible");
    });
  });

  describe("and after clicking the add article button", () => {
    it("is expected to go to the create article page", () => {
      cy.get("[data-cy=add-article]").click();
      cy.url().should("eq", "http://localhost:3000/create-article");
    });
  });

  describe("and after clicking the review articles button", () => {
    it("is expected to go to the review articles page", () => {
      cy.get("[data-cy=review-articles]").click();
      cy.url().should("eq", "http://localhost:3000/review-articles");
    });
  });
});
