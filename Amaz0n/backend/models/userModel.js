import mongoose from 'mongoose';

// definimos userSchema que describe como el user sera guardado en el mongo-database
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
      type: String, required: true, unique: true, index: true, dropDups: true
    }, //unique sigfica que no se puede repetir el email y dropDups elimina duplicados
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }, // no se permite default users
  });
    

// el nombre de la coleccion que sera guardardo en mongoDB, basado sobre este userSchemma
const userModel = mongoose.model('User', userSchema);


export default userModel;






