describe('Handle Dropdown Test Suite', ()=> {

    it('Verify dropdown handle', ()=> {

        cy.visit("https://www.orangehrm.com/orangehrm-30-day-trial/")
        cy.get('#Form_submitForm_Country')
        .select('Nepal')
        .should('have.value', 'Nepal')

    })
})