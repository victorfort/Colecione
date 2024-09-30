



let cartCount = 0
// funcção para pegar as variáveis disponíveis no local storage e colocar os produtos no carrinho


function startCart(){
    //inicia o contador visível do carrinho
  

    if(localStorage.getItem('carItens') && localStorage.getItem('carItens')!=''){
        try {
            let helper = JSON.parse(localStorage.getItem('carItens'))
            
            
            reloadCart(helper)  
                  
            
            
        } catch (error) {
            console.log(error)
            
        }
    }


}