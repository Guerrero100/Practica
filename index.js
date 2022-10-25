const express = require('express');
const dotenv = require('dotenv');
const color = require('colors');
const server = express();

dotenv.config();

const port = process.env.PORT;

server.get('/', (req, res)=>{
    res.send(`
    <center>
    <table border=1>
    
    <tr>
        <th>Nombre</th>
        <th>Cedula</th>
        <th>Edad</th>
    </tr>

    <tr>
    
    <td>${process.env.NOMBRE}</td>
    <td>${process.env.CEDULA}</td>
    <td>${process.env.EDAD}</td>
    
    </tr>    

    <tr>
    <td> <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blted35cecd1a228f6b/60dabb56e1461d39eb87f143/7cf07b7505ef748873f411e9606e0aa667f63c62.jpg ">${process.env.IMG}</td>
    </tr>
    
    
    </table>
    </center>

    `);
})



server.listen(port, ()=>{
    console.log(`Estoy en el puerto ${port}`.bgGray.underline);
})