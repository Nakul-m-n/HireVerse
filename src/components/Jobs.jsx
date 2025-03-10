import React, { useEffect, useState } from 'react'
import tcs from "../assets/images/tcs.png";
import { Button, Card, Modal } from 'react-bootstrap'

const Jobs = () => {

    const [show, setShow] = useState(false);
    const [userName, setUserName]= useState("user")

    useEffect(()=> {
      var name =window.localStorage.getItem("name")
    
        setUserName(name?name : "user")
      

    },[])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <div
            className="container-fluid"
            style={{ paddingTop: "100px", minHeight: "100vh" }}
          >
            <div className="d-flex justify-content-between align-items-center mx-5">
              <h1>
                {" "}
                Welcome ,
                <span style={{ fontFamily: "Protest Strike, serif" }}>{userName}</span>
              </h1>
    
              <div className="d-flex  ">
                <input type="text" className="form-control me-2 " />
                <Button className="btn btn-primary">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </Button>
              </div>
            </div>
    
            <div style={{ minHeight: "100vh" }}>
              <h2 className="m-5">
                Find your{" "}
                <span
                  style={{ fontFamily: "Protest Strike, serif" }}
                  className="text-primary"
                >
                  New Job
                </span>{" "}
                today!
              </h2>
              {/* cardsss */}
              <div className="d-flex-column justify-content-center container ">
                <Card className="shadow mb-2 ">
                  <Card.Body>
                    <div className="d-flex">
                      <img width={"100px"} src={tcs} alt="" />
    
                      <div>
                        <Card.Title>Junior React devloper</Card.Title>
    
                        <div className="d-flex justify-content-around">
                          <p>
                            {" "}
                            <i class="fa-regular fa-clock"></i> Full time
                          </p>
                          <p>
                            {" "}
                            <i class="fa-solid fa-house-laptop"></i>Work-from-Home
                          </p>
                          <p>
                            {" "}
                            <i class="fa-solid fa-laptop"></i>Work-at-Office
                          </p>
                          <p>
                            {" "}
                            <i class="fa-solid fa-location-dot"></i> Trivandrum
                          </p>
                          <p>
                            <i class="fa-solid fa-sack-dollar"></i> 15000 - 20000
                            Monthly
                          </p>
                        </div>
                        <div>
                          {/* discription */}
                          <p>
                            {" "}
                            Should have a strong grasp of HTML, CSS, JavaScript
                            (ES6+), React.js (components, hooks, state management),
                            React Router, basic Redux or Context API, RESTful APIs,
                            Git, and CSS frameworks like Tailwind or Bootstrap,
                            along with good problem-solving, communication, and
                            collaboration skills, Next.js
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p
                        style={{ fontFamily: "monospace" }}
                        className="font-weight-bold"
                      >
                        <i class="fa-solid fa-calendar-days"></i> Last date:{" "}
                        <span>20/03/2025</span>{" "}
                      </p>
                      <Button onClick={handleShow}>Apply now</Button>
                    </div>
                  </Card.Body>
                </Card>
    
                <Card className="shadow mb-2 ">
                  <Card.Body>
                    <div className="d-flex">
                      <img width={"100px"} src={tcs} alt="" />
    
                      <div>
                        <Card.Title>Junior React devloper</Card.Title>
    
                        <div className="d-flex justify-content-around">
                          <p>
                            {" "}
                            <i class="fa-regular fa-clock"></i> Full time
                          </p>
                          <p>
                            {" "}
                            <i class="fa-solid fa-house-laptop"></i>Work-from-Home
                          </p>
                          <p>
                            {" "}
                            <i class="fa-solid fa-laptop"></i>Work-at-Office
                          </p>
                          <p>
                            {" "}
                            <i class="fa-solid fa-location-dot"></i> Trivandrum
                          </p>
                          <p>
                            <i class="fa-solid fa-sack-dollar"></i> 15000 - 20000
                            Monthly
                          </p>
                        </div>
                        <div>
                          {/* discription */}
                          <p>
                            {" "}
                            Should have a strong grasp of HTML, CSS, JavaScript
                            (ES6+), React.js (components, hooks, state management),
                            React Router, basic Redux or Context API, RESTful APIs,
                            Git, and CSS frameworks like Tailwind or Bootstrap,
                            along with good problem-solving, communication, and
                            collaboration skills, Next.js
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p
                        style={{ fontFamily: "monospace" }}
                        className="font-weight-bold"
                      >
                        <i class="fa-solid fa-calendar-days"></i> Last date:{" "}
                        <span>20/03/2025</span>{" "}
                      </p>
                      <Button>Apply now</Button>
                    </div>
                  </Card.Body>
                </Card>
    
                <Card className="shadow mb-2 ">
                  <Card.Body>
                    <div className="d-flex">
                      <img width={"100px"} src={tcs} alt="" />
    
                      <div>
                        <Card.Title>Junior React devloper</Card.Title>
    
                        <div className="d-flex justify-content-around">
                          <p>
                            {" "}
                            <i class="fa-regular fa-clock"></i> Full time
                          </p>
                          <p>
                            {" "}
                            <i class="fa-solid fa-house-laptop"></i>Work-from-Home
                          </p>
                          <p>
                            {" "}
                            <i class="fa-solid fa-laptop"></i>Work-at-Office
                          </p>
                          <p>
                            {" "}
                            <i class="fa-solid fa-location-dot"></i> Trivandrum
                          </p>
                          <p>
                            <i class="fa-solid fa-sack-dollar"></i> 15000 - 20000
                            Monthly
                          </p>
                        </div>
                        <div>
                          {/* discription */}
                          <p>
                            {" "}
                            Should have a strong grasp of HTML, CSS, JavaScript
                            (ES6+), React.js (components, hooks, state management),
                            React Router, basic Redux or Context API, RESTful APIs,
                            Git, and CSS frameworks like Tailwind or Bootstrap,
                            along with good problem-solving, communication, and
                            collaboration skills, Next.js
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p
                        style={{ fontFamily: "monospace" }}
                        className="font-weight-bold"
                      >
                        <i class="fa-solid fa-calendar-days"></i> Last date:{" "}
                        <span>20/03/2025</span>{" "}
                      </p>
                      <Button>Apply now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>

          {/* modal */}
      <Modal
        
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
       size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>JOb title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>TCS</h2>
          <ul>
            <li>Job Mode :[Work form home/On-site/Hybrid]</li>
            <li>Location: Trivandrum </li>
            <li>Job Type: [Full-time/Part-time/Contract]</li>
            <li>Experience: 0-2 years</li>
          </ul>
          {/* job overview */}
          <p>
            We are looking for a Junior React Developer to join our team and
            assist in building modern, responsive web applications. You will
            work closely with senior developers to develop, test, and maintain
            front-end features using React.js, ensuring a seamless user
            experience
          </p>

          {/* Qualification */}
          <h4>Qualification</h4>
          <p>B-tech,Diploma-computer,any computer degree </p>
          {/* skills */}
          <h4>Skills</h4>
          <ul>
            <li>
              Strong understanding of React.js, JavaScript (ES6+), HTML, and
              CSS.
            </li>
            <li>Experience with React Hooks (useState, useEffect, etc.).</li>
            <li>Familiarity with React Router for navigation.</li>
            <li>
              Basic knowledge of state management (Context API, Redux, or
              Zustand is a plus).
            </li>
            <li>
              Understanding of REST APIs and asynchronous JavaScript (fetch,
              Axios, etc.).
            </li>
            <li>Experience with Git and GitHub for version control.</li>
            <li>Good problem-solving skills and attention to detail.</li>
            <li>Ability to work in a team and communicate effectively.</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Apply</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Jobs