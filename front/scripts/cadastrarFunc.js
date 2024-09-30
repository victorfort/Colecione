
//func para cadastrar produtos ao bd

const portServerCad = 'http://localhost:3000'
function addProduct() {
    

    const name = document.querySelector("#name")
    const oldPrice = document.querySelector("#oldPrice")
    const currentPrice = document.querySelector("#currentPrice")
    const stock = document.querySelector("#stock")
    const photo = document.querySelector("#urlImg")
    const newproduct = {
        id: generateRandomId(),
        name: name.value,
        oldPrice : oldPrice.value,
        currentPrice : currentPrice.value,
        stock: stock.value,
        photo: `./front/images/${photo.value}`}

    postProduct(newproduct)
    

    
   

}
function generateRandomId() {
    return Math.random().toString(36).substr(2, 9); // Gera uma string de 9 caracteres aleatórios
}


async function postProduct(product) {
    try {
        const res = await fetch(portServerCad+'/cadastro', {
            method: 'POST', // Define o método como POST
            headers: {
                'Content-Type': 'application/json', // Especifica que estamos enviando JSON
            },
            body: JSON.stringify(product), // Converte o objeto JS em uma string JSON
        });

        if (!res.ok) {
            throw new Error(`Erro na resposta do servidor: ${res.status} ${res.statusText}`);
        }

        const data = await res.json(); // Lê a resposta do servidor
        console.log('Produto adicionado com sucesso:', data);
    } catch (error) {
        console.error('Erro ao adicionar o produto:', error);
    }
}


document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    addProduct();
});

//parte da verificação da imagem

document.getElementById('urlImg').addEventListener('change', function(event) {
    const url = `../images/${event.target.value}`; // Obtém o valor selecionado
    
    if (url) { 
       
            const img = document.getElementById('preview');
            img.src = url; // Define a fonte da imagem como o resultado do FileReader
            img.style.display = 'block'; // Mostra a imagem
        
        
        
    } else {
        alert('Por favor, selecione um arquivo de imagem.');
    }
});