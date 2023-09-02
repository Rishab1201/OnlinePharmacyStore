import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { getError } from "../utils";

export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    console.log("submit", e);
    e.preventDefault();
    try {
      const { data } = await Axios.post("/api/users/signin", {
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
    //     <title>Sign In</title>
    //   </Helmet>
    //   <h1 className="my-3">Sign In</h1>
    //   <Form onSubmit={submitHandler}>
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
    //     </Form.Group>
    //     <div className="mb-3">
    //       <Button type="submit">Sign In</Button>
    //     </div>
    //     <div className="mb-3">
    //       New customer?{' '}
    //       <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
    //     </div>
    //   </Form>
    // </Container>

    // <div className="flex flex-wrap w-full h-full">
    //   <div className="flex flex-col w-full md:w-1/2">
    //     <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
    //       <p className="text-3xl text-center">Welcome.</p>
    //       <form className="flex flex-col pt-3 md:pt-8">
    //         <div className="flex flex-col pt-4">
    //           <div className="relative flex ">
    //             <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-white border-t border-b border-l border-gray-300 shadow-sm ">
    //               <svg
    //                 width="15"
    //                 height="15"
    //                 fill="currentColor"
    //                 viewBox="0 0 1792 1792"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
    //               </svg>
    //             </span>
    //             <input
    //               type="text"
    //               id="design-login-email"
    //               required
    //               className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    //               placeholder="Email"
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>
    //         </div>
    //         <div className="flex flex-col pt-4 mb-12">
    //           <div className="relative flex ">
    //             <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-white border-t border-b border-l border-gray-300 shadow-sm ">
    //               <svg
    //                 width="15"
    //                 height="15"
    //                 fill="currentColor"
    //                 viewBox="0 0 1792 1792"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
    //               </svg>
    //             </span>
    //             <input
    //               type="password"
    //               id="design-login-password"
    //               required
    //               className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    //               placeholder="Password"
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //           </div>
    //         </div>
    //         <button
    //           type="submit"
    //           className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
    //           onClick={submitHandler}
    //         >
    //           <span className="w-full">Submit</span>
    //         </button>
    //       </form>
    //       <div className="pt-12 pb-12 text-center">
    //         <p>
    //           Don&#x27;t have an account?
    //           <Link to={`/signup?redirect=${redirect}`}><span className="font-bold text-blue-400 hover:text-blue-200">Register here</span></Link>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-1/2 h-full shadow-2xl">
    //     <img
    //       className="hidden object-cover w-full h-screen md:block"
    //       src="./images/login.jpg"
    //       alt="img"
    //     />
    //   </div>
    // </div>

    <div className="flex justify-center align-middle pb-10 pt-10">
      <div className="form-container">
        <div className="cover">
          <h1 className="mt-5">For login to App</h1>
          <p className="mb-4">Hover Me !</p>
          <img src="./images/bowl1.jpg" alt="" className="plant-pic" />
        </div>
        <div class="form-section">
          <form id="login-form">
            <label for="username">Email:</label>
            <input type="text" id="Email" name="Email" required onChange={(e) => setEmail(e.target.value)} className="focus:border-none shadow-none"/>
            <br />

            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />

            <p className="text-lg mb-6">
               Don&#x27;t have an account?
               <Link to={`/signup?redirect=${redirect}`}><span className="font-bold text-earthly-green hover:text-slate-300 text-base">Register here</span></Link>
             </p>

            <button type="submit" onClick={submitHandler}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
