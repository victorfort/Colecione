import express from 'express'
import fs from 'fs'
import cors from 'cors';

const app = express()
const port = 3000

app.use(cors())
app.use(express.json()); 

// func para ler o o arquivo

function readData(){
    const data =fs.readFileSync('data.json', 'utf-8')
    return JSON.parse(data)
}

//func para salvar no arq JSON
function saveData(dados){
    fs.writeFileSync('data.json', JSON.stringify(dados, null, 2), 'utf-8')
}



app.get('/',(req, res)=>{
    const data = readData();

    res.json(data)
} )

app.post('/cadastro', (req, res)=> {
    const data = readData();
    const newProduct =req.body
    data.push(newProduct)
    saveData(data)
    res.status(201).json({message: `Produto ${newProduct} cadastrado com sucesso`})
})

app.listen(port, ()=>{
    console.log(`servidor rodando na porta: ${port}`)
})