import React from "react";
import user from "../assets/images/user.png";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Auth = ({ insideRegister, insideCompany }) => {
  return (
    <div
      style={{ minHeight: "100vh", width: "100%" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container w-50">
        <div className="card shadow">
          <div className="row g-0" style={{ height: "600px" }}>
            {/* Left Column - Image Section */}
            <div className="col-lg-4 d-flex justify-content-center align-items-center bg-primary rounded-start h-100">
              <div>
                <img
                  className="img-fluid"
                  src={user}
                  alt="Login"
                  style={{ maxHeight: "60%", objectFit: "contain" }}
                />
                <h3
                  style={{
                    color: "white",
                    letterSpacing: "2px",
                    textAlign: "center",
                    fontFamily: '"Protest Strike", serif',
                  }}
                >
                  {insideRegister
                    ? "SignUp"
                    : insideCompany
                    ? "SignUp"
                    : "Login"}
                </h3>
                <hr />

                <div className="p-3 ">
                  {insideCompany && (
                    <>
                      <p style={{ textAlign: "center", color: "grey" }}>
                        <Link style={{ color: "grey" }} to={"/register"}>
                          New user
                        </Link>
                      </p>

                      <p style={{ textAlign: "center", color: "grey" }}>
                        <Link style={{ color: "grey" }} to={"/login"}>
                          Login
                        </Link>
                      </p>
                    </>
                  )}
                  {!insideRegister && !insideCompany && (
                    <p style={{ textAlign: "center", color: "grey" }}>
                      <Link style={{ color: "grey" }} to={"/register"}>
                        New here
                      </Link>
                    </p>
                  )}
                  {insideRegister && (
                    <>
                      <p style={{ textAlign: "center", color: "grey" }}>
                        <Link style={{ color: "grey" }} to={"/register2"}>
                          New company
                        </Link>
                      </p>

                      <p style={{ textAlign: "center", color: "grey" }}>
                        <Link style={{ color: "grey" }} to={"/login"}>
                          Login
                        </Link>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* Right Column - Content Section */}
            <div className="col-lg-8 d-flex  justify-content-center align-items-center">
              {/*  login form   */}
              <div className="d-flex-column w-75  ">
                <h3>HireVerse</h3>
                <p>
                  Sign {insideRegister ? "up" : insideCompany ? "up" : "in"} to
                  your account
                </p>

                {
                  // inside company
                  insideCompany && (
                    <FloatingLabel label="CompanyName" className="mb-3">
                      <Form.Control type="text" placeholder="CompanyName" />
                    </FloatingLabel>
                  )
                }

                {
                  // inside register
                  insideRegister && (
                    <>
                      <FloatingLabel label="Username" className="mb-3">
                        <Form.Control type="text" placeholder="UserName" />
                      </FloatingLabel>
                    </>
                  )
                }
                {/* email */}
                <FloatingLabel label="E-mail address" className="mb-3">
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                {/* password */}
                <FloatingLabel label="Passworsd " className="mb-3">
                  <Form.Control type="email" placeholder="" />
                </FloatingLabel>
                <Link
                  style={{ alignContent: "center" }}
                  className="btn btn-primary  "
                  to={"/userDashboard"}
                >
                  {insideRegister
                    ? "signup"
                    : insideCompany
                    ? "signup"
                    : "Login"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
