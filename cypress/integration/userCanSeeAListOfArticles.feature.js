/* eslint-disable no-undef */
describe("A list of articles displayed on the review page", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/articles", {
      fixture: "indexResponseFromAPI.json",
      statusCode: 200,
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
  });

  it("is expected to display five different articles in the table", () => {
    cy.get("[data-cy=review-table-body]").children().should("have.length", 5);
  });

  it("is expected to display a table with the following headers", () => {
    cy.get("[data-cy=review-table]").within(() => {
      cy.get("[data-cy=table-headers]").within(() => {
        cy.get("[data-cy=id]").should("contain", "Article ID");
        cy.get("[data-cy=title]").should("contain", "Title");
        cy.get("[data-cy=journalist]").should("contain", "Journalist");
        cy.get("[data-cy=created-at]").should("contain", "Created At");
        cy.get("[data-cy=published]").should("contain", "Published Status");
      });
    });
  });

  it("is expected that the first article in the table will have", () => {
    cy.get("[data-cy=row-1]").within(() => {
      cy.get("[data-cy=id-1]").should("contain", 1);
      cy.get("[data-cy=title-1]").should("contain", "Servicing and repairing electric cars requires new skills");
      cy.get("[data-cy=journalist-1]").should("contain", "Journalist");
      cy.get("[data-cy=created-at-1]").should("contain", "2021-10-05");
      cy.get("[data-cy=published-1]").should("be.visible");
    });
  });

  it.only('is expected to change the published status when the slider is clicked', () => {
    cy.get("[data-cy=published-5]").children().first().click()
  });
});
