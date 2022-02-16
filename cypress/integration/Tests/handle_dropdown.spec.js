describe('Handle Dropdown Test Suite', ()=> {

    //Note: use .skip() method to skip it block if needed while debugging
    it('Verify dropdown handle', ()=> {

        cy.visit("https://www.orangehrm.com/orangehrm-30-day-trial/")
        cy.get('#Form_submitForm_Country')
        .select('Nepal')
        .should('have.value', 'Nepal')

    })

    it('Verify Google search and click auto suggestions', ()=> {

        cy.visit("https://www.google.com/")

        cy.get("#SIvCob a:nth-child(2)")
        .click()
       
        cy.get(".gLFyf.gsfi")
        .type('Cypress')

        cy.get(".G43f7e li span")
        .contains("cypress tree").click()

    })

    it('Verify ecommerce search and click the product', ()=> {

        cy.visit("http://automationpractice.com/index.php")

        cy.get("#search_query_top")
        .type('printed')

        cy.get('.ac_results ul li').contains('Evening Dresses > ').click()
       
    })
    
})