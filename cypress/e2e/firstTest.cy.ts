/// <reference types="cypress" />

describe("Hero section", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4321/");
  });

  it("should display the correct name in the hero title", () => {
    cy.get('[data-testid="hero-title"]')
      .should("be.visible")
      .invoke("text")
      .should("match", /Rob Schlenker/);
  });
});
