var express = require('express') //llamamos a Express
var app = express()

var port = process.env.PORT || 80  // establecemos nuestro puerto

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
});

app.get('/moveToApp',function (req,res) {
    res.redirect('zaggerapp://forgotpassword/token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY2M5NTQ2ZmMtYzcwYy00NDA0LWFlYTYtYjI2Y2Q2YTcyMjBmIiwiZXhwIjoxNjQ3NzIxNDk2LCJpYXQiOjE2NDc2MzUwOTZ9.ehTvhHvL-QOQQ_feVgrHI1mTj3n6PQ4khbc4bLPzoaY');
});


// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)
