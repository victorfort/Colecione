

const products=[]

 cart = []
const portServer = '../../back/data.json'//'https://raw.githubusercontent.com/victorfort/bdJson/main/bdParaColecione/data.json'






async function readDataFromData() {
    try {
        const res = await fetch(portServer)
        if (!res.ok) {
            throw new Error(`Erro na resposta do servidor: ${res.status} ${res.statusText}`);
        }
            const data =await res.json();

            products.push(...data); 
        
            displayProducts()
            startCart()
          
            
        
        
        
        
    } catch (error) {
        console.error('Erro ao ler produtos:', error.message);
    }
    

}    
      
        

    
        
        
        




// abrir um modal para cadastrar o novo produto com preço e foto

function displayProducts(){
    
    
    const itensSection = document.getElementById("itens");
    if (!itensSection) {
        console.error('Elemento com id "itens" não encontrado!');
        console.log(itensSection)
        return;
    }

    // Seleciona a div com id "itens" dentro da section com id "itens"
    const show = itensSection.querySelector("#itens-container");
    if (!show) {
        console.error('Elemento com id "itens" não encontrado dentro da section com id "itens"!');
        return;
    }
    show.classList.add('box-container')
    
   

    // Mapeia os produtos e exibe na tela
    products.forEach(prod => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('box');
        
        productDiv.innerHTML = `
            <img src="${prod.photo}" alt="${prod.name}" style="width: 100px; height: 100px;">
            <h3>${prod.name}</h3>
            <div class="price">R$${prod.currentPrice} <span>R$:${prod.oldPrice}</span></div>
            
             <button class="btn" data-id="${prod.id}"> Adicione ao Carrinho</button>
           
            
            <p>Estoque: ${prod.stock}</p>
        `;
        
        show.appendChild(productDiv);



    });
    addEventBtn()

}

window.onload = function() {
    // Seu código aqui será executado assim que a página e todos os seus recursos estiverem completamente carregados
    
    readDataFromData()
    
    
    
    //displayProducts();
};