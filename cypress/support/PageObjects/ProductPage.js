class ProductPage{


    getCheckoutButton(){
        return cy.contains('Checkout')
    }

    getCategory1(){
        return cy.get('a.list-group-item:nth-child(1)')
    }

    getCategory2(){
        return cy.get('a.list-group-item:nth-child(2)')
    }

    getCategory3(){
        return cy.get('a.list-group-item:nth-child(3)')
    }

}
export default ProductPage