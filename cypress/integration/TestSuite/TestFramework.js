import HomePage from '../../support/PageObjects/HomePage'
import ProductPage from '../../support/PageObjects/ProductPage'
import CheckoutPage from '../../support/PageObjects/CheckoutPage'

describe('Shopping App Test Suite', function () {
    before(function () {
        //Runs before all it blocks
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
    it('TestCase01 - Home Page Test', function () {
        
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkoutPage = new CheckoutPage()
        cy.visit(Cypress.env('url')+"angularpractice/")
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.get2WayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneur().should('be.disabled')
        Cypress.config('defaultCommandTimeout',8000)
        homePage.getShopTab().click()
        
        this.data.productName.forEach(function (product) {
            cy.selectProduct(product).should('be.visible')
        })
        productPage.getCheckoutButton().click()
        var sumOfCost =0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=>{
            const productPrice = $el.text()
            var result = productPrice.split(" ")
            result = result[1].trim()
            sumOfCost = Number(sumOfCost) + Number(result)
            cy.log(result)
              
        }).then(()=>{
            cy.log(sumOfCost)
        })
        cy.get('h3 strong').then(function(element){
            
            const amount = element.text()
            var result = amount.split(" ")
            var GrandTotal = result[1].trim()
            expect(sumOfCost).to.equal(Number(GrandTotal))
        })

        checkoutPage.getCheckoutButton().click()

        cy.get('#country').type('India')
        
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[value="Purchase"]').click()
        cy.get('.alert').then(function(element){
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
            
        })
    })
})