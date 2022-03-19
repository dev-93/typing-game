describe("example counter app", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/js-counter-test/index.html");
  });

  it('display initial value 0', () => {
      cy.get('#value').invoke("text").should('eq', "1");
  });
});
