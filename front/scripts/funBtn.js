//func destinada a adicionar o evento de click ao botão de adicionar ao carrinho






function addEventBtn() {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            clickToAdd(id);
        });
    });
}


function clickToAdd(produtoID){
    const produto = products.find(p => p.id === produtoID);

    if (produto) {

        
        cartAdd(produto)
       

    } else {
        console.error("Produto não encontrado com ID:", produtoID);
    }
    
    
    
}



function addEventBtnTrash() {
    

    document.querySelectorAll('.btnTrashIten').forEach(button => {
       button.addEventListener('click', function() {
           const id = this.getAttribute('data-id'); // Recupera o id do atributo data-id
           let cartAux = JSON.parse(localStorage.getItem('carItens')); // Recupera o carrinho do localStorage
           
           cartAux = cartAux.filter(item => item.id != id) //Renova o cartAux com os itens diferentes do item excluído
           localStorage.setItem('carItens',JSON.stringify(cartAux)) //atualiza o localStorage
           reloadCart(cartAux) //atualiza o carrinho
           


         
       });
   }); 
}