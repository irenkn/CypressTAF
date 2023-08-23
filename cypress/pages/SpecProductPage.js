class SpecProductPage{
    getAddToCartButton(){
        return  cy.get(`#add-to-cart-button`)
    }
    getASIN(){
    return cy.get('th:contains("ASIN") + td')
    }   
}
export default SpecProductPage