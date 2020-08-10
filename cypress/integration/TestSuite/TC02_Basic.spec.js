describe('Automation Practice Suite', function(){
    it('This is test case for CheckBoxes',function(){
        cy.visit(Cypress.env('url')+"AutomationPractice/")
        cy.get('#checkBoxOption1').should('not.be.checked').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        cy.get('input[type="checkbox"]').uncheck(['option2','option3'])
        cy.get('input[type="checkbox"]').check({multiple:true})

        
    })

    it('This is test case for dropdowns',function(){
        //To Select static dropdown
        cy.get('select').select('option2').should('have.value','option2')
        //To Select dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if($el.text()==='India'){
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        cy.get('input[value="radio2"]').should("be.visible").and("not.be.checked").click()
        


    })
})