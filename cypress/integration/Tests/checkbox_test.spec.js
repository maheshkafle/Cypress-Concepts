describe('Checkbox Test Suite', ()=>{

    it('Verify check the checkboxes', ()=> {

        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()

        //check the checkboxes and verify them
        cy.get('.checkbox').check().parent().should('have.class','checked')

        //uncheck the checkboxes and verify them
        cy.get('.checkbox').uncheck().parent().should('not.have.class', 'checked')

    })


    it.only('Verify filter categories using checkboxes', ()=> {

        cy.visit('https://www.snapdeal.com/')
        cy.get('#inputValEnter').type('Laptop')
        cy.wait(1000)

        cy.get('.searchformButton').click()

        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').check({force:true})
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').should('have.checked', 'checked')

        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').uncheck({force:true})
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').should('not.have.checked', 'checked')  
        

    })
})