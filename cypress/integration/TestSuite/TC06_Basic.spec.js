import 'cypress-iframe'
describe('Test suite working on iFrame',function(){
    it('Test case working on iFrame', function(){
        cy.visit(Cypress.env('url')+"AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)

    })

    /**it('Test case working on iFrame', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().then(function(){
            cy.get('Mentorship').click()
        })

    })*/

    it('Test case working on iFrame', function(){    
        cy.visit(Cypress.env('url')+"AutomationPractice/")      
        cy.scrollTo('bottom')       
        cy.enter('#courses-iframe').then(function(getBody){
         getBody().contains('Mentorship').should('be.visible').click()
       })  
})
})
    