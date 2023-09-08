import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Store } from "./Store";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignupScreen from "./screens/SignupScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Button from "react-bootstrap/Button";
import { getError } from "./utils";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import SearchScreen from "./screens/SearchScreen";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardScreen from "./screens/DashboardScreen";
import AdminRoute from "./components/AdminRoute";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import MapScreen from "./screens/MapScreen";
import Sidebar from "./components/Sidebar";
import ShopScreen from "./screens/ShopScreen";
import ContactScreen from "./screens/ContactScreen";
import AyurvedaScreen from "./screens/AyurvedaScreen";
import AboutScreen from "./screens/AboutScreen";
import Footer from "./components/Footer.js";
import AdminContact from "./screens/AdminContact";
import ReactPlayer from "react-player";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { fullBox, cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? fullBox
              ? "site-container active-cont d-flex flex-column full-box"
              : "site-container active-cont d-flex flex-column"
            : fullBox
            ? "site-container d-flex flex-column full-box"
            : "site-container d-flex flex-column"
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar expand="lg" className="bg-white sticky">
            <Container className="d-flex justify-content-between">
              <div className="d-flex">
                <Button
                  className="hover:text-amber-400"
                  id="sideBarButton"
                  onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
                >
                  <i className="fas fa-bars"></i>
                </Button>

                <LinkContainer to="/">
                  <Navbar.Brand className="font-bold text-3xl">
                    {/* <h2 className="text-lime-300">
                      AyurVeda<span className="text-warning">MART</span>
                    </h2> */}

                    <div className="flex ml-6 mt-3">
                      <div>
                        <h2 className="text-lime-300 relative">
                          AyurVeda<span className="text-warning">Mart</span>
                        </h2>
                        <br></br>
                        <p className="absolute bottom-6 text-gray font-semibold text-sm left-28">
                          Health Care at a Click
                        </p>
                      </div>
                      <div>
                        <img
                          src="/images/cartImage.png"
                          className="w-22 h-16"
                        ></img>
                      </div>
                    </div>
                  </Navbar.Brand>
                </LinkContainer>
              </div>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              {/* <Navbar.Collapse id="basic-navbar-nav" className="d-flex"> */}
              <SearchBox className="d-flex justify-content-center" />

              {/* </Navbar.Collapse> */}
            </Container>
          </Navbar>
        </header>
        <div
          className={
            sidebarIsOpen
              ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column"
              : "side-navbar d-flex justify-content-between flex-wrap flex-column"
          }
        >
          <Sidebar
            categories={categories}
            setSidebarIsOpen={setSidebarIsOpen}
            userInfo={userInfo}
          />

          {/* <Nav className="p-2 text-white flex-column w-100">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav> */}
        </div>
        <div className="w-100 bg-earthly-green flex align-middle justify-center static">
          <Nav className="justify-content-end">
            <Link
              to="/"
              className={`nav-link text-lg text-white text-center pt-${cart.cartItems.length > 0 ? 3 : 2}`}
            >
              HOME
            </Link>

            <Link
              to="/aboutus"
              className={`nav-link text-lg text-white text-center pt-${cart.cartItems.length > 0 ? 3 : 2}`}
            >
              ABOUT US
            </Link>

            <Link
              to="/ayurveda"
              className={`nav-link text-lg text-white text-center pt-${cart.cartItems.length > 0 ? 3 : 2}`}
            >
              AYURVEDA
            </Link>

            <Link
              to="/contactus"
              className={`nav-link text-lg text-white text-center pt-${cart.cartItems.length > 0 ? 3 : 2}`}
            >
              CONTACT US
            </Link>

            <Link
              to="/shop"
              className={`nav-link text-lg text-white text-center pt-${cart.cartItems.length > 0 ? 3 : 2}`}
            >
              SHOP
            </Link>

            {cart.cartItems.length > 0 ? (
              <Link
                to="/cart"
                className={`nav-link text-lg text-white text-center  w-22 relative`}
              >
                {/* <span>
                <i
                  class="fa fa-shopping-cart fa-1x ml-1"
                  aria-hidden="true"
                ></i>
              </span> */}
                {cart.cartItems.length > 0 && (
                  // <Badge pill bg="danger" className="mx-1 rounded-full absolute">
                  //   {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  // </Badge>

                  <button
                    type="button"
                    class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg bg-transparent hover:bg-orange transition-none"
                  >
                    {/* <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg> */}
                    <i
                      class="fa fa-shopping-cart fa-1x ml-1"
                      aria-hidden="true"
                    ></i>
                    <span class="sr-only">Notifications</span>
                    <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </div>
                  </button>
                )}
              </Link>
            ) : null}
            {userInfo ? (
              <NavDropdown
                title={userInfo.name}
                id="basic-nav-dropdown"
                className={`nav-link text-white  text-center text-lg w-[115px] pt-${
                  cart.cartItems.length > 0 ? 2 : 0
                }`}
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item>User Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/orderhistory">
                  <NavDropdown.Item>Order History</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <Link
                  className="dropdown-item"
                  to="#signout"
                  onClick={signoutHandler}
                >
                  Sign Out
                </Link>
              </NavDropdown>
            ) : (
              <Link
                className={`nav-link text-lg text-white text-center pt-${cart.cartItems.length > 0 ? 3 : 2}`}
                to="/signin"
              >
                SIGN IN
              </Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown
                title="Admin"
                id="admin-nav-dropdown"
                className={`nav-link w-[110px] text-center text-lg pt-${cart.cartItems.length > 0 ? 2 : 0} mr-3`}
              >
                <LinkContainer to="/admin/dashboard">
                  <NavDropdown.Item>Dashboard</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/products">
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/orders">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/users">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/contactus">
                  <NavDropdown.Item>User Contacts</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </div>

        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/contactus" element={<ContactScreen />} />
              <Route path="/aboutus" element={<AboutScreen />} />
              <Route path="/ayurveda" element={<AyurvedaScreen />} />
              <Route path="/shop" element={<ShopScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/map"
                element={
                  <ProtectedRoute>
                    <MapScreen />
                  </ProtectedRoute>
                }
              />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="/admin/contactus"
                element={
                  <AdminRoute>
                    <AdminContact />
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>

              {/* <Route
              path="/admin/contactus"
              element={
                <AdminRoute>
                  <AdminContact/>
                </AdminRoute>
              }>
              </Route> */}

              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          {/* <div className="text-center">All rights reserved @ AyurVedaMart</div> */}
          <Footer className="bg-gray-900" />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
