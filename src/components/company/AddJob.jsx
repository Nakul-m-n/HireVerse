import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const AddJob = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div style={{ marginRight: "100px" }}>
        {" "}
        <Button
          onClick={handleShow}
          style={{ width: "5rem", fontSize: "2rem" }}
        >
          {" "}
          +{" "}
        </Button>
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
          <Modal.Title>Add New Job</Modal.Title>
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

          {/* job type  */}
          <FloatingLabel
            label="Job type(Fulltime/partime/contract)"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="job type" />
          </FloatingLabel>

          {/* Location */}
          <FloatingLabel label="Location" className="mb-3">
            <Form.Control type="text" placeholder="Location " />
          </FloatingLabel>

          {/* Job mOde */}
          <FloatingLabel
            label="Jobe Mode(workFrom home/On-site/Hybrid) "
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Job Mode" />
          </FloatingLabel>

          {/*  salary */}
          <FloatingLabel label=" salary" className="mb-3">
            <Form.Control type="text" placeholder=" salary" />
          </FloatingLabel>

          {/*  skills */}
          <FloatingLabel label=" Skills (use ; for adding next skills)" className="mb-3">
            <Form.Control type="text" placeholder=" Skills" />
          </FloatingLabel>

          {/*  Qualification */}
          <FloatingLabel label=" Qualification" className="mb-3">
            <Form.Control type="text" placeholder=" Qualification" />
          </FloatingLabel>

          {/*  Experience */}
          <FloatingLabel label=" Experience" className="mb-3">
            <Form.Control type="text" placeholder=" Experience" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddJob;
