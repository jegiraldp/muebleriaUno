const express = require('express');
const router = express.Router();
const empleados=require('../models/empleados');


///////////
router.get('/homeEmpleados',async (req,res)=> {
    res.render('homeEmpleados');
});
////////
router.get('/nuevoEmpleadoForm',async (req,res)=> {
    res.render('nuevoEmpleadoForm');
});
/////////
////
router.get('/nuevoEmpleadoForm/:estado',async (req,res)=> {
  const estado=req.params.estado;
  if(estado=="2"){
    res.render('nuevoEmpleadoForm',{error_registro_empleado:"Faltan datos del empleado"});
  }
  if(estado=="1"){
    res.render('nuevoEmpleadoForm',{ok_registro_empleado:"Empleado registrado correctamente"});
  }
});

//////////////////////////////
router.post('/nuevoEmpleado',async (req,res)=> {

const {documento,nombres,apellidos,correo}=req.body;

if(documento.length==0   || nombres.length==0 || apellidos.length==0 || correo.length==0){
    //req.flash('error_registro',"Faltan datos del curso");
    res.redirect('/empleados/nuevoEmpleadoForm/2');
  }
else{
console.log(documento);
console.log(nombres);
const nuevoEmpleado=new empleados({documento,nombres,apellidos,correo});
await nuevoEmpleado.save();
//req.flash('ok_registro',"Curso registrado correctamente");
res.redirect('/empleados/nuevoEmpleadoForm/1');
console.log("empleado registrado");

}
});
///////////////////////
router.get('/listarEmpleados',async (req,res)=> {
  const rta=await empleados.find();
  res.render('listarEmpleados',{rta});
});

///////////////////////////
module.exports=router;
