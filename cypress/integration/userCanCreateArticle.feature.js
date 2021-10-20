describe("User can create an article", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=add-article]").click();
  });

  it("is expected to find the following objects", () => {
    cy.get("[data-cy=page-header]").should("contain", "Create Article");
    cy.get("[data-cy=title-input]").should("be.visible");
    cy.get("[data-cy=journalist-input]").should("be.visible");
    cy.get("[data-cy=lede-input]").should("be.visible");
    cy.get("[data-cy=date-input]").should("be.visible");
    cy.get("[data-cy=body-input]").should("be.visible");
  });
});
