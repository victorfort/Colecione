



function contUpdate(lista){
    cartCount = 0
    lista.forEach(item =>{
        cartCount += item.amount
    } );
    //seta o contador visível
    const cartCountElement = document.getElementById('cart-count');    
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;  
    }

}

function totalCart(){
    let total = calculateTotal()
    
    showTotal = document.getElementById('totalPrice')
    
    showTotal.textContent =  total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

}

function calculateTotal(){
    let total = 0
    if (cart.length!=0){
        cart.forEach(item=>{
           total += item.amount*item.currentPrice
       })}
       return(total)
}


    
