class ShoppingCartPage{
    getItem(){
        return cy.get(`.sc-list-item-content`)
    }
    getcheckoutButton(){
        return cy.get(`#sc-buy-box-ptc-button`)
    }
}
export default ShoppingCartPage