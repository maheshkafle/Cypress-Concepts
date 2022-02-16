describe('Different Cypress Method Test Suite', ()=> {

    it('element get testing', ()=> {

        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers').click()

        cy.url()
        .should('include', '/customers')

        cy.get('div[class=\'l-page container align-center\'] h2')
        .should('be.visible')
        .and('contain', 'Explore handpicked')
        .and('have.length', 1)

        cy.get('ul.footer-nav li')
        .should('have.length', 23)

        cy.get('ul.footer-nav li')
        .find("a[href*='footer']")
        .should("have.length", 5)

    })
})