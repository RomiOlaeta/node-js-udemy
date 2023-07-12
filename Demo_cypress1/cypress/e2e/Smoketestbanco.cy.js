
describe("Test suite- conjunto de pruebas", () => {
    beforeEach(() => {
        cy.visit("http://zero.webappsecurity.com") 
    })
it("validar página de inicio", () => {
 
    cy.get(".active > img").should("be.visible")
    cy.get('.active > .custom > h4').contains("Online Banking")
})

it("validar 2- transferencia de fondos", () => {
   
    cy.get('#signin_button').click()
    cy.get('#user_login').type("username")
    cy.get('#user_password').type("password")
    cy.get('.btn').click()
    cy.get('#transfer_funds_tab > a').click()
    cy.get('#tf_fromAccountId').select("1").contains("Savings")
    cy.get('#tf_toAccountId').select("5")
    cy.get('#tf_amount').type("300")
    cy.get('#tf_description').type("Transferencia de fondos")
    cy.get('#btn_submit').click()
    cy.get('#btn_submit').click()
    cy.get('.alert').contains("You successfully submitted your transaction.")
    
})

it("validar 3- prueba de validar gráfico", () => {   //con el only corre solo esta
   
    cy.get('#signin_button').click()
    cy.get('#user_login').type("username")
    cy.get('#user_password').type("password")
    cy.get('.btn').click()
    cy.get('#money_map_tab > a').click() 
    cy.get('#ext-sprite-1259').should("be.visible")
    cy.get('#ext-sprite-1275 > tspan').click()
    cy.get('#ext-sprite-1259').should("not.be.visible")
})
})