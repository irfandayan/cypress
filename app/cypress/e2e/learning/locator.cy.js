/// <reference types="cypress" />

describe("learn about locators", () => {
  beforeEach(() => {
    cy.visit("https://www.google.com/");
  });

  it("can locate a button on the page", () => {
    // cy.get(".gLFyf");
    // cy.get("input[title=Search]");
    // cy.get('input[name="q"]');
    cy.get('[name="q"]')
      .should("be.visible")
      .and("have.class", "gLFyf")
      .and("have.value", "")
      .and("have.attr", "maxlength", "2048");
  });
});
