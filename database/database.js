mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/muebleria',{
//mongoose.connect('mongodb+srv://admin:123@clusteropentopic.8pddu.mongodb.net/ot2020?retryWrites=true&w=majority',{
  useCreateIndex:true,
  useNewUrlParser:true,
  useFindAndModify:false
})
.then(bd=>console.log("conectado a muebleria"))
.catch(err=>console.log("error - no conectado --- jiji"))


//.then(bd=>console.log("conectado"))
