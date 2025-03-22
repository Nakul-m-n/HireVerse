import React, { useEffect, useState } from "react";
import landingimg from "../assets/images/landingimg.png";
import tcs from "../assets/images/tcs.png";
import infosys from "../assets/images/infosys.png";
import cog from "../assets/images/cog.png";
import wipro from "../assets/images/wipro.png";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../API";

const Home = () => {
  const [companies, setCompanies] = useState([]);
  const companies_ = [
    { name: "TCS", logo: tcs },
    { name: "Infosys", logo: infosys },
    { name: "Cognizant", logo: cog },
    { name: "Wipro", logo: wipro },
  ];

  useEffect(() => {
    api
      .get("/company/all")
      .then((res) => {
        setCompanies(res.data.reverse());
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message || "Something went wrong");
      });
  });

  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex-column justify-content-between align-items-center  border  w-100"
      >
        <div
          className="container shadow rounded mt-5  "
          style={{ minHeight: "80vh" }}
        >
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1
                style={{
                  fontSize: "60px",
                  fontFamily: ' "Playwrite DE Grund", serif',
                }}
              >
                HireVerse
              </h1>
              <p style={{ textAlign: "justify" }}>
                HireVerse is a next-gen job portal connecting job seekers with
                top companies. Our platform streamlines hiring, making it easy
                for candidates to find the right opportunities and for
                businesses to discover top talent. Whether you're job hunting or
                hiring, HireVerse simplifies the process for a smarter, faster,
                and better career experience.
              </p>
              <Link to={"/login"} className="btn btn-primary mt-3">
                Explore more
              </Link>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid " src={landingimg} alt="" />
            </div>
          </div>
        </div>

        <div className="container my-5 w-100">
          <div className="border rounded ">
            <h1>Recently Join Company</h1>
            <hr />
            <div className="d-flex justify-content-around align-items-center flex-wrap ">
              {companies.slice(0, 3).map((company, index) => (
                <Card key={index} className="my-3 " style={{ width: "13rem" }}>
                  <Card.Img variant="top" src={company.image} />
                  <Card.Body>
                    <Card.Title>{company.name}</Card.Title>
                    <Card.Text>{company.description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <marquee>
          <div className="d-flex justify-content-around  align-items-center">
            {companies_.map((company, index) => (
              <img
                key={index}
                width={"10%"}
                src={company.logo}
                alt={company.name}
              />
            ))}
          </div>
        </marquee>
      </div>
    </>
  );
};

export default Home;
