describe('Launch Test Suite', ()=> {

    it('App Testing', ()=>{

        cy.visit('https://www.freshworks.com/')
        const element = cy.contains('Customers')
        element.click()
        cy.url().should('include', '/customers')
    })
})