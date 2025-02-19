import React from 'react'
import { Button, Form, Image } from 'react-bootstrap'

const UserInfo = () => {
  return (
    <div className="container w-75">
            <div className="row">
              {/* Left Column (Empty for Future Content) */}
              <div className="col-lg-6 d-flex-column align-items-center justify-content-center p-5">
                <div className='mt-3 d-flex-column align-items-center justify-content-center text-center'>
                
                    
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6COSFWe7YIhEEOYHOSwVWAw5soUk2VuMptKGuqSOuFM5d6RTb4f7FRAg&s"
                      roundedCircle
                      width={100}
                      height={100}
                      className="d-block mx-auto mb-3"
                    />
                
                  <h5>Name</h5>
                  <p>name@gmail.com</p>
                </div>
              </div>

              {/* Right Column - Form & Image */}
              <div className="col-lg-6 p-5 d-flex flex-column align-items-center justify-content-center text-center">
                {/* Profile Image Upload */}
                <div className="d-flex justify-content-center">
                  <label>
                    <input style={{ display: 'none' }} type="file" />
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6COSFWe7YIhEEOYHOSwVWAw5soUk2VuMptKGuqSOuFM5d6RTb4f7FRAg&s"
                      roundedCircle
                      width={100}
                      height={100}
                      className="d-block mx-auto mb-3"
                    />
                  </label>
                </div>

                {/* User Form */}
                <div className="w-100">
                  <Form.Floating className="mb-3">
                    <Form.Control id="floatingName" type="text" placeholder="Name" />
                    <label htmlFor="floatingName">Name</label>
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                    <Form.Control id="floatingEmail" type="email" placeholder="name@example.com" />
                    <label htmlFor="floatingEmail">Email Address</label>
                  </Form.Floating>

                  

                  <Button variant="success" className="w-100 mt-3">
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default UserInfo