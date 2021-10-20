describe("User can create an article", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=add-article]").click();
  });

  it('is expected that there are 6 input fields', () => {
    cy.get("[data-cy=create-article").children().should("have.length", 6)
  });

  it("is expected to find the following objects", () => {
    cy.get("[data-cy=page-header]").should("contain", "Create Article");
    cy.get("[data-cy=title-input]").should("be.visible");
    cy.get("[data-cy=journalist-input]").should("be.visible");
    cy.get("[data-cy=lede-input]").should("be.visible");
    cy.get("[data-cy=category-input]").should("be.visible");
    cy.get("[data-cy=body-input]").should("be.visible");
    cy.get("[data-cy=submit-button]").should("be.visible");
  });
});
