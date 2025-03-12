import React, { useState } from "react";
import {
  Button,
  Container,
  ListGroup,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ insideDashboard, insideCompDash, setTab }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar
        style={{ zIndex: 1 }}
        className=" border  position-fixed w-100 bg-primary"
      >
        <Container>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand className="text-light fw-bolder ">
              <i className="fa-solid fa-computer"></i> HireVerse
            </Navbar.Brand>
          </Link>

          <span className="text-light fw-bold me-3">
            Welcome, {localStorage.getItem("name")}
          </span>

          {(insideDashboard || insideCompDash) && (
            <div className="ms-auto">
              <button
                style={{ color: " white" }}
                className="btn btn-link"
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                Log Out <i className="fa-solid fa-right-from-bracket"></i>
              </button>
              <Button variant="primary" onClick={handleShow} className="ms-5">
                <i className="fa-solid fa-bars"></i>
              </Button>
            </div>
          )}
        </Container>
      </Navbar>

      {/* side bar */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <ListGroup>
              <ListGroup.Item action onClick={() => setTab(0)}>
                profile
              </ListGroup.Item>

              <ListGroup.Item action onClick={() => setTab(1)}>
                {insideCompDash ? "Job Vacancy" : "Recent"}
              </ListGroup.Item>

              <ListGroup.Item action onClick={() => setTab(2)}>
                {insideCompDash ? "Job vacancy detials" : "jobs"}
              </ListGroup.Item>

              {insideCompDash && (
                <ListGroup.Item action onClick={() => setTab(3)}>
                  Job Request&#39;s
                </ListGroup.Item>
              )}

              {insideCompDash && (
                <ListGroup.Item action onClick={() => setTab(4)}>
                  Sorted Request&#39;s
                </ListGroup.Item>
              )}
            </ListGroup>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
