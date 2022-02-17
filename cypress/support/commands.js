import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

Cypress.Commands.add('login', (email, password) => {

  cy.get('.login').click()
  cy.get('#email').type(email)
  cy.get('#passwd').type(password)
  cy.get('#SubmitLogin').click()

})