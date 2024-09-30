function reloadCart(itens){

    cart = []
    itens.forEach(item => {
        //adicionar a logica para n precisar zerar o carrinho, ou seja, verificar a existência do item no carrinho
        const produto = products.find(p => p.id == item.id);
        if (produto) {
            let productToAdd = {
                id: produto.id,
                name: produto.name,
                photo : produto.photo,
                oldPrice: produto.oldPrice,
                currentPrice: produto.currentPrice,
                amount: item.amount

            }
            cart.push(productToAdd)
            
        } else {
            console.log ( `produto de id ${item.id} não encontrado no bd`)
            
        }

        
    });

    cartRender()
    contUpdate(itens)
    totalCart()

    //função para valor do carrinho
    //função para quantidade de itens no carrinho


   

}