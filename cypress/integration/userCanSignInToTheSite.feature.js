describe("A login view render on site load", () => {
  beforeEach(() => {
    cy.intercept("POST", "**api/auth/sign_in", {
      fixture: "authenticationSuccess.json",
      headers: { uid: "user@email.com" },
    });
    cy.intercept("GET", "**api/auth/validate_token**", {
      fixture: "authenticationSuccess.json",
    });

    cy.visit("/");
  });

  it("is expected to have two input fields and a submit button", () => {
    cy.get("[data-cy=sign-in-form]").children().should("have.length", 3);
  });

  describe("when the sign in is successful", () => {
    beforeEach(() => {
      cy.get("[data-cy=email-input]").type("user@email.com");
      cy.get("[data-cy=password-input]").type("password");
      cy.get("[data-cy=btn-login]").click();
    });
    it("is expected to display a success message and return to home page", () => {
      cy.get("[data-cy=sign-in-toast]").within(() => {
        cy.contains("Successful Login");
      });
      cy.get("[data-cy=add-article]").should("be.visible");
      cy.get("[data-cy=review-articles]").should("be.visible");
    });
  });

  describe("When sign in is unsuccessful", () => {
    beforeEach(() => {
      cy.intercept("POST", "**api/auth/sign_in", {
        statusCode: 401,
        fixture: "authenticationFailure.json",
      });
      cy.intercept("GET", "**api/auth/validate_token**", {
        statusCode: 401,
        fixture: "authenticationFailure.json",
      });
      cy.get("[data-cy=email-input]").type("user@email.com");
      cy.get("[data-cy=password-input]").type("wrongPassword");
      cy.get("[data-cy=btn-login]").click();
    });

    it("it is expected to display a error message", () => {
      cy.get("[data-cy=sign-in-toast]").within(() => {
        cy.contains("Invalid login credentials. Please try again.");
      });
    });
  });
});
