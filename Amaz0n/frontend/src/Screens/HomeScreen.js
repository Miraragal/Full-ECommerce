import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions.js";

function HomeScreen(props) {
  //vamos a definir a hook const [state, setstate] = useState(initialState)
  // instead getting data with useState with change to useSelector
  // const [products, setProduct] = useState([]);
  const productList = useSelector((state) => state.productList);

  //we get the product, loading and error from productList
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  // fetch data from frontserver
  useEffect(() => {
    //necesitamos dispatch una action
    dispatch(listProducts());

    //  // instalamos axios para
    //  const fetchData= async ()=> {
    //    const {data}= await axios.get("/api/products");
    //    setProduct(data)
    //  }
    //  fetchData(); // we need to call fetchData
    return () => {
      //
    };
  }, []) // empty array means that this line of code (effect) only run a component Dimount

  return (
    //primero vemos si es loading, sino es error y sino muestro lista products
    loading? <div>Loading...</div> : 
      error? <div>{error}</div>:

    //Movemos la ul de App.js a HomeScreen
    <ul className="products">
      {/* {data.products.map(product => Combertimos lista productos en un array. Para ello, tenemos que crear un file 'data.js' con toda la info */}
      {products.map((
        product // Lo sustituimos products que hemos definido en el hooks
      ) => (
        <li key={product._id}>
          <div className="product">
            {/* Introducimos link a la pag del producto en la imagen */}
            <Link to={"/product/" + product._id}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </Link>
            <div className="product-name">
              {/* <a href="product.html">{product.name}</a> */}
              <Link to={"/product/" + product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">$ {product.price}</div>
            <div className="product-rating">
              {product.rating} Starts ({product.numReviews} reviews)
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default HomeScreen;
