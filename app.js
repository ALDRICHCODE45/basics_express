const express = require('express');
const hbs =  require('hbs');
require('dotenv').config();

const app = express();
const port  = process.env.PORT


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// servir contenido estatico 
app.use( express.static( 'sitio_web' ) );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'aldrich',
        titulo: 'curso de node'
    });
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiba ruta')
});

app.get('/generic', (req, res) => {
    res.render('generic')
});

app.get('/elements', (req, res) => {
    res.render('elements')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`)
});
