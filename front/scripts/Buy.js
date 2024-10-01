function buy(){
    const phoneNumber = '5583996652964'//'558398047452';
    //pegar todos os nomes e ids dos itens que estão no carrinho e mandar no wpp
    let buy='Olá, gostaria de pedir: ';
    if(cart.length>0)
    {
        cart.forEach(item => {
            buy+= `
            item: ${item.name} 
            quantidade: ${item.amount}
            valor: ${item.currentPrice * item.amount}
            `
        });
    }

    const mensagemCodificada = encodeURIComponent(buy);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${mensagemCodificada}`;
    window.open(url, '_blank');
}