import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  var [show, setShow] = useState(true);

  useEffect(() => {
    var isShow = window.location.href?.includes("/admin");
    setShow(!isShow);
  }, [window.location.href]);

  if (show)
    return (
      <div style={{ height: "300px" }} className="mt-5 container w-100">
        <div className="d-flex justify-content-between">
          {/* intro */}
          <div style={{ width: "400px" }}>
            <h5>
              {" "}
              <i className="fa-solid fa-computer"> </i> Job Fair
            </h5>
            <p>
              Designed and built with all the love in the world by the Bootstrap
              team with the help of our contributors.
            </p>
            <p>coe liscenced Luminar,docs cc by 3,0</p>
            <p>Currently v5.3.2</p>
          </div>
          {/* links */}
          <div className="d-flex flex-column">
            <h5>Links</h5>
            <Link
              to={"/"}
              style={{ textDecoration: "none", color: "rgb(133, 132, 132)" }}
            >
              Home page
            </Link>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "rgb(133, 132, 132)" }}
            >
              login{" "}
            </Link>
            {/* <Link to={'/projects'} style={{textDecoration:'none', color:'white'}}>projects </Link> */}
          </div>
          {/* guide */}
          <div className="d-flex flex-column">
            <h5>Guides</h5>
            <a
              href="https://react.dev/"
              style={{ textDecoration: "none", color: "rgb(133, 132, 132)" }}
            >
              React
            </a>
            <a
              href="https://react-bootstrap.netlify.app/"
              style={{ textDecoration: "none", color: "rgb(133, 132, 132)" }}
            >
              React Bootstrap
            </a>
            <a
              href="https://www.npmjs.com/package/react-router-dom"
              style={{ textDecoration: "none", color: "rgb(133, 132, 132)" }}
            >
              React Router
            </a>
          </div>
          {/* contact */}
          <div className="d-flex flex-column">
            <h5>Contact Us</h5>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Enter your E-mail"
                className="form-control me-2"
              />
              <button className="btn btn-info">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <a
                href="https://fontawesome.com/"
                style={{ textDecoration: "none " }}
              >
                {" "}
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a
                href="https://fontawesome.com/"
                style={{ textDecoration: "none " }}
              >
                {" "}
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a
                href="https://fontawesome.com/"
                style={{ textDecoration: "none " }}
              >
                {" "}
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a
                href="https://fontawesome.com/"
                style={{ textDecoration: "none " }}
              >
                <i className="fa-brands fa-instagram"></i>{" "}
              </a>

              <a
                href="https://fontawesome.com/"
                style={{ textDecoration: "none " }}
              >
                <i className="fa-brands fa-github"></i>{" "}
              </a>

              <a
                href="https://fontawesome.com/"
                style={{ textDecoration: "none " }}
              >
                <i className="fa-solid fa-phone"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  else return <></>;
};

export default Footer;
