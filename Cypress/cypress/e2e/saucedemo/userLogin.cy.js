
describe('User Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('should allow the user to login', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include','/inventory.html')
  })
})

