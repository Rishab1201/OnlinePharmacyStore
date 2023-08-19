import React from "react";
import { Link } from "react-router-dom";

const AboutScreen = () => {
  return (
    <>
      <div className="page-width pt-5">
        <h1 className="page-header">
          AyurVedaMart - one of the best online ayurvedic medicines store
        </h1>
        <div className="grid">
          <div className="grid_item">
            <div className="rte">
              <p>
                <span>
                  Quality{" "}
                  <strong>
                    <Link
                      to="/"
                      className="text-earthly-green hover:text-orange"
                    >
                      ayurvedic products
                    </Link>
                  </strong>{" "}
                  at a click!
                </span>
              </p>
              <p className="my-4">
                <span>
                  At{" "}
                  <strong>
                    <Link
                      to="/"
                      className="text-earthly-green hover:text-orange"
                    >
                      AyurVedaMart
                    </Link>
                  </strong>
                  , we are dedicated to bringing the ancient wisdom of Ayurveda
                  into the modern world. We understand the importance of natural
                  healing and holistic well-being, and that's why we've curated
                  a comprehensive collection of authentic Ayurvedic medicines
                  and herbal products.
                </span>
              </p>

              <h2 className="my-4 font-bold text-lg">Our Vision</h2>

              <p className="my-4">
                <span>
                  Our vision is to be the leading online platform for Ayurvedic
                  medicines and herbal remedies. We strive to bridge the gap
                  between traditional Ayurveda and the convenience of online
                  shopping, making natural healing accessible to people
                  worldwide.
                </span>
              </p>

              <h2 className="my-4 font-bold text-lg">Get in Touch</h2>

              <p className="my-4">
                <span>
                  Have a question or need assistance? Our customer support team
                  is here to help. Reach out to us via email, phone, or our
                  online chat, and we'll be delighted to assist you.
                </span>
              </p>

              <p className="my-4">
                Thank you for choosing
                <strong>
                  <Link to="/" className="text-earthly-green hover:text-orange">
                    &nbsp; AyurVedaMart &nbsp;
                  </Link>
                </strong>
                as your trusted Ayurvedic partner. Together, let's embark on a
                journey of well-being and rejuvenation, the Ayurvedic way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutScreen;
