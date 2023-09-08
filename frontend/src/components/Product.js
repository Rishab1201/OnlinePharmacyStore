import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import axios from "axios";
import { useContext } from "react";
import { Store } from "../Store";
// import { Toast } from "bootstrap";
import { toast } from "react-toastify";

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
    toast.success("Great choice! Your item is now in the cart.");
  };

  return (
    // <Card>
    //   <Link to={`/product/${product.slug}`}>
    //     <img src={product.image} className="card-img-top" alt={product.name} />
    //   </Link>
    //   <Card.Body>
    //     <Link to={`/product/${product.slug}`}>
    //       <Card.Title>{product.name}</Card.Title>
    //     </Link>
    //     <Rating rating={product.rating} numReviews={product.numReviews} />
    //     <Card.Text>₹{product.price}</Card.Text>
    //     {product.countInStock === 0 ? (
    //       <Button variant="light" disabled>
    //         Out of stock
    //       </Button>
    //     ) : (
    //       <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
    //     )}
    //   </Card.Body>
    // </Card>

    <div className="flex items-center justify-center w-80">
      <div className="w-full mx-2 my-2">
        <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
          <div className="prod-title">
            <p className="text-lg underline md:underline-offset-4 font-bold text-gray-900 uppercase truncate">
              {product.name}
            </p>
          </div>
          <div className="prod-img hover:cursor-pointer">
            <Link to={`/product/${product.slug}`}>
              <img
                src={product.image}
                className="object-cover object-center w-full h-[200px]"
                alt={product.name}
              />
            </Link>
          </div>
          <div className="grid gap-2 prod-info">
            <div className="m-2">
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </div>
            {/* <div className="flex items-baseline text-gray-700 dark:text-gray-300">
              <div className="flex space-x-2">
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-lg dark:bg-gray-600"
                    name="size"
                    value="xs"
                  />
                  XS
                </label>
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6"
                    name="size"
                    value="s"
                  />
                  S
                </label>
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6"
                    name="size"
                    value="m"
                  />
                  M
                </label>
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6"
                    name="size"
                    value="l"
                  />
                  L
                </label>
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6"
                    name="size"
                    value="xl"
                  />
                  XL
                </label>
              </div>
            </div> */}
            <div className="flex flex-col items-center justify-between text-earthly-green md:flex-row">
              <p className="text-xl font-bold">₹ {product.price}</p>
              {product.countInStock === 0 ? (
                <button
                  className="px-2 py-1 text-red-600 bg-gray-300 border-2 border-gray-300 rounded-full hover:bg-red-300"
                  disabled
                >
                  Out of stock
                </button>
              ) : (
                <button className="px-4 py-1 uppercase transition duration-200 ease-in border-2 border-earthly-green rounded-full hover:bg-orange hover:text-white focus:outline-none" onClick={() => addToCartHandler(product)}>
                  cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;