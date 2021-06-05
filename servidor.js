const express = require('express');
const mainRoutes=require('./routes/routes-main');
const empleadosRoutes=require('./routes/routes-empleados');

//init
const app = express();
//use
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.static('public'));
app.use('/main',mainRoutes);
app.use('/empleados',empleadosRoutes);

//set
app.set('views',__dirname+'/views')
app.set('public',__dirname+'/public')
app.set('view engine','ejs');

//server
var port =process.env.PORT || 8080;

const server = app.listen(port,()=>{
    console.log("Servidor Mueblería 2001");
});
