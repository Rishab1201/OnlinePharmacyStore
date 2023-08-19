import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import "bootstrap/dist/css/bootstrap.min.css";

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

function ShopScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  const [allProducts, setAllProducts] = useState(products);
  const [data, Setdata] = useState(products);

  // const [ProductData, setProductData] = useState([]);

  // Pagination Variables
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  console.log("products", products);

  const sortFunc = (e) => {
    if (e.target.value == "AllProducts") {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: products,
      });
    }
    if (e.target.value === "lowest") {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: products.sort((a, b) => a.price - b.price),
      });
      //setProducts(products.sort((a, b) => a.price - b.price))
    }

    if (e.target.value === "highest") {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: products.sort((a, b) => b.price - a.price),
      });
    }
  };

  const filterByRating = async (e) => {
    const result = await axios.get("/api/products");

    setAllProducts(result.data);

    if (e.target.value == "allProducts") {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: allProducts,
      });
    }
    if (e.target.value == "1") {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: allProducts.filter((a) => a.rating >= 1 && a.rating <= 1.9),
      });
    }
    if (e.target.value == "2") {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: allProducts.filter((a) => a.rating >= 2 && a.rating <= 2.9),
      });
    }
    if (e.target.value == "3") {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: allProducts.filter((a) => a.rating >= 3 && a.rating <= 3.9),
      });
    }
    if (e.target.value == "4") {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: allProducts.filter((a) => a.rating >= 4 && a.rating <= 4.9),
      });
    }
    if (e.target.value == "5") {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: allProducts.filter((a) => a.rating >= 5),
      });
    }
  };

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

  // https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
  return (
    <>
      <div>
        <Helmet>
          <title>AyurVedaMart</title>
        </Helmet>
        {/* <h1 className="p-10 text-5xl font-semibold text-center capitalize underline md:underline-offset-4">
          AYURVEDIC MEDICINES
        </h1> */}
        <div className="flex justify-center align-middle m-10">
          <div className=" section-header text-center">
            <h2 className="h2">
              <span>AYURVEDIC MEDICINES</span>
            </h2>
            <p>Natural Healthcare with Ayurveda</p>
          </div>
        </div>
        <Row className="mb-3 justify-content-between">
          <Col className="mx-3">
            Sort by Ratings :{" "}
            <select
              //value={order}
              onChange={filterByRating}
              className="focus:outline-none shadow-none border-2 border-earthly-green rounded-sm"
            >
              <option value="allProducts">All Products</option>
              <option value="1">Rating: 1 & up</option>
              <option value="2">Rating: 2 & up</option>
              <option value="3">Rating: 3 & up</option>
              <option value="4">Rating: 4 & up</option>
              <option value="5">Rating: 5</option>
            </select>
          </Col>
          <Col className="text-end">
            Sort by price:{" "}
            <select
              //value={order}
              onChange={sortFunc}
              className="focus:outline-none shadow-none border-2 border-earthly-green rounded-sm"
            >
              <option value="AllProducts" className="hover:bg-orange">
                All Products
              </option>
              <option value="lowest">Price: Low to High</option>
              <option value="highest">Price: High to Low</option>
            </select>
          </Col>
        </Row>
        {/* <div className="products">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Row>
              {products.map((product) => (
                <Col key={product.slug} sm={4} md={3} lg={3} className="mb-6">
                  <Product product={product}></Product>
                </Col>
              ))}
            </Row>
          )}
        </div> */}

        <div className="flex justify-center align-middle">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="flex justify-center align-middle flex-wrap mx-2">
              {records.map((product) => (
                <Product product={product} className="my-2"></Product>
              ))}
            </div>
          )}
        </div>

        <div className="flex align-middle justify-center my-9">
          <nav>
            <ul className="pagination">
              <button className="page-button">
                <a
                  href="#"
                  className="page-links focus:outline-none shadow-none"
                  onClick={perPage}
                >
                  Prev
                </a>
              </button>
              <li className="my-1">
                <p className="font-semibold">
                  {currentPage} of {npage}
                </p>
              </li>
              <button className="page-button">
                <a
                  href="#"
                  className="page-links focus:outline-none shadow-none"
                  onClick={nextPage}
                >
                  Next
                </a>
              </button>
            </ul>
          </nav>
        </div>
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
export default ShopScreen;
