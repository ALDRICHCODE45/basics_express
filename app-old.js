const http = require('http');

http.createServer( (req, res) => {

    console.log(req);

    res.write( 'Hola Mundo' );
    res.end();

})
.listen( 8080 );

console.log('escuchando en el puerto', 8080);
