 
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/reducers/cart";

const Product = ({ id, image, title, price }) => {
   
  const dispatch = useDispatch();

  return (
    <div className="card col-lg-4">
      <div className="image-container">
        <img className="w-100" src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <h3>${price}</h3>
      </div>
      <div className="buttons">
        <Link to={`/products/${id}`} className="btn btn-primary">
          Product details
        </Link>
        <button className="btn btn-danger"
          onClick={() => dispatch(addToCart({ id, image, title, price }))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
