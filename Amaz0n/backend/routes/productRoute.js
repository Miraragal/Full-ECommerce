import express from 'express'
import Product from '../models/productModel.js'


//al igual que hicimos en server utilizamos node express para definir las rutas
const router= express.Router()

//GET coge info
// with this route que can send back the list of product to the user
router.get("/", async (req, res)=> {
  const products = await Product.find({});
  res.send(products)
})

//POST envia info
router.post("/", async (req, res)=> {
  const product= new Product({ //creamos un nuevo producto que sera lo que hemos recibido del frontend 
    name: req.body.name,
    image: req.body.image,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews
  })
  const newProduct= await product.save();
  if(newProduct){
    return res.status(201).send({message: 'New product created', data: newProduct})
  } 
  return res.status(500).send({message: 'Error in creating product'})
})


export default router;
