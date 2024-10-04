class AutoStore_HairCare_PO{

 
    addHairCareProductstoBasket(){
        globalThis.data.productName.forEach(($ele)=>{
            cy.addProductToBasket($ele).then(()=>{
                debugger;
            }); 
           })
    }

}

export default AutoStore_HairCare_PO;