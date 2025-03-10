import React, { useState } from 'react'
import { Button, Card, FloatingLabel, Form, Modal } from 'react-bootstrap'
import tcs from "../../assets/images/tcs.png"
import AddJob from './AddJob';

const JobVacDetials = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <>
        <div
            className="container-fluid"
            style={{ paddingTop: "100px", minHeight: "100vh" }}
          >
           
           
    
            <div style={{ minHeight: "100vh" }}>
             <div className='d-flex align-items-center justify-content-between '>
                  <h2 className="m-5">
                   Job vaccancy detials
                  </h2>
                <AddJob/>
             </div>
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
                      <div>
                        <Button className='m-2'>delete</Button>
                        <Button onClick={handleShow} >edit</Button>
                        </div>
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
                      <div>
                        <Button className='m-2'>delete</Button>
                        <Button>edit</Button>
                        </div>
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
                      <div>
                        <Button className='m-2'>delete</Button>
                        <Button>edit</Button>
                        </div>
                     

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
           {/* Company name */}
           <FloatingLabel label="CompanyName" className="mb-3">
            <Form.Control type="text" placeholder="CompanyName" />
          </FloatingLabel>

          {/* about */}
          <FloatingLabel label="about" className="mb-3">
            <Form.Control type="text" placeholder="About" />
          </FloatingLabel>

          {/* date */}
          <FloatingLabel label="Last date" className="mb-3">
            <Form.Control type="date" placeholder="Last date" />
          </FloatingLabel>

          {/* Job time */}
          <FloatingLabel label="Job time" className="mb-3">
            <Form.Control type="text" placeholder="job time" />
          </FloatingLabel>

          {/* job type  */}
          <FloatingLabel label="Job type(work from home/office)" className="mb-3">
            <Form.Control type="text" placeholder="job time" />
          </FloatingLabel>

          {/* Location */}
          <FloatingLabel label="Location" className="mb-3">
            <Form.Control type="text" placeholder="Location " />
          </FloatingLabel>

          {/*  salary */}
          <FloatingLabel label=" salary" className="mb-3">
            <Form.Control type="text" placeholder=" salary" />
          </FloatingLabel>

          {/*  skills */}
          <FloatingLabel label=" Skills" className="mb-3">
            <Form.Control type="text" placeholder=" Skills" />
          </FloatingLabel>

          {/*  Qualification */}
          <FloatingLabel label=" Qualification" className="mb-3">
            <Form.Control type="text" placeholder=" Qualification" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default JobVacDetials