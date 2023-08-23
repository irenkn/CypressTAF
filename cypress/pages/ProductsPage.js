class ProductsPage{

getSpecificProduct(){
    return cy.get(`[data-index="3"] > :nth-child(1)`)
}
getProductByName(){
    return cy.get('*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[4]/div/div/div/div/div/div[2]/div/div/div[1]/h2/a/span')
}
getProductById(){
    return cy.get(`.s-widget-container > .s-card-container`)
}

}
export default ProductsPage