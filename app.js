require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.send('Bienvenido a mi aplicacion web');
})

app.get('/saludo', (req,res)=>{
    const nombre = req.query.nombre || 'invitado';
    const contrasena = req.query.contrasena || 'anonimo';
    res.send('Hola ' + nombre+' ' + contrasena);
})

app.post('/saludo', (req,res)=>{
    const nombre = req.body.nombre || 'invitado';
    const contrasena = req.body.contrasena || 'anonimo';
    res.send('Hola ' + nombre+' con contraseña ' + contrasena);
})

app.get('/precio', (req,res)=>{
    res.send('<h1>Precios</h1><hr><p>Ordenador: 1000€</p>')
})

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port,()=>console.log(`Servidor escuchando por el puert ${port}`));

app.post('/factorial', (req, res) =>{
    const numero = req.body.numero;
    if( numero === undefined || isNaN(numero)){
        return res.status(400).send('Numero no valido');
    }
    const factorial = (n) => {
        if (n === 0) return 1;
        return n * factorial(n-1);
    };
    const resultado = factorial(Number(numero));
    res.send(`El factorial de ${numero} es ${resultado}`);
});