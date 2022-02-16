describe('Page Reload Test Suite', ()=> {

    it('Verify page reload', ()=> {

        cy.visit('https://www.freshworks.com')

        cy.contains('Customers')
        .click()

        cy.reload({timeout: 5000}) 
        .contains('Customers')
        .should('be.visible')
        

    })
})