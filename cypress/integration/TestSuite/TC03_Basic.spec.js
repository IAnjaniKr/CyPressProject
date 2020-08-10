describe('Automation Practice Test suite 03',function(){
    it('Test case to handle alert',function(){
        cy.visit(Cypress.env('url')+"AutomationPractice/")
        cy.get('#alertbtn').should('be.visible').click()
        cy.get('input[value="Confirm"]').should('be.visible').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.wait(10000)
        cy.url().should('include','rahulshettyacademy')
        cy.hash().should('include','index')
        cy.go(-1)
        cy.url().should('include','rahulshettyacademy').and('include','AutomationPractice')
        

    })
})