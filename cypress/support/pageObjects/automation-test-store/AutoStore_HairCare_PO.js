class AutoStore_HairCare_PO{

 
    addHairCareProductstoBasket(){
        globalThis.data.productName.forEach(($ele)=>{
            cy.addProductToBasket($ele); 
           })
    }

}

export default AutoStore_HairCare_PO;