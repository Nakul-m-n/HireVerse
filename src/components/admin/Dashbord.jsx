import React from 'react'
import { Card } from 'react-bootstrap'

const Dashbord = () => {

    
  return (
    <div className='container'>
        <h1 className='fw-bolder mt-5'>
            DashBoard 
        </h1>
        <div className='d-flex justify-content-around align-items-center'>
                        
    

        <Card
          bg={"primary"}
          text={ 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
         
          <Card.Body>
            <Card.Title>User </Card.Title>
            <Card.Text>
              Total User : <span>54</span>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          bg={"primary"}
          text={ 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          
          <Card.Body>
            <Card.Title> Company </Card.Title>
            <Card.Text>
             Total Commpany's: <span>5</span>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          bg={"primary"}
          text={ 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          
          <Card.Body>
            <Card.Title> job's </Card.Title>
            <Card.Text>
              Total Jobs: <span>10</span>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default Dashbord