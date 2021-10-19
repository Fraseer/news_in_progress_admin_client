describe("User can navigate to the app", () => {
  beforeEach(() => {
    // cy.intercept("GET", "**api/articles**", {
    //   fixture: "indexRespondsFromApi.json",
    // });

    cy.visit("/");
  });

  describe("and on the welcome page", () => {
    it("it is expected to display a header", () => {
      cy.get("[data-cy=header]").should("be.visible");
      cy.get("[data-cy=header]").should(
        "contain",
        "News In Progress - Admin Site"
      );
    });

    it("is expected to display a add article button", () => {
      cy.get("[data-cy=add_articles]").should("be.visible");
    });

    it("is expected to display a review articles button", () => {
      cy.get("[data-cy=review_articles]").should("be.visible");
    });
  });

  describe("and after clicking the add article button", () => {
    before(() => {
      cy.get("[data-cy=add-articles]").click()
    });
    it("", () => {});
  });
});
