describe('API Testing using Alias -> Test Suite', ()=> {

    beforeEach(()=>{
        cy.request('api/users?page=2').as('users')

    })

    it('Verify the header info', ()=> {

        cy.get('@users')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8')
    })

    it('Verify the staus code', ()=> {
        cy.get('@users')
            .its('status')
            .should('equal', 200)
    })

    it('Verify the total pages in body', ()=> {
        cy.get('@users')
            .its('body')
            .should('contains', {'total_pages': 2})
    })
    
    it('Verify the user info in data json array', ()=> {
        cy.get('@users')
            .its('body').then((res) => {
                expect(res.data[0]).has.property('first_name', 'Michael')
            })       
    })
})