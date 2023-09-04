import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import { Store } from "../Store";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    fullBox,
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || "");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin?redirect=/shipping");
    }
  }, [userInfo, navigate]);
  const [country, setCountry] = useState(shippingAddress.country || "");

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
        location: shippingAddress.location,
      },
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
        location: shippingAddress.location,
      })
    );
    navigate("/payment");
  };

  useEffect(() => {
    ctxDispatch({ type: "SET_FULLBOX_OFF" });
  }, [ctxDispatch, fullBox]);

  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>

      <CheckoutSteps step1 step2></CheckoutSteps>
      {/* <div className="container small-container">
        <h1 className="my-3">Shipping Address</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Form.Group>
          <div className="mb-3">
            <Button
              id="chooseOnMap"
              type="button"
              variant="light"
              onClick={() => navigate('/map')}
            >
              Choose Location On Map
            </Button>
            {shippingAddress.location && shippingAddress.location.lat ? (
              <div>
                LAT: {shippingAddress.location.lat}
                LNG:{shippingAddress.location.lng}
              </div>
            ) : (
              <div>No location</div>
            )}
          </div>

          <div className="mb-3">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
            </div> */}

      <>
        <div>
          <div className="py-4 pl-[20%]">
            <div className="container border-none">
              <div className="row">
                <div className="col-md-9">
                  <div className="card">
                    <div className="card-header">
                      <h4>Basic Information</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label>Full Name</label>
                            <input
                              type="text"
                              name="First Name"
                              className="form-control"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label>Phone Number</label>
                            <input
                              type="text"
                              name="Phone"
                              className="form-control focus:border-none shadow-none"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label>Email address</label>
                            <input
                              type="email"
                              name="Email addr"
                              className="form-control focus:border-none shadow-none"
                            />
                          </div>
                        </div>
                        <div className="col-md-14">
                          <div className="form-group mb-9">
                            <label>Address</label>
                            <textarea
                              rows="5"
                              className="form-control focus:border-none shadow-none"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label>City</label>
                            <input
                              type="text"
                              name="City"
                              className="form-control focus:border-none shadow-none"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label>State</label>
                            <input
                              type="text"
                              name="State"
                              className="form-control focus:border-none shadow-none"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label>Pincode</label>
                            <input
                              type="text"
                              name="PinCode"
                              className="form-control focus:border-none"
                              value={postalCode}
                              onChange={(e) => setPostalCode(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div class="mt-6 flex items-center justify-end gap-x-6">
                          <Link to="/Cart">
                            <button
                              type="button-primary"
                              class="text-sm font-semibold leading-6 text-gray-900"
                            >
                              {" "}
                              Cancle
                            </button>
                          </Link>
                          <button
                            type="submit"
                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={submitHandler}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
