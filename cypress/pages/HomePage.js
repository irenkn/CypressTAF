class HomePage{
getSearchField(){
    return cy.get(`#twotabsearchtextbox`)
}
getSearchButton(){
    return cy.get(`#nav-search-submit-button`)
}

}
export default HomePage;