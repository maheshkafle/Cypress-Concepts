describe('Automation Practice Ecommerce Site Test Suite', ()=> {

    beforeEach(()=>{
        cy.visit('http://automationpractice.com')
        cy.login('smarshqa@gmail.com', '@Nepal123')

    })

    it('Verify user can login', ()=> {

        cy.url().should('include', 'controller=my-account')
        cy.get('.myaccount-link-list a').should('have.length', 5)


    })

    it('Verify user can navigate back to home page after login', ()=> {

        cy.get('.icon-chevron-left').last().click()
    })
})