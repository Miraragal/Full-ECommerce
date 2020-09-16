import express from 'express'; // Node express o Express.js framework escrito en JS y alojado dentro de Node.js.
// Diseñado para crear aplicaciones web y API
import data from './data';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute'

//ACCEDEMOS A MONGO.DB
dotenv.config()
const mongodbUrl= config.MONGODB_URL
mongoose.connect(mongodbUrl, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}) .catch(error =>console.log(error.message))




const app = express(); 
// we define app by running express function()


app.use("/api/users", userRoute)
//anadimos ruta que hemos creado para el user en userRoute


app.get("/api/products", (req, res)=> { // to create a path to n point,we use .get with the path for this n point, a handler function that response to this request
    res.send(data.products)  //here we send the data.js that we created
});

app.listen( 5000,() => { console.log("Server started at http://localhost:5000") } );
// means the express.js will start running. 
//The firs parameter is port number and the second is a callback the will run when express.js succesfully create the server


//Pagina de producto
//"/api/products"+productId = "/api/products/:id"
app.get("/api/products/:id", (req, res)=> { 
    const productId= req.params.id
    const product= data.products.find(x=>x._id===productId)
    if (product) // si el producto existe enviamos producto sino, enviamos error message
        res.send(product)
    else 
        res.status(404).send({msg: "Product Not Found"})
});
