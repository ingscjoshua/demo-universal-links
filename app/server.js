var express = require('express') //llamamos a Express
var app = express()

var port = process.env.PORT || 8081  // establecemos nuestro puerto

app.get('/', function(req, res) {
    res.json({ mensaje: '¡Hola Mundo!' })
})

app.get('/apple-app-site-association', function(req, res) {
    res.json({ applinks: {
        apps:[],
            details:[{
                appID:"Y7Q29455JA.com.zagger.iosapp.stage",
                paths:["*"]
            }]
        } })
})


// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)
