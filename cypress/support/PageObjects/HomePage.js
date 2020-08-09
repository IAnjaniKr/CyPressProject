class HomePage{

    getEditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    get2WayDataBinding(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender(){
        return cy.get('select')
    }

    getEntrepreneur(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.contains('Shop')
    }

}
export default HomePage