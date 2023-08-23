
import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import ShoppingCartPage from "../pages/ShoppinCartPage"
import SpecProductPage from "../pages/SpecProductPage";
import testData from '../support/testData';

describe('Amazon tests', function() {
  before(function(){
    cy.fixture('example').then(function(data){
        this.data = data
    })
})
  it('Verify multiple products can be added to cart', function(){

    const homePage = new HomePage() //POM
    const productsPage = new ProductsPage() //POM
    const specProductPage = new SpecProductPage() //POM
    const shoppingCartPage =new ShoppingCartPage()//POM

    
    cy.visit(Cypress.env('url')) //environmental variable
  
    // User populate info into search field
    homePage.getSearchField().type(testData.searchRequest) 
    homePage.getSearchButton().should('be.visible').click()

    // User is redirected to the products page
    cy.title().should('include', testData.searchRequest)
    productsPage.getSpecificProduct().should('be.visible')

    //User choose specific product
    cy.contains('Apple iPhone 14, 128GB, Starlight - Unlocked (Renewed Premium)').scrollIntoView().click()

    //User is on the specific product page 
    cy.title().should('include', 'Apple iPhone 14, 128GB, Starlight - Unlocked (Renewed Premium)')
    
    // User add a product to cart
    specProductPage.getAddToCartButton().should('be.visible').click()
    cy.get(`#attachSiNoCoverage`).click()

    cy.get(`.a-size-medium-plus`).should('contain', 'Added to Cart')
    cy.get(`#sw-gtc`).click() // go to cart button

    // User is on the shopping cart page
    cy.get(`h1`).should('contain', 'Shopping Cart')
    shoppingCartPage.getcheckoutButton().should('be.visible')

    // User add one more product
    homePage.getSearchField().type(testData.searchRequest) 
    homePage.getSearchButton().should('be.visible').click()

    cy.contains('Apple iPhone 14, 256GB, Midnight - Unlocked (Renewed)').scrollIntoView().click()

    specProductPage.getAddToCartButton().should('be.visible').click()
    cy.get(`#attachSiNoCoverage`).click()

    cy.get(`#sw-gtc`).click()

    // Verify that there are 2 items in a cart
    cy.get('div[data-name="Active Items"] div.a-row.sc-list-item.sc-java-remote-feature')
      .should('have.length', 2);
  })
})