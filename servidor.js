const express = require('express');

//init
const app = express();


//use
app.use(express.static('public'));


//set
app.set('views',__dirname+'/views')
app.set('public',__dirname+'/public')
app.set('view engine','ejs');

///Rutas
app.get('/home',async (req,res)=> {
    res.render('home');
});
app.get('/ventas',async (req,res)=> {
    res.render('ventas');
});

//server
var port =process.env.PORT || 8080;

const server = app.listen(port,()=>{
    console.log("Servidor Mueblería 2021");
});
