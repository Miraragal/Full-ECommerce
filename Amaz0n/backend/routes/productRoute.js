import express from 'express'
import Product from '../models/productModel.js'
import {isAuth, isAdmin, getToken} from '../util.js'


//al igual que hicimos en server utilizamos node express para definir las rutas
const router= express.Router()

//GET recibe info
// with this route que can send back the list of product to the user
router.get("/", async (req, res)=> {
  const products = await Product.find({});
  res.send(products)
})


//POST envia info
router.post("/", isAuth, isAdmin, async (req, res)=> {   // anadiriamos isAuth, isAdmin antes de async para limitat crear/editar/eliminar productos solo a la persona deseada
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

//PUT anade info
router.put('/:id', isAuth, isAdmin,async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.category = req.body.category;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'Product Updated', data: updatedProduct });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Product.' });
})

//DELETE elimina info
router.delete('/:id', isAuth, isAdmin,async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id)

  if (deletedProduct) {
    await deletedProduct.remove()
    res.send({ message: 'Product Deleted' })
  } else {
    res.send('Error in Deletion')
  }
})

export default router;
