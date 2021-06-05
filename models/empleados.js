const mongoose = require('mongoose');
const {Schema} = mongoose;

const empleadosSchema= new Schema({
documento:{type:String, required:true},
nombres: {type:String, required:true},
apellidos: {type:String, required:true},
correo: {type:Number, required:true},
});

module.exports=mongoose.model('empleados',empleadosSchema);
