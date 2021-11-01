/* eslint-disable no-undef */
import "cypress-file-upload";

Cypress.Commands.add("file_upload", (selector, filename, type) => {
  cy.get(selector).then((subject) => {
    cy.window().then((win) => {
      cy.fixture(filename, "base64")
        .then(Cypress.Blob.base64StringToBlob)
        .then((blob) => {
          const el = subject[0];
          const testFile = new win.File([blob], filename, { type: type });
          const dataTransfer = new win.DataTransfer();
          dataTransfer.items.add(testFile);
          el.files = dataTransfer.files;
          cy.wrap(subject).trigger("change", { force: true });
        });
    });
  });
});