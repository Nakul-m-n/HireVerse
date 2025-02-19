import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'

const JobVacDetials = () => {
    const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
     <div style={{ minHeight: '100vh', padding:'100px' }} className='d-flex-column'>
    
        <Button onClick={handleShow} className='float-end' size='xl' style={{width:"5rem",marginRight:'60px'}} > + </Button>
    
      
        <div className=' p-5'>
        <Card style={{height:'18rem'}} className="shadow mb-2  ">
                  <Card.Body>
                    <div className="d-flex ">
                      <img className='img-fluid' width={"80px"} src='https://www.thestatesman.com/wp-content/uploads/2022/06/TCS.jpg' alt="" />
    
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
                      <Button >Apply now</Button>
                    </div>
                  </Card.Body>
                </Card>
        </div>
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
          <ul>
            <li>Location: [Remote/On-site/Hybrid]</li>
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
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>

    
  
  )
}

export default JobVacDetials