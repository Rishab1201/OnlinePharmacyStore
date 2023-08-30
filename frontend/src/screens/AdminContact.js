import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import Button from "react-bootstrap/Button";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Store } from "../Store";
import { getError } from "../utils";
import { Helmet } from "react-helmet-async";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_REQUEST":
      return { ...state, loadingDelete: true, successDelete: false };
    case "DELETE_SUCCESS":
      return {
        ...state,
        loadingDelete: false,
        successDelete: true,
      };
    case "DELETE_FAIL":
      return { ...state, loadingDelete: false };
    case "DELETE_RESET":
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
};

export const AdminContact = () => {
  const [{ loading, error, users, loadingDelete, successDelete }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: "",
    });

  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/contacts/contact`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
        console.log("Contact:", data);
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(err),
        });
      }
    };
    if (successDelete) {
      dispatch({ type: "DELETE_RESET" });
    } else {
      fetchData();
    }
  }, [userInfo, successDelete]);

  const deleteHandler = async (contact) => {
    if (window.confirm("Are you sure to delete?")) {
      try {
        dispatch({ type: "DELETE_REQUEST" });
        await axios.delete(`/api/contacts/${contact._id}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        toast.success("Contect deleted successfully");
        dispatch({ type: "DELETE_SUCCESS" });
      } catch (error) {
        toast.error(getError(error));
        dispatch({
          type: "DELETE_FAIL",
        });
      }
    }
  };
  return (
    <>
      <Helmet>
        <title>User Queries</title>
      </Helmet>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex align-middle justify-center">
          <div className=" home-section3 text-center pt-10 uppercase">
            <h3 className="h3-brand">
              <span>User Query and Message Log</span>
            </h3>
          </div>
        </div>
        {loadingDelete && <LoadingBox></LoadingBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {users.map((contact) => (
              <div
                className="p-8 bg-white border rounded shadow-sm"
                key={contact._id}
              >
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <a
                    href="/"
                    className="transition-colors duration-200 text-deep-purple-400 hover:text-deep-purple-800 text-lg"
                    aria-label="Category"
                  >
                    Date
                  </a>{" "}
                  <span className="text-gray-600 mb-3 text-base">
                    — {contact.createdAt}
                  </span>
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  title={contact.subject}
                  className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 first-letter:uppercase font-serif"
                >
                  <p className="font-bold">{contact.subject}</p>
                </a>
                <p className="mb-5 text-gray-700 font-serif">
                  {contact.message}
                </p>
                <div className="flex items-center">
                  <div>
                    <a
                      href="/"
                      aria-label="Author"
                      title="Author"
                      className="font-semibold text-gray-800 transition-colors duration-200"
                    >
                      <p className="text-lg font-bold font-serif">
                        {" "}
                        {contact.name}
                      </p>
                    </a>
                  </div>
                </div>

                <Button
                  className="mt-3 focus:outline-none shadow-none bg-earthly-green text-white hover:bg-orange focus:bg-none"
                  type="button"
                  variant="light"
                  onClick={() => deleteHandler(contact)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminContact;
