describe("A login view render on site load", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/articles", {
      fixture: "indexResponseFromAPI.json",
      statusCode: 200,
    });

    cy.visit("/");
  });

  it("is expected to have two input fields and a submit button", () => {
    cy.get("[data-cy=sign-in-form]").children().should("have.length", 3);
  });
});
