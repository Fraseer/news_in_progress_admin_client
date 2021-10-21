import { first } from "lodash-es";

describe("User can create an article", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=add-article]").click();
  });

  it('is expected to find a page header and 6 input fields', () => {
    cy.get("[data-cy=page-header]").should("contain", "Create Article");
    cy.get("[data-cy=create-article").children().should("have.length", 6)
  });

  it("is expected input the following data", () => {
    cy.get("[data-cy=title-input]").type("My Title");
    cy.get("[data-cy=journalist-input]").type("Frank FakeName");
    cy.get("[data-cy=lede-input]").type("What going on");
    cy.get("[data-cy=category-input]").click().within(() => {
      cy.contains("Business").click();
    })
    cy.get("[data-cy=body-input]").type("Best story in the world");
    cy.get("[data-cy=submit-button]").click();
  });
});

// it("is expected to switch to Swedish when Swedish is manually selected", () => {
//   cy.get("[data-cy=language-selector]")
//     .click()
//     .within(() => {
//       cy.contains("Swedish").click();
//     });
//   cy.get("[data-cy=category-list]").should("contain.text", "Sektioner");
// });