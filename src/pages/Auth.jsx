import React, { useEffect } from "react";
import user from "../assets/images/user.png";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import API from "../API";
import { toast } from "react-toastify";

const Auth = ({ insideRegister }) => {
  const navigate = useNavigate();
  const [IsOtp, setIsOtp] = React.useState(false);

  const Submit = () => {
    if (IsOtp) {
      Verify();
    } else if (insideRegister) {
      Register();
    } else {
      Login();
    }
  };

  const Verify = async () => {
    var id = toast.loading("Verifying...");
    try {
      var data = {
        email: document.querySelector('input[type="email"]').value,
        otp: document.querySelector('input[type="number"]').value,
      };
      console.log(data);

      await API.post("/auth/verify-otp", data)

        .then((response) => {
          console.log(response);
          toast.update(id, {
            render: "Verification successful",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
          window.localStorage.setItem("token", response.data.token);
          window.localStorage.setItem("name", response.data.name);
          window.localStorage.setItem("email", response.data.email);
          window.localStorage.setItem("type", response.data.type);

          if (response.data.type === "company") {
            navigate("/compDashboard");
          } else if (response.data.type === "user") {
            navigate("/userDashboard");
          } else if (response.data.type === "admin") {
            navigate("/adminDashboard");
          }
        })
        .catch((error) => {
          toast.update(id, {
            render:
              error.response?.data?.message ||
              error.message ||
              "Something went wrong :)",
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        });
    } catch (error) {
      console.log(error?.message);
      toast.error(id, {
        render: "Something went wrong :)",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  const Register = async () => {
    var id = toast.loading("Registering...");
    try {
      var data = {
        email: document.querySelector('input[type="email"]').value,
        password: document.querySelector('input[type="password"]').value,
        name: document.querySelector('input[type="text"]')?.value,
        type: document.querySelector("select").value,
      };
      console.log(data);
      await API.post("/auth/register", data)
        .then((response) => {
          console.log(response);
          toast.update(id, {
            render: "Registration successful",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });

          setIsOtp(true);
        })
        .catch((error) => {
          toast.update(id, {
            render:
              error.response?.data?.message ||
              error.message ||
              "Something went wrong :)",
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        });
    } catch (error) {
      console.log(error?.message);
      toast.update(id, {
        render: "Something went wrong :)",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  const Login = async () => {
    var id = toast.loading("Logging in...");
    try {
      var data = {
        email: document.querySelector('input[type="email"]').value,
        password: document.querySelector('input[type="password"]').value,
      };
      console.log(data);
      await API.post("/auth/login", data)
        .then((response) => {
          toast.update(id, {
            render: "Login successful",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });

          window.localStorage.setItem("token", response.data.token);
          window.localStorage.setItem("name", response.data.name);
          window.localStorage.setItem("email", response.data.email);
          window.localStorage.setItem("type", response.data.type);

          if (response.data.type === "company") {
            navigate("/compDashboard");
          } else if (response.data.type === "user") {
            navigate("/userDashboard");
          } else if (response.data.type === "admin") {
            navigate("/adminDashboard");
          }
        })
        .catch((error) => {
          toast.update(id, {
            render:
              error.response?.data?.message ||
              error.message ||
              "Something went wrong :)",
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        });
    } catch (error) {
      console.log(error?.message);
      toast.update(id, {
        render: "Something went wrong :)",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

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
                  {IsOtp ? "OTP " : insideRegister ? "SignUp" : "Login"}
                </h3>
                <hr />

                <div className="p-3 ">
                  {IsOtp ? (
                    <>
                      <p style={{ textAlign: "center", color: "grey" }}>
                        <Link
                          style={{ color: "grey" }}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsOtp(false);
                            navigate("/login");
                          }}
                        >
                          Login
                        </Link>
                      </p>

                      <p style={{ textAlign: "center", color: "grey" }}>
                        <Link
                          style={{ color: "grey" }}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsOtp(false);
                            navigate("/register");
                          }}
                        >
                          New here
                        </Link>
                      </p>
                    </>
                  ) : insideRegister ? (
                    <p style={{ textAlign: "center", color: "grey" }}>
                      <Link style={{ color: "grey" }} to={"/login"}>
                        Login
                      </Link>
                    </p>
                  ) : (
                    <p style={{ textAlign: "center", color: "grey" }}>
                      <Link style={{ color: "grey" }} to={"/register"}>
                        New here
                      </Link>
                    </p>
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
                  {IsOtp
                    ? "Verify your email"
                    : ` Sign ${insideRegister ? "up" : "in"} to your account`}
                </p>

                {
                  // inside register
                  insideRegister && !IsOtp && (
                    <>
                      <FloatingLabel label="Username" className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="UserName"
                          name="name"
                        />
                      </FloatingLabel>
                    </>
                  )
                }
                {/* email */}
                <FloatingLabel label="E-mail address" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    disabled={IsOtp}
                  />
                </FloatingLabel>
                {/* password */}
                {!IsOtp ? (
                  <FloatingLabel label="Password " className="mb-3">
                    <Form.Control type="password" placeholder="" />
                  </FloatingLabel>
                ) : (
                  <FloatingLabel label="OTP " className="mb-3">
                    <Form.Control
                      type="number"
                      placeholder="enter 6 digit otp"
                      name="otp"
                    />
                  </FloatingLabel>
                )}

                {insideRegister && !IsOtp && (
                  <FloatingLabel label="Type" className="mb-3">
                    <Form.Select defaultValue="user">
                      <option value="user">User</option>
                      <option value="company">Company</option>
                    </Form.Select>
                  </FloatingLabel>
                )}
                <Link
                  style={{ alignContent: "center" }}
                  className="btn btn-primary  "
                  onClick={Submit}
                >
                  {IsOtp ? "SUBMIT" : insideRegister ? "signup" : "Login"}
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
