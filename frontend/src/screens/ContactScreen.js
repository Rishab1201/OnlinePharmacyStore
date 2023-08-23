import React, { useState, useEffect, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import Axios from 'axios';
import { Store } from '../Store';

const ContactScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    console.log("Submit", e);
    e.preventDefault();
    try {
      let records = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      const {data}  = await Axios.post(`/api/contacts/contact`, records,{
        headers: { authorization: `Bearer ${userInfo.token}` },
      });

      console.log("inserted data",data);
      toast.success("RECODES CREATED");
    } catch (error) {
      toast.error(error);
    }
};

  return (
    <section className="contact-section">
      <div className="container shadow-sm">
        <div className="row justify-content-center my-5">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="custom-gradient col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4 text-white font-semibold text-2xl">
                      Send Us a Message
                    </h3>
                    <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-12 my-3">
                          <div className="form-group focus:outline-none shadow-none bg-none">
                            <input
                              type="text"
                              className="form-control focus:outline-none shadow-none bg-transperant border-none bg-transparent text-white"
                              name="name"
                              placeholder="Name"
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                              //   value={name}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12 my-3">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control focus:outline-none shadow-none bg-transperant border-none bg-transparent text-white"
                              name="email"
                              placeholder="Email"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              //   value={email}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12 my-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control focus:outline-none shadow-none bg-transperant border-none bg-transparent text-white"
                              name="subject"
                              placeholder="Subject"
                              onChange={(e) => {
                                setSubject(e.target.value);
                              }}
                              //   value={subject}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 my-3">
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control focus:outline-none shadow-none bg-transperant border-none bg-transparent text-white"
                              name="message"
                              placeholder="Message"
                              cols="30"
                              rows="6"
                              onChange={(e) => setMessage(e.target.value)}
                              //   value={message}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="">
                            <button class="button">
                              <span>send</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch shadow-sm">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3 className="contact-text text-2xl mb-5 tracking-wide font-bold">
                      Contact us
                    </h3>
                    <p className="mb-4 text-gray-600">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon flex align-middle justify-center my-3">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p className="font-semibold text-base">
                          <span className="text-lg">Address:</span> Pune,
                          Maharashtra
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center my-3">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p className="font-semibold text-lg">
                          <span>Phone:</span>
                          <a
                            href="tel://8668942249"
                            className="hover:text-earthly-green text-base"
                          >
                            +91 8668 9422 49
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center my-3">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p className="font-semibold text-lg">
                          <span>Email:</span>
                          <a
                            href="mailto:info@yoursite.com"
                            className="hover:text-earthly-green text-base"
                          >
                            info@ayurvedamart.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center my-3">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p className="font-semibold text-lg">
                          <span>Website:</span>
                          <a
                            href="#"
                            className="hover:text-earthly-green text-base"
                          >
                            ayurvedamart.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactScreen;
