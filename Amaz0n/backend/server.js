import express from 'express'; // Node express o Express.js framework escrito en JS y alojado dentro de Node.js.
// Diseñado para crear aplicaciones web y API
import path from 'path';
import mongoose from 'mongoose';
import config from './config';
import data from './data'; //
import dotenv from 'dotenv'; //
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute'
import productRoute from './routes/productRoute'
import orderRoute from './routes/orderRoute'


//ACCEDEMOS A MONGO.DB
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));


const app = express(); 
// we define app by running express function()
app.use(bodyParser.json());
// we bodyparser we're able to read data 
app.use("/api/users", userRoute)
//anadimos ruta que hemos creado para el user en userRoute
app.use("/api/products", productRoute)
//anadimos ruta que hemos creado para create products en userRoute
app.use('/api/orders', orderRoute)
//anadimos ruta para los pedidos
app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
})
//ruta para redirigir a paymal

//app.use('/api/uploads', uploadRoute);
//app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
//app.use(express.static(path.join(__dirname, '/../frontend/build')));
//app.get('*', (req, res) => {
 // res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
//});

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});
// means the express.js will start running. 
//The firs parameter is port number and the second is a callback the will run when express.js succesfully create the server


// WE DONT NEED THE STATIC API.WE'RE IMPORTING PRODUCTS FROM DATABASE
// app.get("/api/products", (req, res)=> { // to create a path to n point,we use .get with the path for this n point, a handler function that response to this request
//     res.send(data.products)  //here we send the data.js that we created
// });
// //Pagina de producto
// //"/api/products"+productId = "/api/products/:id"
// app.get("/api/products/:id", (req, res)=> { 
//     const productId= req.params.id
//     const product= data.products.find(x=>x._id===productId)
//     if (product) // si el producto existe enviamos producto sino, enviamos error message
//         res.send(product)
//     else 
//         res.status(404).send({msg: "Product Not Found"})
// });