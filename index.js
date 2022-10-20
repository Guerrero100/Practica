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
    <td>${process.env.IMG}</td>
    </tr>
    
    
    </table>
    </center>

    `);
})



server.listen(port, ()=>{
    console.log(`Estoy en el puerto ${port}`.bgGray.underline);
})