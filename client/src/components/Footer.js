import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";

import logoo from "../images/chef2.png";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      {/* <img src={homeImage} style={{ height: "100%", width: "100%" }} /> */}
      <div className="bigFotterBox">
        <div className="footerBox">
          <div>
            <img
              src={logoo}
              style={{ color: "white" }}
              alt="SMovies"
              width="200px"
            />
          </div>
        </div>
        <div className="footerBox">
          <div>
            <p>Filips van BourgondiÃ«laan 47 , 3703 XA Zeist, Netherlands </p>
            {/* <p></p>
            <p>Vietnam</p> */}
            <div className="flexify">
              <FontAwesomeIcon icon={faPhoneSquareAlt} size={"lg"} />
              <p>&nbsp; (+31) 208 004 85</p>
            </div>
            <div className="flexify">
              <FontAwesomeIcon icon={faGoogle} size={"lg"} />
              <p>&nbsp;thesaigonres@gmail.nl</p>
            </div>
          </div>
        </div>
        <div className="footerBox">
          <div>
            {/* <h3>Follow us:</h3> */}
            <div className="d-flex">
              <div>
                <FontAwesomeIcon
                  icon={faFacebook}
                  size={"2x"}
                  color={"White"}
                />
              </div>
              <div className=" ml-4">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size={"2x"}
                  color={"White"}
                />
              </div>
              <div className=" ml-4">
                <FontAwesomeIcon icon={faTwitter} size={"2x"} color={"White"} />
              </div>
              <div className=" ml-4">
                <FontAwesomeIcon icon={faYoutube} size={"2x"} color={"White"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
