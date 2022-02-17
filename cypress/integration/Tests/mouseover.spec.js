describe('Mouseover simulation Test Suite', ()=> {

    it.skip('Verify member signup', ()=> {

        cy.visit('https://corporate.spicejet.com/SpiceScreen.aspx')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains("SpiceClub Members").trigger('mouseover')
        cy.contains("Sign up").click()

    })

    it.skip('Verify member login', ()=> {

        cy.visit('https://corporate.spicejet.com/SpiceScreen.aspx')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains("SpiceClub Members").trigger('mouseover')
        cy.contains("Member Login").click({force: true})

    })

    it('Verify Add to Cart', ()=> {

        cy.visit('http://automationpractice.com/index.php')
        cy.get('.ajax_add_to_cart_button ').first().click()
        cy.wait(1000)
        cy.get('.cross').click()
        cy.wait(1000)
        cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.get('#button_order_cart').click()


    })
})