import { useEffect, useReducer, useState } from "react";
import Axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

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

export const AdminContact = () => {
    const [{ loading, error, contacts }, dispatch] = useReducer(reducer, {
        contacts: [],
        loading: true,
        error: "",
      });

      useEffect(() => {
        const fetchData = async () => {
          dispatch({ type: "FETCH_REQUEST" });
          try {
            const result = await Axios.get("/api/contacts/contact");
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
            console.log("Contacts",result);
          } catch (err) {
            dispatch({ type: "FETCH_FAIL", payload: err.message });
          }
    
          // setProducts(result.data);
        };
        fetchData();
      }, []);

    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="p-8 bg-white border rounded shadow-sm">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span className="text-gray-600"> 1 Feb 2020</span>
            </p>
            <a
              href="/"
              aria-label="Article"
              title="Jingle Bells"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Jingle Bells
            </a>
            <p className="mb-5 text-gray-700">
              Some pilots get picked and become television programs. Some don't,
              become nothing.
            </p>
            <div className="flex items-center">
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Vasile Melinte
                </a>
                
              </div>
            </div>
          </div>
          <div className="p-8 bg-white border rounded shadow-sm">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span className="text-gray-600"> 15 Nov 2020</span>
            </p>
            <a
              href="/"
              aria-label="Article"
              title="Happy new Year"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Happy new Year
            </a>
            <p className="mb-5 text-gray-700">
              Pommy ipsum smeg head whizz morris dancers come hither, bugger
              codswallop gob. Taking the mick middle class bog.
            </p>
            <div className="flex items-center">
              
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  John Doe
                </a>
                
              </div>
            </div>
          </div>
          <div className="p-8 bg-white border rounded shadow-sm">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              
              <span className="text-gray-600"> 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Article"
              title="Why i love C++"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Why i love C++
            </a>
            <p className="mb-5 text-gray-700">
              Sportacus andrew weatherall goose Refined gentlemen super mario des
              lynam alpha trion zap rowsdower.
            </p>
            <div className="flex items-center">
              
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Andrew Larkin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default AdminContact;