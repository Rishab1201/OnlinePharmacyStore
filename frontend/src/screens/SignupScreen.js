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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const toggleConfirmPassword = () => {
    setIsConfirmPassword((prevState) => !prevState);
  }

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

    // <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
    //   <div className="px-4 py-8 sm:px-10">
    //     <div className="relative mt-6">
    //       <div className="absolute inset-0 flex items-center">
    //         <div className="w-full border-t border-gray-300"></div>
    //       </div>
    //       <div className="relative flex justify-center text-sm leading-5">
    //         <span className="px-2 text-gray-500 bg-white">Login to shop</span>
    //       </div>
    //     </div>
    //     <div className="mt-6">
    //       <div className="w-full space-y-6">
    //         <div className="w-full">
    //           <div className="relative ">
    //             <input
    //               type="text"
    //               id="search-form-price"
    //               className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    //               placeholder="Full Name"
    //               required
    //               onChange={(e) => setName(e.target.value)}
    //             />
    //           </div>
    //         </div>
    //         <div className="w-full">
    //           <div className="relative ">
    //             <input
    //               type="text"
    //               id="search-form-location"
    //               className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    //               placeholder="Email"
    //               required
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>
    //         </div>
    //         <div className="w-full">
    //           <div className="relative ">
    //             <input
    //               type="password"
    //               id="search-form-name"
    //               className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    //               placeholder="Password"
    //               required
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //           </div>
    //         </div>
    //         <div className="w-full">
    //           <div className="relative ">
    //             <input
    //               type="text"
    //               id="search-form-name"
    //               className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    //               placeholder="Confirm Password"
    //               required
    //               onChange={(e) => setConfirmPassword(e.target.value)}
    //             />
    //           </div>
    //         </div>
    //         <div>
    //           <span className="block w-full rounded-md shadow-sm">
    //             <button
    //               type="button"
    //               className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
    //               onClick={submitHandler}
    //             >
    //               Sign Up
    //             </button>
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
    //     <p className="text-xs leading-5 text-gray-500">
    //       Already have an account?{" "}
    //       <Link to={`/signin?redirect=${redirect}`}><span className="font-bold text-blue-400 hover:text-blue-200">Sign-In</span></Link>
    //     </p>
    //   </div>
    // </div>

    // <>
    //   <div className="container mt-10 mb-10">
    //     <section>
    //       <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //         <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
    //           <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    //             <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray">
    //               Create and account
    //             </h1>
    //             <form class="space-y-4 md:space-y-6" action="#">
    //               <div>
    //                 <label
    //                   for="Name"
    //                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
    //                 >
    //                   Full Name
    //                 </label>
    //                 <input
    //                   type="Name"
    //                   name="name"
    //                   id="name"
    //                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:placeholder-black dark:text-black focus:border-none"
    //                   placeholder="Name"
    //                   required=""
    //                   onChange={(e) => setName(e.target.value)}
    //                 />
    //               </div>

    //               <div>
    //                 <label
    //                   for="email"
    //                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
    //                 >
    //                   Your email
    //                 </label>
    //                 <input
    //                   type="email"
    //                   name="email"
    //                   id="email"
    //                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:placeholder-black dark:text-black focus:border-none"
    //                   placeholder="name@company.com"
    //                   required=""
    //                   onChange={(e) => setEmail(e.target.value)}
    //                 />
    //               </div>
    //               <div>
    //                 <label
    //                   for="password"
    //                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
    //                 >
    //                   Password
    //                 </label>
    //                 <input
    //                   type="text"
    //                   name="password"
    //                   id="password"
    //                   placeholder="Password"
    //                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:placeholder-black dark:text-black focus:border-none"
    //                   required=""
    //                   onChange={(e) => setPassword(e.target.value)}
    //                 />
    //               </div>
    //               <div>
    //                 <label
    //                   for="confirm-password"
    //                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
    //                   onChange={(e) => setConfirmPassword(e.target.value)}
    //                 >
    //                   Confirm password
    //                 </label>
    //                 <input
    //                   type="confirm-password"
    //                   name="confirm-password"
    //                   id="confirm-password"
    //                   placeholder="Password"
    //                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:placeholder-black dark:text-black focus:border-none"
    //                   required=""
    //                 />
    //               </div>

    //               <button
    //                 type="submit"
    //                 class="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    //                 onClick={submitHandler}
    //               >
    //                 Create an account
    //               </button>
    //               <p class="text-sm font-light text-black dark:text-gray-700">
    //                 Already have an account?{" "}
    //                 <Link to={`/signin?redirect=${redirect}`}>
    //                   <span className="font-bold text-blue-400 hover:text-blue-200">
    //                     Sign-In
    //                   </span>
    //                 </Link>
    //               </p>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </>

    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        @import\n        url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')\n      ",
        }}
      />
      <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: 1000 }}
        >
          <div className="md:flex w-full justify-center align-middle">
            {/* <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
              <svg
                id="a87032b8-5b37-4b7e-a4d9-4dbfbe394641"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="auto"
                viewBox="0 0 744.84799 747.07702"
              >
                <path
                  id="fa3b9e12-7275-481e-bee9-64fd9595a50d"
                  data-name="Path 1"
                  d="M299.205,705.80851l-6.56-25.872a335.96693,335.96693,0,0,0-35.643-12.788l-.828,12.024-3.358-13.247c-15.021-4.29394-25.24-6.183-25.24-6.183s13.8,52.489,42.754,92.617l33.734,5.926-26.207,3.779a135.92592,135.92592,0,0,0,11.719,12.422c42.115,39.092,89.024,57.028,104.773,40.06s-5.625-62.412-47.74-101.5c-13.056-12.119-29.457-21.844-45.875-29.5Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#f2f2f2"
                />
                <path
                  id="bde08021-c30f-4979-a9d8-cb90b72b5ca2"
                  data-name="Path 2"
                  d="M361.591,677.70647l7.758-25.538a335.93951,335.93951,0,0,0-23.9-29.371l-6.924,9.865,3.972-13.076c-10.641-11.436-18.412-18.335-18.412-18.335s-15.315,52.067-11.275,101.384l25.815,22.51-24.392-10.312a135.91879,135.91879,0,0,0,3.614,16.694c15.846,55.234,46.731,94.835,68.983,88.451s27.446-56.335,11.6-111.569c-4.912-17.123-13.926-33.926-24.023-48.965Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#f2f2f2"
                />
                <path
                  id="b3ac2088-de9b-4f7f-bc99-0ed9705c1a9d"
                  data-name="Path 22"
                  d="M747.327,253.4445h-4.092v-112.1a64.883,64.883,0,0,0-64.883-64.883H440.845a64.883,64.883,0,0,0-64.883,64.883v615a64.883,64.883,0,0,0,64.883,64.883H678.352a64.883,64.883,0,0,0,64.882-64.883v-423.105h4.092Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#e6e6e6"
                />
                <path
                  id="b2715b96-3117-487c-acc0-20904544b5b7"
                  data-name="Path 23"
                  d="M680.97,93.3355h-31a23.02,23.02,0,0,1-21.316,31.714H492.589a23.02,23.02,0,0,1-21.314-31.714H442.319a48.454,48.454,0,0,0-48.454,48.454v614.107a48.454,48.454,0,0,0,48.454,48.454H680.97a48.454,48.454,0,0,0,48.454-48.454h0V141.7885a48.454,48.454,0,0,0-48.454-48.453Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#fff"
                />
                <path
                  id="b06d66ec-6c84-45dd-8c27-1263a6253192"
                  data-name="Path 6"
                  d="M531.234,337.96451a24.437,24.437,0,0,1,12.23-21.174,24.45,24.45,0,1,0,0,42.345A24.43391,24.43391,0,0,1,531.234,337.96451Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#ccc"
                />
                <path
                  id="e73810fe-4cf4-40cc-8c7c-ca544ce30bd4"
                  data-name="Path 7"
                  d="M561.971,337.96451a24.43594,24.43594,0,0,1,12.23-21.174,24.45,24.45,0,1,0,0,42.345A24.43391,24.43391,0,0,1,561.971,337.96451Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#ccc"
                />
                <circle
                  id="a4813fcf-056e-4514-bb8b-e6506f49341f"
                  data-name="Ellipse 1"
                  cx="364.43401"
                  cy="261.50202"
                  r="24.45"
                  fill="#6c63ff"
                />
                <path
                  id="bbe451c3-febc-41ba-8083-4c8307a2e73e"
                  data-name="Path 8"
                  d="M632.872,414.3305h-142.5a5.123,5.123,0,0,1-5.117-5.117v-142.5a5.123,5.123,0,0,1,5.117-5.117h142.5a5.123,5.123,0,0,1,5.117,5.117v142.5A5.123,5.123,0,0,1,632.872,414.3305Zm-142.5-150.686a3.073,3.073,0,0,0-3.07,3.07v142.5a3.073,3.073,0,0,0,3.07,3.07h142.5a3.073,3.073,0,0,0,3.07-3.07v-142.5a3.073,3.073,0,0,0-3.07-3.07Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#ccc"
                />
                <rect
                  id="bb28937d-932f-4fdf-befe-f406e51091fe"
                  data-name="Rectangle 1"
                  x="218.56201"
                  y="447.10197"
                  width="218.552"
                  height="2.047"
                  fill="#ccc"
                />
                <circle
                  id="fcef55fc-4968-45b2-93bb-1a1080c85fc7"
                  data-name="Ellipse 2"
                  cx="225.46401"
                  cy="427.41999"
                  r="6.902"
                  fill="#6c63ff"
                />
                <rect
                  id="ff33d889-4c74-4b91-85ef-b4882cc8fe76"
                  data-name="Rectangle 2"
                  x="218.56201"
                  y="516.11803"
                  width="218.552"
                  height="2.047"
                  fill="#ccc"
                />
                <circle
                  id="e8fa0310-b872-4adf-aedd-0c6eda09f3b8"
                  data-name="Ellipse 3"
                  cx="225.46401"
                  cy="496.43702"
                  r="6.902"
                  fill="#6c63ff"
                />
                <path
                  d="M660.69043,671.17188H591.62207a4.50493,4.50493,0,0,1-4.5-4.5v-24.208a4.50492,4.50492,0,0,1,4.5-4.5h69.06836a4.50491,4.50491,0,0,1,4.5,4.5v24.208A4.50492,4.50492,0,0,1,660.69043,671.17188Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#6c63ff"
                />
                <circle
                  id="e12ee00d-aa4a-4413-a013-11d20b7f97f7"
                  data-name="Ellipse 7"
                  cx="247.97799"
                  cy="427.41999"
                  r="6.902"
                  fill="#6c63ff"
                />
                <circle
                  id="f58f497e-6949-45c8-be5f-eee2aa0f6586"
                  data-name="Ellipse 8"
                  cx="270.492"
                  cy="427.41999"
                  r="6.902"
                  fill="#6c63ff"
                />
                <circle
                  id="b4d4939a-c6e6-4f4d-ba6c-e8b05485017d"
                  data-name="Ellipse 9"
                  cx="247.97799"
                  cy="496.43702"
                  r="6.902"
                  fill="#6c63ff"
                />
                <circle
                  id="aff120b1-519b-4e96-ac87-836aa55663de"
                  data-name="Ellipse 10"
                  cx="270.492"
                  cy="496.43702"
                  r="6.902"
                  fill="#6c63ff"
                />
                <path
                  id="f1094013-1297-477a-ac57-08eac07c4bd5"
                  data-name="Path 88"
                  d="M969.642,823.53851H251.656c-1.537,0-2.782-.546-2.782-1.218s1.245-1.219,2.782-1.219H969.642c1.536,0,2.782.546,2.782,1.219S971.178,823.53851,969.642,823.53851Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#3f3d56"
                />
                <path
                  d="M792.25256,565.92292a10.09371,10.09371,0,0,1,1.41075.78731l44.8523-19.14319,1.60093-11.81526,17.92157-.10956-1.05873,27.0982-59.19987,15.65584a10.60791,10.60791,0,0,1-.44749,1.20835,10.2346,10.2346,0,1,1-5.07946-13.68169Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#ffb8b8"
                />
                <polygon
                  points="636.98 735.021 624.72 735.021 618.888 687.733 636.982 687.734 636.98 735.021"
                  fill="#ffb8b8"
                />
                <path
                  d="M615.96281,731.51778h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H601.076a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,615.96281,731.51778Z"
                  fill="#2f2e41"
                />
                <polygon
                  points="684.66 731.557 672.459 732.759 662.018 686.271 680.025 684.497 684.66 731.557"
                  fill="#ffb8b8"
                />
                <path
                  d="M891.68576,806.12757h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H876.7989a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,891.68576,806.12757Z"
                  transform="translate(-303.00873 15.2906) rotate(-5.62529)"
                  fill="#2f2e41"
                />
                <circle
                  cx="640.3925"
                  cy="384.57375"
                  r="24.56103"
                  fill="#ffb8b8"
                />
                <path
                  d="M849.55636,801.91945a4.47086,4.47086,0,0,1-4.415-3.69726c-6.34571-35.22559-27.08789-150.40528-27.584-153.59571a1.42684,1.42684,0,0,1-.01562-.22168v-8.58789a1.489,1.489,0,0,1,.27929-.87207l2.74024-3.83789a1.47845,1.47845,0,0,1,1.14355-.625c15.62207-.73242,66.78418-2.8789,69.25586.209h0c2.48242,3.10351,1.60547,12.50683,1.4043,14.36035l.00977.19336,22.98535,146.99512a4.51238,4.51238,0,0,1-3.71485,5.13476l-14.35644,2.36524a4.52127,4.52127,0,0,1-5.02539-3.09278c-4.44043-14.18847-19.3291-61.918-24.48926-80.38672a.49922.49922,0,0,0-.98047.13868c.25781,17.60546.88086,62.52343,1.0957,78.0371l.02344,1.6709a4.51811,4.51811,0,0,1-4.09277,4.53614l-13.84375,1.25781C849.83565,801.91359,849.695,801.91945,849.55636,801.91945Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#2f2e41"
                />
                <path
                  id="ae7af94f-88d7-4204-9f07-e3651de85c05"
                  data-name="Path 99"
                  d="M852.38089,495.2538c-4.28634,2.548-6.85116,7.23043-8.32276,11.9951a113.681,113.681,0,0,0-4.88444,27.15943l-1.55553,27.60021-19.25508,73.1699c16.68871,14.1207,26.31542,10.91153,48.78049-.63879s25.03222,3.85117,25.03222,3.85117l4.49236-62.25839,6.41837-68.03232a30.16418,30.16418,0,0,0-4.86143-4.67415,49.65848,49.65848,0,0,0-42.44229-8.99538Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#ffffff"
                />
                <path
                  d="M846.12661,580.70047a10.52561,10.52561,0,0,1,1.50061.70389l44.34832-22.1972.736-12.02551,18.2938-1.26127.98041,27.4126L852.7199,592.93235a10.4958,10.4958,0,1,1-6.59329-12.23188Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#ffb8b8"
                />
                <path
                  id="a6768b0e-63d0-4b31-8462-9b2e0b00f0fd"
                  data-name="Path 101"
                  d="M902.76552,508.41151c10.91151,3.85117,12.83354,45.57369,12.83354,45.57369-12.8367-7.06036-28.24139,4.49318-28.24139,4.49318s-3.20916-10.91154-7.06034-25.03223a24.52987,24.52987,0,0,1,5.13436-23.10625S891.854,504.558,902.76552,508.41151Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#ffffff"
                />
                <path
                  id="bfd7963f-0cf8-4885-9d3a-2c00bccda2e3"
                  data-name="Path 102"
                  d="M889.99122,467.53052c-3.06-2.44837-7.23517,2.00173-7.23517,2.00173l-2.4484-22.03349s-15.30095,1.8329-25.0935-.61161-11.32255,8.87513-11.32255,8.87513a78.57978,78.57978,0,0,1-.30582-13.77092c.61158-5.50838,8.56838-11.01675,22.6451-14.68932S887.6518,439.543,887.6518,439.543C897.44542,444.43877,893.05121,469.97891,889.99122,467.53052Z"
                  transform="translate(-227.576 -76.46149)"
                  fill="#2f2e41"
                />
              </svg>
            </div> */}
            <div className="w-full md:w-[600px] py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">Sign Up</h1>
                <p>Enter your information to Sign Up</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor className="text-xs font-semibold px-1">
                      First name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John smith"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                      </div>
                      <div className="w-full -ml-10 pl-10 rounded-lg border-2 outline-none relative border-gray-200 focus:border-indigo-500 bg-white">
                        <input
                          type={isPasswordVisible ? "text" : "password"}
                          className="w-full pl-10 -ml-10 rounded-lg pr-3 py-2 rounded-r-lg outline-none "
                          placeholder="************"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button
                          onClick={togglePasswordVisibility}
                          className="text-center"
                        >
                          {isPasswordVisible ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 absolute right-2 top-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 absolute right-2 top-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor className="text-xs font-semibold px-1">
                      Confirm Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                      </div>
                      <div className="w-full -ml-10 pl-10 rounded-lg border-2 outline-none relative border-gray-200 focus:border-indigo-500 bg-white">
                        <input
                          type={isConfirmPassword ? "text" : "password"}
                          className="w-full pl-10 -ml-10 rounded-lg pr-3 py-2 rounded-r-lg outline-none "
                          placeholder="************"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                        <button
                          onClick={toggleConfirmPassword}
                          className="text-center"
                        >
                          {isConfirmPassword ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 absolute right-2 top-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 absolute right-2 top-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* w-5 h-5 absolute right-2 top-3 */}
                <p class="text-sm font-light text-black dark:text-gray-700 pb-3">
                  Already have an account?{" "}
                  <Link to={`/signin?redirect=${redirect}`}>
                    <span className="font-bold text-blue-400 hover:text-blue-200">
                      Sign-In
                    </span>
                  </Link>
                </p>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      className="block w-full max-w-xs mx-auto bg-earthly-green hover:bg-slate-300 focus:bg-earthly-green text-white rounded-lg px-3 py-3 font-semibold"
                      onClick={submitHandler}
                    >
                      SIGN UP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {"{"}/* {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */} */
      {"}"}
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
