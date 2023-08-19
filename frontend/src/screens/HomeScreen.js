import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);

  // Pagination Variables
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  // https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
  return (
    <>
      {/* <img
        src="..\images\AyurBanner3.jpg"
        alt="home"
        className="w-screen h-[80vh] object-cover"
      /> */}

      <div className="w-100 ">
        <Carousel data-bs-theme="dark" class="carousel">
          {/* <Carousel.Item>
            <img
              className="d-block w-100 h-60%"
              src="./images/ayuban5.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item> */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.ayurkart.com/cdn/shop/files/kottakkal-ayurvedic-medicines-slider_2048x.jpg?v=1639652056"
              alt="Second slide"
            />
            <Carousel.Caption>
              <div class="sub-banner">
                <div class="overflow-hidden" className="my-1">
                  <h1 class="header drop-in">
                    KOTTAKKAL ARYA VADIDYA<br></br> SALA AYURVEDIC MEDICINES
                  </h1>
                </div>

                <div class="overflow-hidden">
                  <p class="drop-in-2">100% Genuine @ AyurVedaMart</p>

                  <Link to="/shop">
                    <div class="banner-button drop-in-2">
                      <button className="my-1 bg-transparent">Shop Now</button>
                    </div>
                  </Link>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.ayurkart.com/cdn/shop/files/avp-ayurveda-medicine-near-me_2048x.jpg?v=1639655069"
              alt="Third slide"
            />
            <Carousel.Caption>
              <div class="sub-banner">
                <div class="overflow-hidden" className="my-1">
                  <h1 class="header drop-in">AVP AYURVEDIC MEDICINES</h1>
                </div>

                <div class="overflow-hidden">
                  <p class="drop-in-2">
                    Boost Your Health & Wellness | Classical Medicines |{" "}
                    <br></br>
                    Immunity Medicines
                  </p>

                  <Link to="/shop">
                    <div class="banner-button drop-in-2">
                      <button className="my-1 bg-transparent">Shop Now</button>
                    </div>
                  </Link>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* <div class="banner" className="w-100 h-[80vh] object-cover">
        <img
          src="https://www.ayurkart.com/cdn/shop/files/kottakkal-ayurvedic-medicines-slider_2048x.jpg?v=1639652056"
          alt="home"
          className="w-100 h-[80vh] object-cover bg-no-repeat"
        />
        <div class="sub-banner" >
          <div class="overflow-hidden" className="my-1">
            <h1 class="header drop-in">KOTTAKKAL ARYA VADIDYA<br></br> SALA AYURVEDIC MEDICINES</h1>
          </div>

          <div class="overflow-hidden">
            <p class="drop-in-2">
              100% Genuine @ AyurVedaMart
            </p>

            <div class="banner-button drop-in-2">
              <button className="my-1 bg-transparent">Shop Now</button>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <Helmet>
          <title>AyurVedaMart</title>
        </Helmet>
        <div className="flex align-middle justify-center">
          <div className=" home-section text-center pt-10 uppercase">
            <h3 className="h3">
              <span>latest products</span>
            </h3>
            <p>Explore Our Best Online Ayurvedic Medicines</p>
          </div>
        </div>

        <button class="pre-btn">
          <img src="./images/arrow.png" alt="" onClick={perPage} />
        </button>

        {/* <div className="products">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Row>
              {records.map((product) => (
                <Col key={product.slug} sm={4} md={3} lg={3} className="mb-6">
                  <Product product={product}></Product>
                </Col>
              ))}
            </Row>
          )}
        </div> */}
        <div className="products flex justify-center align-middle">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="product-container flex justify-center align-middle flex-wrap mx-2">
              {records.slice(0, 8).map((product) => (
                <Product
                  product={product}
                  className="product-map my-2"
                ></Product>
              ))}
            </div>
          )}
        </div>
        <button class="nxt-btn">
          <img src="./images/arrow.png" alt="" onClick={nextPage} />
        </button>
      </div>
    </>
  );

  function perPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
}
export default HomeScreen;
