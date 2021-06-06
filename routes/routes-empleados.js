const express = require('express');
const router = express.Router();
const empleados=require('../models/empleados');


router.get('/listarEmpleados',async (req,res)=> {
    res.render('listarEmpleados');
});

///////////
router.get('/homeEmpleados',async (req,res)=> {
    res.render('homeEmpleados');
});
////////
router.get('/nuevoEmpleadoForm',async (req,res)=> {
    res.render('nuevoEmpleadoForm');
});
/////////


//////////////////////////////
router.post('/nuevoEmpleado',async (req,res)=> {
const {documento,nombres,apellidos,correo}=req.body;
if(documento.length==0   || nombres.length==0 || apellidos.length==0 || correo.length==0){
    //req.flash('error_registro',"Faltan datos del curso");
    res.redirect('/courses/nuevoEmpleadoForm');
}
else{
console.log(documento);
console.log(nombres);
console.log(apellidos);
console.log(correo);
//const nuevoEmpleado=new empleados({documento,nombres,apellidos,correo});
//await nuevoEmpleado.save();
//req.flash('ok_registro',"Curso registrado correctamente");
res.redirect('/courses/homeEmpleados');

}
});

///////////////////////////
module.exports=router;
