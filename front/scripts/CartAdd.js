function cartAdd(item) {

    //let helper = item.id  

    let cartAux = JSON.parse(localStorage.getItem('carItens'))||[]
    

    if (cartAux.length>0) {
        console.log('o caritens é ', cartAux)

        let itemInCart = cartAux.find(p => p.id == item.id)
        if (itemInCart) {
            itemInCart.amount += 1
        } else {
            cartAux.push({ id: item.id, amount: 1 })

        }
    } else {
        cartAux = [{ id: item.id, amount: 1 }]
        
        
        


    }

    localStorage.setItem('carItens', JSON.stringify(cartAux));

    
    reloadCart(cartAux)



   





}