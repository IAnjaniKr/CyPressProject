describe('My Fist Test',function(){
    it('Test case TC01', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').should('be.visible').type('ca')
        cy.get('.product').should('have.length',5)
        cy.get('.products').as('ProductLocator')
        cy.get('@ProductLocator').find('.product').should('have.length',4)
        cy.get('@ProductLocator').find('.product').eq(0).contains('ADD TO CART').click()
        cy.get('@ProductLocator').find('.product').each(($el,index,$list)=>{
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashew')){
                $el.find('button').click()
            }
        })
        cy.get('.brand.greenLogo').as('BrandLogo')
        //To Asset Brand Text
        cy.get('@BrandLogo').should('have.text','GREENKART')
        cy.get('@BrandLogo').should('be.visible').then(function(logo){
            cy.log(logo.text())
        })
        cy.get('@BrandLogo').should('be.visible').then((logo)=>{
            cy.log(logo.text())
        })
        //To Assert footer
        cy.contains(' - buy veg and fruits online').should('have.text','© 2019 GreenKart - buy veg and fruits online')
        //To Print in console
        cy.contains(' - buy veg and fruits online').should('be.visible').then(function(footerText){
            cy.log(footerText.text())
        })
        cy.contains(' - buy veg and fruits online').should('be.visible').then((footerText)=>{
            cy.log(footerText.text())
        })
    })

    
})