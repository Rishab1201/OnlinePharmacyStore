import React from "react";
import { Link } from "react-router-dom";

const AyurvedaScreen = () => {
  return (
    <>
      <div className="page-width pt-5">
        <h1 className="page-header">What is Ayurveda ?</h1>
        <div className="grid">
          <div className="grid_item">
            <div className="rte">
              <p>
                <span>
                  <strong>Ayurveda</strong> is the oldest school of medicine
                  which helped our Indian king’s health even at the time of war.
                  Ayurveda is a system of medicine that is over 5000 years old
                  still lives and help you to lead better life with nature. We
                  promise you longevity of your health.
                  <strong> Prevention is better than cure.</strong> Prevention
                  starts with a life that is harmony in changing cycles of
                  nature.
                </span>
              </p>

              <p className="my-4">
                <span>
                  In the situation of our polluted cities the modern
                  technologies with side effects helps us only to pay more for
                  the lifetime. We are in a modern age with new diseases which
                  not even named. Modern medicines are not prescribed according
                  to your unique body type but our
                  <strong> ayurvedic medicines </strong>
                  are from the nature’s plate. The ancient culture and medicine
                  are dug back by us which are presented in this
                  <Link to="/">
                    <strong> Website</strong>
                  </Link>
                  .
                </span>
              </p>

              <p className="my-4">
                <span>
                  Ayurveda understand the cycle of nature, it provides what you
                  need and makes the rhythm of life enjoyable in this dynamic
                  circumstances.
                </span>
              </p>

              <p className="my-4">
                <span>
                  <a href="https://www.ayurcentre.in/ayurveda.html">
                    <strong>
                      Please click here to Know more about ayurveda
                    </strong>
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AyurvedaScreen;
