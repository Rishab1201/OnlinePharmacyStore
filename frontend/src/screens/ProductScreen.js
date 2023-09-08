import axios from "axios";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
// import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Rating from "../components/Rating";
// import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../utils";
import { Store } from "../Store";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_PRODUCT":
      return { ...state, product: action.payload };
    case "CREATE_REQUEST":
      return { ...state, loadingCreateReview: true };
    case "CREATE_SUCCESS":
      return { ...state, loadingCreateReview: false };
    case "CREATE_FAIL":
      return { ...state, loadingCreateReview: false };
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  let reviewsRef = useRef();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product, loadingCreateReview }, dispatch] =
    useReducer(reducer, {
      product: [],
      loading: true,
      error: "",
    });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
    navigate("/cart");
    toast.success("Item Added to cart");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!comment || !rating) {
      toast.error("Please enter comment and rating");
      return;
    }
    try {
      const { data } = await axios.post(
        `/api/products/${product._id}/reviews`,
        { rating, comment, name: userInfo.name },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );

      dispatch({
        type: "CREATE_SUCCESS",
      });
      toast.success("Review submitted successfully");
      product.reviews.unshift(data.review);
      product.numReviews = data.numReviews;
      product.rating = data.rating;
      dispatch({ type: "REFRESH_PRODUCT", payload: product });
      window.scrollTo({
        behavior: "smooth",
        top: reviewsRef.current.offsetTop,
      });
    } catch (error) {
      toast.error(getError(error));
      dispatch({ type: "CREATE_FAIL" });
    }
  };
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <>
      <section className="overflow-hidden text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <img
              alt={product.name}
              className="object-cover object-center w-full h-32 rounded lg:w-1/2 lg:h-auto"
              src={selectedImage || product.image}
            />
            <div className="self-center w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h2 className="text-sm tracking-widest text-gray-500 title-font">
                {product.name}
              </h2>
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                {product.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </span>
              </div>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex items-center pb-2 mt-6 mb-5 border-b-2 border-gray-100">
                <div className="flex items-center">
                  {product.countInStock > 0 ? (
                    <div className="font-bold text-green-600">In Stock</div>
                  ) : (
                    <div className="font-bold text-red-600">Unavailable</div>
                  )}
                </div>
              </div>
              <div className="flex">
                <span className="text-3xl font-bold text-black title-font">
                  ₹ {product.price}
                </span>
                {product.countInStock > 0 && (
                  <button
                    className="flex px-6 py-2 ml-auto text-white border-0 border-earthly-green bg-earthly-green rounded focus:outline-none hover:bg-orange"
                    onClick={addToCartHandler}
                    
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* reviews */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-4 mx-auto">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div>
              <h1
                className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white"
                ref={reviewsRef}
              >
                What are our coustomer saying...
              </h1>
              <div className="my-4">
                {product.reviews.length === 0 && (
                  <MessageBox>There is no review</MessageBox>
                )}
              </div>
              <div className="flex mx-auto mt-6">
                <span className="inline-block w-80 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>
          </div>

          {/* <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3"> */}
          <div class="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
            {product.reviews.map((reviews, index) => (
              <div class="mb-12 md:mb-0 pt-6" key={reviews._id}>
                <div class="mb-6 flex justify-center text-center">
                  <img
                    src="/images/blank-profile.png"
                    class="w-32 rounded-full shadow-lg dark:shadow-black/30"
                  />
                </div>
                <h5 class="mb-4 text-xl font-semibold">{reviews.name}</h5>
                <p class="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  {reviews.comment}.
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <Rating
                    rating={reviews.rating}
                    caption=" "
                    className="inline"
                  />
                  <p className="text-[12px] inline">
                    {reviews.createdAt.substring(0, 10)}
                  </p>
                </span>
              </div>
            ))}
            {/* </section> */}
          </div>
        </div>
      </section>

      <div className="my-6">
        {userInfo ? (
          <form
            onSubmit={submitHandler}
            className="w-[50%] border-1 p-4 rounded-md shadow-md hover:shadow-lg transition-all translate-x-1 ml-6"
          >
            <h2 className="text-lg font-semibold mb-3">
              Write a customer review
            </h2>
            <Form.Group className="mb-3" controlId="rating">
              <Form.Label className="text-base font-semibold">
                Rating
              </Form.Label>
              <Form.Select
                aria-label="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="form-select "
              >
                <option value="">Select...</option>
                <option value="1">1- Poor ⭐</option>
                <option value="2">2- Fair ⭐⭐</option>
                <option value="3">3- Good ⭐⭐⭐</option>
                <option value="4">4- Very good ⭐⭐⭐ </option>
                <option value="5">5- Excelent ⭐⭐⭐⭐⭐</option>
              </Form.Select>
            </Form.Group>{" "}
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3 focus:outline-none focus:shadow-none border-earthly-green border-1 rounded-md"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                rows={4}
                cols={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="focus:outline-none focus:shadow-none border-earthly-green border-1 rounded-md"
              />
            </FloatingLabel>
            <div className="mb-3">
              <Button
                disabled={loadingCreateReview}
                type="submit"
                className="submit-button text-white bg-earthly-green hover:bg-orange border-0 mt-4"
              >
                Submit
              </Button>
              {loadingCreateReview && <LoadingBox></LoadingBox>}
            </div>
          </form>
        ) : (
          <MessageBox>
            Please{" "}
            <Link to={`/signin?redirect=/product/${product.slug}`}>
              <p className="inline font-bold text-earthly-green hover:text-orange">
                Sign In
              </p>
            </Link>{" "}
            to write a review
          </MessageBox>
        )}
      </div>
    </>
  );
}
export default ProductScreen;
