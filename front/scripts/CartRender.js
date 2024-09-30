function cartRender() {
    const show = document.querySelector("#cartItens")

    show.innerHTML = '';
    show.style.backgroundColor = 'white'
    cart.forEach(prod => {


        const productDiv = document.createElement('div');
        productDiv.classList.add('itenCart');
        productDiv.style.display = 'block'

        productDiv.innerHTML = `
            <div>
            <img src="${prod.photo}" alt="${prod.name}" style="width: 100px; height: 100px;">
            <div>
            <h3>${prod.name}</h3>
            <div class="price">R$${prod.currentPrice} <span>R$:${prod.oldPrice}</span></div>
            </div>
            </div>
            <h3>Quantidade: ${prod.amount}</h3>
             <button class="btnTrashIten" data-id="${prod.id}"> <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/trash.png" alt="trash"/></button>
           
            
            
        `;

        show.appendChild(productDiv);
    }
    )
    addEventBtnTrash()
    



}