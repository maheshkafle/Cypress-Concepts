describe('Login Test Suite', ()=>{

    it('should login to OrangeHRM site', ()=> {

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        const myInfoBtn = cy.contains('My Info')
        myInfoBtn.click()

    })
})