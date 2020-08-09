describe('Test Suite for WebTables',function(){
    it('Test Case to Find price of course',function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{

        const courseName = $el.text()
        if(courseName.includes('Python')){
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                const priceValue = price.text()
                expect(priceValue).to.equal('25')
            })
        }
    })
    })
    it('Test case to find price of course 01',function(){
        cy.get('tr td:nth-child(2)').each(($el, index, $list)=>{
            const courseName = $el.text()
            if(courseName.includes('WebServices')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceValue = price.text()
                    expect(priceValue).to.equal('35')   
                })   

            }
        })
    })
    it('Test case to find trainer name of course',function(){
        cy.get('tr td:nth-child(2)').each(($el, index, $list)=>{
            const courseName = $el.text()
            if(courseName.includes('WebServices')){
                cy.get('tr td:nth-child(2)').eq(index).prev().then(function(name){
                    const nameValue = name.text()
                    expect(nameValue).to.equal('Rahul Shetty')  
                })   

            }
        })
    })
})