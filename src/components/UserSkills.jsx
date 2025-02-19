import React from 'react'
import { Button, Form } from 'react-bootstrap'

const UserSkills = () => {
  return (
    <div className="container w-75">
            <div className="row">
              {/* Left Column (Empty for Future Content) */}
              <div className="col-lg-6 d-flex-column align-items-center justify-content-center p-5">
                <div className='mt-3 d-flex-column align-items-center justify-content-center text-center'>
                
                    
                    
                
                  <h5>Html</h5>
                <h5>  css </h5>
                <h5>Java Script</h5>
                <h5>React</h5>
                </div>
              </div>

              {/* Right Column - Form & Image */}
              <div className="col-lg-6 p-5 d-flex flex-column align-items-center justify-content-center text-center">
                

                {/* User Form */}
                <div className="w-100">
                  <Form.Floating className="mb-3">
                    <Form.Control id="floatingSkills" type="text" placeholder="Name" />
                    <label htmlFor="floatingName">skill</label>
                  </Form.Floating>

                 

                 

                  <Button variant="success" className="w-100 mt-3">
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default UserSkills