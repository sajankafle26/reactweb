import axios from 'axios'
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cart";
import Product from './Product';
 
 

function Products({ id, image, title, price }) {
   
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const { data } = await axios.get("https://fakestoreapi.com/products");
            setProducts(data);
             
          } catch (err) {
            console.log(err.message);
          }
        };
        fetchProducts();
      }, []);
  return (
    <>
    <div className='container'>
        <h3>Products</h3>
        <div className='row'>
    {products.map((product) => (
        <>
          <Product key={product.id} {...product} />
        </>
       
    ))}
 </div>   
 </div></> 
  )
}

export default Products