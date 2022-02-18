describe('File Upload Test Suite', ()=> {

    it.skip('Verify user can upload file', ()=>{
        cy.visit('http://automationpractice.com/')
        cy.get('#contact-link').click()
        let pathToFile = 'cube.jpg'
        cy.get('#fileUpload').attachFile(pathToFile)
    })

    it.skip('Verify user can upload file by drag and drop method', ()=>{
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        let pathToFile = "cube.jpg"
        cy.get('.box__file').attachFile(pathToFile)
        cy.get('.box__success').should('contain.text', 'Done!')
    })

    it('Verify user can upload multiple files', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const pathToAttachment2 = "building.jpg"
        const pathToAttachment3 = "chair.jpg"
        const pathToAttachment1 = "cube.jpg"

        cy.get('#filesToUpload')
        .attachFile(pathToAttachment1)
        .attachFile(pathToAttachment2)
        .attachFile(pathToAttachment3)
        cy.get('p:nth-child(6) > strong').should('contain.text', 'Files You Selected:')
    })
})