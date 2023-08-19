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
    // <div>
    //   <Row>
    //     <Col md={6}>
    //       <img
    //         className="img-large"
    //         src={selectedImage || product.image}
    //         alt={product.name}
    //       ></img>
    //     </Col>
    //     <Col md={3}>
    //       <ListGroup variant="flush">
    //         <ListGroup.Item>
    //           <Helmet>
    //             <title>{product.name}</title>
    //           </Helmet>
    //           <h1>{product.name}</h1>
    //         </ListGroup.Item>
    //         <ListGroup.Item>
    //           <Rating
    //             rating={product.rating}
    //             numReviews={product.numReviews}
    //           ></Rating>
    //         </ListGroup.Item>
    //         <ListGroup.Item>Pirce : ${product.price}</ListGroup.Item>
    //         <ListGroup.Item>
    //           <Row xs={1} md={2} className="g-2">
    //             {[product.image, ...product.images].map((x) => (
    //               <Col key={x}>
    //                 <Card>
    //                   <Button
    //                     className="thumbnail"
    //                     type="button"
    //                     variant="light"
    //                     onClick={() => setSelectedImage(x)}
    //                   >
    //                     <Card.Img variant="top" src={x} alt="product" />
    //                   </Button>
    //                 </Card>
    //               </Col>
    //             ))}
    //           </Row>
    //         </ListGroup.Item>
    //         <ListGroup.Item>
    //           Description:
    //           <p>{product.description}</p>
    //         </ListGroup.Item>
    //       </ListGroup>
    //     </Col>
    //     <Col md={3}>
    //       <Card>
    //         <Card.Body>
    //           <ListGroup variant="flush">
    //             <ListGroup.Item>
    //               <Row>
    //                 <Col>Price:</Col>
    //                 <Col>${product.price}</Col>
    //               </Row>
    //             </ListGroup.Item>
    //             <ListGroup.Item>
    //               <Row>
    //                 <Col>Status:</Col>
    //                 <Col>
    //                   {product.countInStock > 0 ? (
    //                     <Badge bg="success">In Stock</Badge>
    //                   ) : (
    //                     <Badge bg="danger">Unavailable</Badge>
    //                   )}
    //                 </Col>
    //               </Row>
    //             </ListGroup.Item>

    //             {product.countInStock > 0 && (
    //               <ListGroup.Item>
    //                 <div className="d-grid">
    //                   <Button onClick={addToCartHandler} variant="primary">
    //                     Add to Cart
    //                   </Button>
    //                 </div>
    //               </ListGroup.Item>
    //             )}
    //           </ListGroup>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    //   <div className="my-3">
    //     <h2 ref={reviewsRef}>Reviews</h2>
    //     <div className="mb-3">
    //       {product.reviews.length === 0 && (
    //         <MessageBox>There is no review</MessageBox>
    //       )}
    //     </div>
    //     <ListGroup>
    //       {product.reviews.map((review) => (
    //         <ListGroup.Item key={review._id}>
    //           <strong>{review.name}</strong>
    //           <Rating rating={review.rating} caption=" "></Rating>
    //           <p>{review.createdAt.substring(0, 10)}</p>
    //           <p>{review.comment}</p>
    //         </ListGroup.Item>
    //       ))}
    //     </ListGroup>
    //     <div className="my-3">
    //       {userInfo ? (
    //         <form onSubmit={submitHandler}>
    //           <h2>Write a customer review</h2>
    //           <Form.Group className="mb-3" controlId="rating">
    //             <Form.Label>Rating</Form.Label>
    //             <Form.Select
    //               aria-label="Rating"
    //               value={rating}
    //               onChange={(e) => setRating(e.target.value)}
    //             >
    //               <option value="">Select...</option>
    //               <option value="1">1- Poor</option>
    //               <option value="2">2- Fair</option>
    //               <option value="3">3- Good</option>
    //               <option value="4">4- Very good</option>
    //               <option value="5">5- Excelent</option>
    //             </Form.Select>
    //           </Form.Group>
    //           <FloatingLabel
    //             controlId="floatingTextarea"
    //             label="Comments"
    //             className="mb-3"
    //           >
    //             <Form.Control
    //               as="textarea"
    //               placeholder="Leave a comment here"
    //               value={comment}
    //               onChange={(e) => setComment(e.target.value)}
    //             />
    //           </FloatingLabel>

    //           <div className="mb-3">
    //             <Button disabled={loadingCreateReview} type="submit">
    //               Submit
    //             </Button>
    //             {loadingCreateReview && <LoadingBox></LoadingBox>}
    //           </div>
    //         </form>
    //       ) : (
    //         <MessageBox>
    //           Please{' '}
    //           <Link to={`/signin?redirect=/product/${product.slug}`}>
    //             Sign In
    //           </Link>{' '}
    //           to write a review
    //         </MessageBox>
    //       )}
    //     </div>
    //   </div>
    // </div>
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
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>
          </div>

          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            {product.reviews.map((reviews, index) => (
              <div
                className="p-8 border rounded-lg dark:border-gray-700"
                key={reviews._id}
              >
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                  “{reviews.comment}”.
                </p>

                <div className="flex items-center mt-8 -mx-2">
                  <img
                    className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />

                  <div className="mx-2">
                    <h1 className="font-bold text-gray-800 capitalize dark:text-white">
                      {reviews.name}
                    </h1>
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
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>

      <div className="my-3">
        {userInfo ? (
          <form onSubmit={submitHandler}>
            <h2>Write a customer review</h2>
            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Rating</Form.Label>
              <Form.Select
                aria-label="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="form-select "
              >
                <option value="">Select...</option>
                <option value="1">1- Poor</option>
                <option value="2">2- Fair</option>
                <option value="3">3- Good</option>
                <option value="4">4- Very good</option>
                <option value="5">5- Excelent</option>
              </Form.Select>
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="focus:outline-none focus:shadow-none focus:border-earthly-green border-1 border-earthly-green"
              />
            </FloatingLabel>

            <div className="mb-3">
              <Button
                disabled={loadingCreateReview}
                type="submit"
                className="submit-button text-white bg-earthly-green hover:bg-orange border-0"
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
