describe('HubSpot Login Suite', ()=> {

    it('Handle HubSpot Login Test', ()=> {

        cy.visit('https://app.hubspot.com/login', {failOnStatusCode: false})
        cy.get('#username').type('naveen@gmail.com')
        // cy.get('#password').type('naveen@g123')
        // cy.get('#loginBtn').click()

    })
})