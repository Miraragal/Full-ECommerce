import mongoose from 'mongoose';

// definimos productSchema que describe como el product sera guardado en el mongo-database
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, default:0, required: true },
    category: { type: String, required: true },
    countInStock: { type: Number, default:0, required: true },
    description: { type: String, required: true },
    rating: { type: Number, default: 0, required: true },
    numReviews: { type: Number, default:0, required: true }
  });
    

// el nombre de la coleccion que sera guardardo en mongoDB, basado sobre este productSchemma
const productModel = mongoose.model('Product', productSchema);


export default productModel;