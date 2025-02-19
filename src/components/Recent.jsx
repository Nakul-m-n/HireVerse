import React from 'react'
import tcs from "../assets/images/tcs.png";

import { Button, Card } from 'react-bootstrap'

const Recent = () => {
  return (
    <div
            className="container-fluid"
            style={{ paddingTop: "100px", minHeight: "100vh" }}
          >
            <div className="d-flex justify-content-between align-items-center mx-5">
              <h1>
                Recently applied
              </h1>
    

            </div>
    
            <div style={{ minHeight: "100vh" }}>
             
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
                      <Button className='disabled'>Applied</Button>
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
                      <Button className='disabled'>Applied</Button>
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
                      <Button className='disabled' >Applied</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
  )
}

export default Recent