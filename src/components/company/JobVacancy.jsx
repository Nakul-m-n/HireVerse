import React from 'react'
import { Card } from 'react-bootstrap'

const JobVacancy = () => {
  return (
    <div style={{padding:'100px', minHeight:'100vh'}} className='container'>
        <h3>Job vacancy List's.</h3>
        <div className=' rounded container  d-flex justify-content-around align-items-center p-5 flex-wrap'>

        <Card style={{  width: '18rem', height:'10rem', backgroundColor:" rgb(207, 237, 227)" }} className='my-3 shadow '>
      <Card.Body>
        <Card.Title>Junior FULL Stack Devloper</Card.Title>
       
        <h6>Number of Applicants: <span>10</span> </h6>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', height:'10rem' ,backgroundColor:" rgb(207, 237, 227)" }} className='my-3 shadow'>
      <Card.Body>
        <Card.Title>Junior FULL Stack Devloper</Card.Title>
       
        <h6>Number of Applicants: <span>10</span> </h6>
      </Card.Body>
    </Card>

    <Card style={{  width: '18rem', height:'10rem',backgroundColor:" rgb(207, 237, 227)" }} className='my-3 shadow'>
      <Card.Body>
        <Card.Title>Junior FULL Stack Devloper</Card.Title>
       
        <h6>Number of Applicants: <span>10</span> </h6>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', height:'10rem',backgroundColor:" rgb(207, 237, 227)" }} className='my-3 shadow'>
      <Card.Body>
        <Card.Title>Junior FULL Stack Devloper</Card.Title>
       
        <h6>Number of Applicants: <span>10</span> </h6>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', height:'10rem',backgroundColor:" rgb(207, 237, 227)" }} className='my-3 shadow'>
      <Card.Body>
        <Card.Title>Junior FULL Stack Devloper</Card.Title>
       
        <h6>Number of Applicants: <span>10</span> </h6>
      </Card.Body>
    </Card>
        </div>
    </div>
  )
}

export default JobVacancy