import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import SpecProductPage from "../pages/SpecProductPage"
import testData from '../support/testData';

describe('Amazon tests', function() {
  before(function(){
    cy.fixture('example').then(function(data){
        this.data = data
    })
})
  it('Verify product ASIN', function(){

    const homePage = new HomePage() //POM  
    const productsPage = new ProductsPage() //POM
    const specProductPage = new SpecProductPage() //POM

    cy.visit(Cypress.env('url')) // environmental variable
  
    // User populate info into search field
    homePage.getSearchField().type(testData.ASIN) 
    homePage.getSearchButton().should('be.visible').click()

    // Verify that title has specificProduct
    cy.title().should('include', testData.ASIN)
    productsPage.getProductById().click()

    // Verify that description contains ASIN of expected product
    specProductPage.getASIN().scrollIntoView().should('exist').invoke('text').then((asinValue) => {
        expect(asinValue.trim()).to.equal(testData.ASIN);
    });
  })
})