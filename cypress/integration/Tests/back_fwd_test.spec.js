describe('Browser Back and Forward Simulation Test Suite', ()=>{

    it('Verify Browser back and forward simulation', ()=> {

        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers').click()
        .url()
        .should('contain', 'customers')

        // cy.go('back')
        cy.go(-1)
        cy.wait(3000)
        // cy.go('forward')
        cy.go(1)
        cy.clearCookies()

    })
})