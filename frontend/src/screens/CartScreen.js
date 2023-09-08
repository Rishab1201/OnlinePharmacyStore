import { useContext } from "react";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MessageBox from "../components/MessageBox";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
    toast.error("Item removed. Your cart is now updated.");
  };

  
  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      {/* <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{' '}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        variant="light"
                        disabled={item.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button
                        variant="light"
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        disabled={item.quantity === item.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3}>₹{item.price}</Col>
                    <Col md={2}>
                      <Button
                        onClick={() => removeItemHandler(item)}
                        variant="light"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : ₹
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

      {/* <!-- component -->
<!-- Create By Joker Banny --> */}
      <div className="pb-28">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    @layer utilities {\n    input[type="number"]::-webkit-inner-spin-button,\n    input[type="number"]::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  }\n',
          }}
        />
        <div className="h-screen bg-gray-100 pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            {cartItems.length === 0 ? (
              <MessageBox>
                <div class="empty-cart">
                  <svg
                    viewBox="656 573 264 182"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    className="h-[50vh] pl-16"
                  >
                    <rect
                      id="bg-line"
                      stroke="none"
                      fill-opacity="0.2"
                      fill="#FFE100"
                      fill-rule="evenodd"
                      x="656"
                      y="624"
                      width="206"
                      height="38"
                      rx="19"
                    ></rect>
                    <rect
                      id="bg-line"
                      stroke="none"
                      fill-opacity="0.2"
                      fill="#FFE100"
                      fill-rule="evenodd"
                      x="692"
                      y="665"
                      width="192"
                      height="29"
                      rx="14.5"
                    ></rect>
                    <rect
                      id="bg-line"
                      stroke="none"
                      fill-opacity="0.2"
                      fill="#FFE100"
                      fill-rule="evenodd"
                      x="678"
                      y="696"
                      width="192"
                      height="33"
                      rx="16.5"
                    ></rect>
                    <g
                      id="shopping-bag"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      transform="translate(721.000000, 630.000000)"
                    >
                      <polygon
                        id="Fill-10"
                        fill="#FFA800"
                        points="4 29 120 29 120 0 4 0"
                      ></polygon>
                      <polygon
                        id="Fill-14"
                        fill="#FFE100"
                        points="120 29 120 0 115.75 0 103 12.4285714 115.75 29"
                      ></polygon>
                      <polygon
                        id="Fill-15"
                        fill="#FFE100"
                        points="4 29 4 0 8.25 0 21 12.4285714 8.25 29"
                      ></polygon>
                      <polygon
                        id="Fill-33"
                        fill="#FFA800"
                        points="110 112 121.573723 109.059187 122 29 110 29"
                      ></polygon>
                      <polygon
                        id="Fill-35"
                        fill-opacity="0.5"
                        fill="#FFFFFF"
                        points="2 107.846154 10 112 10 31 2 31"
                      ></polygon>
                      <path
                        d="M107.709596,112 L15.2883462,112 C11.2635,112 8,108.70905 8,104.648275 L8,29 L115,29 L115,104.648275 C115,108.70905 111.7365,112 107.709596,112"
                        id="Fill-36"
                        fill="#FFE100"
                      ></path>
                      <path
                        d="M122,97.4615385 L122,104.230231 C122,108.521154 118.534483,112 114.257931,112 L9.74206897,112 C5.46551724,112 2,108.521154 2,104.230231 L2,58"
                        id="Stroke-4916"
                        stroke="#000000"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                      <polyline
                        id="Stroke-4917"
                        stroke="#000000"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        points="2 41.5 2 29 122 29 122 79"
                      ></polyline>
                      <path
                        d="M4,50 C4,51.104 3.104,52 2,52 C0.896,52 0,51.104 0,50 C0,48.896 0.896,48 2,48 C3.104,48 4,48.896 4,50"
                        id="Fill-4918"
                        fill="#000000"
                      ></path>
                      <path
                        d="M122,87 L122,89"
                        id="Stroke-4919"
                        stroke="#000000"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                      <polygon
                        id="Stroke-4922"
                        stroke="#000000"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        points="4 29 120 29 120 0 4 0"
                      ></polygon>
                      <path
                        d="M87,46 L87,58.3333333 C87,71.9 75.75,83 62,83 L62,83 C48.25,83 37,71.9 37,58.3333333 L37,46"
                        id="Stroke-4923"
                        stroke="#000000"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M31,45 C31,41.686 33.686,39 37,39 C40.314,39 43,41.686 43,45"
                        id="Stroke-4924"
                        stroke="#000000"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M81,45 C81,41.686 83.686,39 87,39 C90.314,39 93,41.686 93,45"
                        id="Stroke-4925"
                        stroke="#000000"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M8,0 L20,12"
                        id="Stroke-4928"
                        stroke="#000000"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M20,12 L8,29"
                        id="Stroke-4929"
                        stroke="#000000"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M20,12 L20,29"
                        id="Stroke-4930"
                        stroke="#000000"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M115,0 L103,12"
                        id="Stroke-4931"
                        stroke="#000000"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M103,12 L115,29"
                        id="Stroke-4932"
                        stroke="#000000"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M103,12 L103,29"
                        id="Stroke-4933"
                        stroke="#000000"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                    </g>
                    <g
                      id="glow"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      transform="translate(768.000000, 615.000000)"
                    >
                      <rect
                        id="Rectangle-2"
                        fill="#000000"
                        x="14"
                        y="0"
                        width="2"
                        height="9"
                        rx="1"
                      ></rect>
                      <rect
                        fill="#000000"
                        transform="translate(7.601883, 6.142354) rotate(-12.000000) translate(-7.601883, -6.142354) "
                        x="6.60188267"
                        y="3.14235449"
                        width="2"
                        height="6"
                        rx="1"
                      ></rect>
                      <rect
                        fill="#000000"
                        transform="translate(1.540235, 7.782080) rotate(-25.000000) translate(-1.540235, -7.782080) "
                        x="0.54023518"
                        y="6.28207994"
                        width="2"
                        height="3"
                        rx="1"
                      ></rect>
                      <rect
                        fill="#000000"
                        transform="translate(29.540235, 7.782080) scale(-1, 1) rotate(-25.000000) translate(-29.540235, -7.782080) "
                        x="28.5402352"
                        y="6.28207994"
                        width="2"
                        height="3"
                        rx="1"
                      ></rect>
                      <rect
                        fill="#000000"
                        transform="translate(22.601883, 6.142354) scale(-1, 1) rotate(-12.000000) translate(-22.601883, -6.142354) "
                        x="21.6018827"
                        y="3.14235449"
                        width="2"
                        height="6"
                        rx="1"
                      ></rect>
                    </g>
                    <polygon
                      id="plus"
                      stroke="none"
                      fill="#7DBFEB"
                      fill-rule="evenodd"
                      points="689.681239 597.614697 689.681239 596 690.771974 596 690.771974 597.614697 692.408077 597.614697 692.408077 598.691161 690.771974 598.691161 690.771974 600.350404 689.681239 600.350404 689.681239 598.691161 688 598.691161 688 597.614697"
                    ></polygon>
                    <polygon
                      id="plus"
                      stroke="none"
                      fill="#EEE332"
                      fill-rule="evenodd"
                      points="913.288398 701.226961 913.288398 699 914.773039 699 914.773039 701.226961 917 701.226961 917 702.711602 914.773039 702.711602 914.773039 705 913.288398 705 913.288398 702.711602 911 702.711602 911 701.226961"
                    ></polygon>
                    <polygon
                      id="plus"
                      stroke="none"
                      fill="#FFA800"
                      fill-rule="evenodd"
                      points="662.288398 736.226961 662.288398 734 663.773039 734 663.773039 736.226961 666 736.226961 666 737.711602 663.773039 737.711602 663.773039 740 662.288398 740 662.288398 737.711602 660 737.711602 660 736.226961"
                    ></polygon>
                    <circle
                      id="oval"
                      stroke="none"
                      fill="#A5D6D3"
                      fill-rule="evenodd"
                      cx="699.5"
                      cy="579.5"
                      r="1.5"
                    ></circle>
                    <circle
                      id="oval"
                      stroke="none"
                      fill="#CFC94E"
                      fill-rule="evenodd"
                      cx="712.5"
                      cy="617.5"
                      r="1.5"
                    ></circle>
                    <circle
                      id="oval"
                      stroke="none"
                      fill="#8CC8C8"
                      fill-rule="evenodd"
                      cx="692.5"
                      cy="738.5"
                      r="1.5"
                    ></circle>
                    <circle
                      id="oval"
                      stroke="none"
                      fill="#3EC08D"
                      fill-rule="evenodd"
                      cx="884.5"
                      cy="657.5"
                      r="1.5"
                    ></circle>
                    <circle
                      id="oval"
                      stroke="none"
                      fill="#66739F"
                      fill-rule="evenodd"
                      cx="918.5"
                      cy="681.5"
                      r="1.5"
                    ></circle>
                    <circle
                      id="oval"
                      stroke="none"
                      fill="#C48C47"
                      fill-rule="evenodd"
                      cx="903.5"
                      cy="723.5"
                      r="1.5"
                    ></circle>
                    <circle
                      id="oval"
                      stroke="none"
                      fill="#A24C65"
                      fill-rule="evenodd"
                      cx="760.5"
                      cy="587.5"
                      r="1.5"
                    ></circle>
                    <circle
                      id="oval"
                      stroke="#66739F"
                      stroke-width="2"
                      fill="none"
                      cx="745"
                      cy="603"
                      r="3"
                    ></circle>
                    <circle
                      id="oval"
                      stroke="#EFB549"
                      stroke-width="2"
                      fill="none"
                      cx="716"
                      cy="597"
                      r="3"
                    ></circle>
                    <circle
                      id="oval"
                      stroke="#FFE100"
                      stroke-width="2"
                      fill="none"
                      cx="681"
                      cy="751"
                      r="3"
                    ></circle>
                    <circle
                      id="oval"
                      stroke="#3CBC83"
                      stroke-width="2"
                      fill="none"
                      cx="896"
                      cy="680"
                      r="3"
                    ></circle>
                    <polygon
                      id="diamond"
                      stroke="#C46F82"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="886 705 889 708 886 711 883 708"
                    ></polygon>
                    <path
                      d="M736,577 C737.65825,577 739,578.34175 739,580 C739,578.34175 740.34175,577 742,577 C740.34175,577 739,575.65825 739,574 C739,575.65825 737.65825,577 736,577 Z"
                      id="bubble-rounded"
                      stroke="#3CBC83"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                    ></path>
                  </svg>

                  <p className=" text-lg font-bold mt-2">
                    Oops! Your cart is empty. Let's change that. Explore our
                    wide range of products and add some to your cart.
                  </p>
                </div>
                <div className="w-full flex align-middle justify-center">
                  <button className="align-middle w-28 h-10 bg-blue-400 rounded-lg text-white hover:bg-blue-300">
                    <Link to="/" className="hover:text-white">
                      Go Shopping
                    </Link>
                  </button>
                </div>
              </MessageBox>
            ) : (
              <div className="rounded-lg md:w-2/3">
                {cartItems.map((item) => (
                  <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full rounded-lg sm:w-40 shadow-sm"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900 text-clip overflow-hidden">
                          <Link to={`/product/${item.slug}`}>{item.name}</Link>
                        </h2>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <Button
                            onClick={() =>
                              updateCartHandler(item, item.quantity - 1)
                            }
                            variant="light"
                            disabled={item.quantity === 1}
                            className="focus:border-none shadow-none mr-2"
                          >
                            <i className="fas fa-minus-circle"></i>
                          </Button>{" "}
                          <span>{item.quantity}</span>{" "}
                          <Button
                            variant="light"
                            onClick={() =>
                              updateCartHandler(item, item.quantity + 1)
                            }
                            disabled={item.quantity === item.countInStock}
                            className="focus:border-none shadow-none ml-2"
                          >
                            <i className="fas fa-plus-circle"></i>
                          </Button>
                        </div>
                        <div className="flex items-center space-x-6 pt-4">
                          <p className="font-semibold text-xl">₹{item.price}</p>
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            onClick={() => removeItemHandler(item)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg> */}
                          <Button
                            onClick={() => removeItemHandler(item)}
                            variant="light"
                            className="focus:border-none shadow-none"
                          >
                            <i className="fas fa-trash"></i>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">
                  Subtotal({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                  items) :{" "}
                </p>
                <p className="text-gray-700">
                  ₹ {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                </p>
              </div>

              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className>
                  <p className="mb-1 text-lg font-bold">
                    ({cartItems.reduce((a, c) => a + c.quantity, 0)} items) : ₹{" "}
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </p>
                </div>
              </div>
              <button
                className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                onClick={checkoutHandler}
                disabled={cartItems.length === 0}
              >
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
