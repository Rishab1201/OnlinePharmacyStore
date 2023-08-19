import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { getError } from "../utils";

export default function SignupScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const { data } = await Axios.post("/api/users/signup", {
        name,
        email,
        password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    // <Container className="small-container">
    //   <Helmet>
    //     <title>Sign Up</title>
    //   </Helmet>
    //   <h1 className="my-3">Sign Up</h1>
    //   <Form onSubmit={submitHandler}>
    //     <Form.Group className="mb-3" controlId="name">
    //       <Form.Label>Name</Form.Label>
    //       <Form.Control onChange={(e) => setName(e.target.value)} required />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="email">
    //       <Form.Label>Email</Form.Label>
    //       <Form.Control
    //         type="email"
    //         required
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="password">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         required
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <Form.Group className="mb-3" controlId="confirmPassword">
    //         <Form.Label>Confirm Password</Form.Label>
    //         <Form.Control
    //           type="password"
    //           onChange={(e) => setConfirmPassword(e.target.value)}
    //           required
    //         />
    //       </Form.Group>
    //     </Form.Group>
    //     <div className="mb-3">
    //       <Button type="submit">Sign Up</Button>
    //     </div>
    //     <div className="mb-3">
    //       Already have an account?{' '}
    //       <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
    //     </div>
    //   </Form>
    // </Container>

    <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
      <div className="px-4 py-8 sm:px-10">
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm leading-5">
            <span className="px-2 text-gray-500 bg-white">Login to shop</span>
          </div>
        </div>
        <div className="mt-6">
          <div className="w-full space-y-6">
            <div className="w-full">
              <div className="relative ">
                <input
                  type="text"
                  id="search-form-price"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Full Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="relative ">
                <input
                  type="text"
                  id="search-form-location"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="relative ">
                <input
                  type="text"
                  id="search-form-name"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="relative ">
                <input
                  type="text"
                  id="search-form-name"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Confirm Password"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="button"
                  className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  onClick={submitHandler}
                >
                  Sign Up
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
        <p className="text-xs leading-5 text-gray-500">
          Already have an account?{" "}
          <Link to={`/signin?redirect=${redirect}`}><span className="font-bold text-blue-400 hover:text-blue-200">Sign-In</span></Link>
        </p>
      </div>
    </div>
  );
}
