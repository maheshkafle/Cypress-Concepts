describe('Amazon Search Test Suite', ()=> {

    it('Amazon Search Test Case', ()=> {

        cy.visit('https://www.amazon.com/')
        cy.get('.nav-search-field ').within(()=>{
            cy.get('#twotabsearchtextbox').type('Apple Macbook')
        })

    })
})