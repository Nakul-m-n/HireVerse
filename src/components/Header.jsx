import React, { useState } from "react";
import { Button, Container, ListGroup, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ insideDashboard , insideCompDash}) => {
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
              <i class="fa-solid fa-computer"></i> HireVerse
            </Navbar.Brand>
          </Link>
          {(insideDashboard || insideCompDash) && (
            <div className="ms-auto">
              <button style={{ color: " white" }} className="btn btn-link  ">
                Log Out <i className="fa-solid fa-right-from-bracket"></i>
              </button>
              <Button variant="primary" onClick={handleShow} className="ms-5">
                <i class="fa-solid fa-bars"></i>
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
            <ListGroup >
              
            <ListGroup.Item action >
                profile
              </ListGroup.Item>

              <ListGroup.Item action >
                { insideCompDash? "Job Vacancy" : "Recent"}
              </ListGroup.Item>

              <ListGroup.Item action >
                { insideCompDash?"Job vacancy detials": "jobs"}
              </ListGroup.Item>

             { insideCompDash && <ListGroup.Item action >
                Job Request's
              </ListGroup.Item>}

              { insideCompDash && <ListGroup.Item action >
                Sorted Request's
              </ListGroup.Item>}

            </ListGroup>

            
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
