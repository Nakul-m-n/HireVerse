import React from 'react'
import { Button, Form } from 'react-bootstrap'

const UserQuali = () => {
  return (
<div className="container w-75">
            <div className="row">
              {/* Left Column (Empty for Future Content) */}
              <div className="col-lg-6 d-flex-column align-items-center justify-content-center p-5">
                <div className='mt-3 d-flex-column align-items-center justify-content-center text-center'>
                
                    
                    
                
                  <h5>abc school.asdasd with 93%</h5>
                <h5> asd scholl with 75%  </h5>
                <h5>diploma in engineering</h5>
                </div>
              </div>

              {/* Right Column - Form & Image */}
              <div className="col-lg-6 p-5 d-flex flex-column align-items-center justify-content-center text-center">
                

                {/* User Form */}
                <div className="w-100">
                  <Form.Floating className="mb-3">
                    <Form.Control id="floatingHighSchool" type="text" placeholder="HighSchool" />
                    <label htmlFor="floatingHighSchool">education</label>
                  </Form.Floating>

                  

                  <Button variant="success" className="w-100 mt-3">
                    add
                  </Button>
                </div>
              </div>
            </div>
          </div>
)
}

export default UserQuali