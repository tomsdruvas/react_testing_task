describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('Do the arithmetical operations update the display with the result of the operation?', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '5')
  })
  it('Can multiple operations be chained together?', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '9')
  })
  it('Decimal answer', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '0.5')
  })
  it('Positive', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '5')
  })
  it('Negative', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-1')
  })
  it('Large number', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '444444')
  })
  it('Divide by zero', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();

    cy.get('#number0').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '')
  })


})