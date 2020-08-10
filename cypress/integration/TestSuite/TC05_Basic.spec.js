describe('Test suite for testing mouse hover',function(){
    it('Test case for mouse hover', function(){
        cy.visit(Cypress.env('url')+"AutomationPractice/")
        cy.get('div.mouse-hover-content').should('not.be.visible').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
        cy.hash().should('include','top')
    })

    it('Test case force clicking invisible element', function(){
        cy.visit(Cypress.env('url')+"AutomationPractice/")
        //cy.get('div.mouse-hover-content').should('not.be.visible').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
        cy.hash().should('include','top')
    })
})