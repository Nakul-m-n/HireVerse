import React, { useEffect } from "react";
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
  const [image, setImage] = React.useState(null);
  async function getUrl(id) {
    await api
      .get("/media/profile" + (id ? `/${id}` : ""))
      .then((response) => {
        setImage(response.data.url);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        toast.error(
          error?.response?.data?.message || error?.message || "Unknown error"
        );
      });
  }

  useEffect(() => {
    getUrl();
  }, []);
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
            <h1>Reacently placed</h1>
            <hr />
            <div className="d-flex justify-content-around align-items-center flex-wrap ">
              <Card className="my-3 " style={{ width: "13rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Jhon carter</Card.Title>
                  <Card.Text>
                    Placed at abc company as React Developer with 3.2 LPA
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="my-3 " style={{ width: "13rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Jhon carter</Card.Title>
                  <Card.Text>
                    Placed at abc company as React Developer with 3.2 LPA
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="my-3 " style={{ width: "13rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Jhon carter</Card.Title>
                  <Card.Text>
                    Placed at abc company as React Developer with 3.2 LPA
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="my-3 " style={{ width: "13rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Jhon carter</Card.Title>
                  <Card.Text>
                    Placed at abc company as React Developer with 3.2 LPA
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <marquee>
          <div className="d-flex justify-content-around  align-items-center">
            <img width={"10%"} src={image} alt="" />
            <img width={"10%"} src={infosys} alt="" />
            <img width={"10%"} src={cog} alt="" />
            <img width={"10%"} src={wipro} alt="" />
          </div>
        </marquee>
      </div>
    </>
  );
};

export default Home;
