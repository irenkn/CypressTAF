import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import testData from '../support/testData';

describe('Amazon tests', function() {
  before(function(){
    cy.fixture('example').then(function(data){
        this.data = data
    })
})
  it('Verify product by name', function(){

    const homePage = new HomePage() //POM  

    cy.visit(Cypress.env('url')) // environmental variable
  
    // User populate info into search field
  
    homePage.getSearchField().type(testData.specificProduct) 
    homePage.getSearchButton().should('be.visible').click()

    // Verify that title has specificProduct
    cy.title().should('include', testData.specificProduct)
  })
})