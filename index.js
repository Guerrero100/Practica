const express = require('express');
const dotenv = require('dotenv');
const color = require('colors');
const server = express();

dotenv.config();

const port = process.env.PORT;

server.get('/', (req, res)=>{
    res.send(`
    <table>
    
    <tr>
    
        <th></th>
    
    </tr>
    
    
    
    </table>
    `);
})



server.listen(port, ()=>{
    console.log(`Estoy en el puerto ${port}`.bgBlue.underline);
})