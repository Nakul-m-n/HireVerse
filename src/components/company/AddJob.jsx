import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import API from "../../API";
import { toast } from "react-toastify";

const AddJob = () => {
  const [show, setShow] = useState(false);

  const OnSave = async () => {
    var id = toast.loading("Adding job...");
    try {
      const title = document.querySelector("input[name='title']")?.value;
      const description = document.querySelector(
        "input[name='description']"
      )?.value;
      const tillDate = document.querySelector("input[name='tillDate']")?.value;
      const jobTime = document.querySelector("Select[name='jobTime']")?.value;
      const jobType = document.querySelector("Select[name='jobType']")?.value;
      const location = document.querySelector("input[name='location']")?.value;
      const salary = document.querySelector("input[name='salary']")?.value;
      const skills = document.querySelector("input[name='skills']")?.value;
      const qualification = document.querySelector(
        "input[name='Qualification']"
      )?.value;
      const data = {
        title,
        description,
        tillDate,
        jobTime,
        jobType,
        location,
        salary,
        skills: String(skills)?.split(";") || [],
        qualification: String(qualification)?.split(";") || [],
      };

      await API.post("/company/job", data)
        .then((res) => {
          console.log(res.data);
          toast.update(id, {
            render: "Job added successfully",
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
          handleClose();
          // callback
        })
        .catch((error) => {
          toast.update(id, {
            render:
              error.response?.data?.message ||
              error.message ||
              "Something went wrong :)",

            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        });
    } catch (error) {
      toast.error("Something went wrong " + error.message);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div style={{ marginRight: "100px" }}>
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
          <FloatingLabel label="Name" className="mb-3">
            <Form.Control type="text" placeholder="Name" name="title" />
          </FloatingLabel>

          <FloatingLabel label="Description" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
            />
          </FloatingLabel>

          {/* Location */}
          <FloatingLabel label="Location" className="mb-3">
            <Form.Control type="text" placeholder="Location" name="location" />
          </FloatingLabel>

          {/*  salary */}
          <FloatingLabel label="Salary (in per month)" className="mb-3">
            <Form.Control type="text" placeholder="Salary" name="salary" />
          </FloatingLabel>

          <FloatingLabel label="Job Time" className="mb-3">
            <Form.Select name="jobTime" aria-label="Job Time">
              <option value="">Select Job Time</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Intern">Intern</option>
              <option value="Contract">Contract</option>
            </Form.Select>
          </FloatingLabel>
          {/* job type  */}
          <FloatingLabel label="Job type" className="mb-3">
            <Form.Select name="jobType" aria-label="Job type">
              <option value="">Select Job Type</option>
              <option value="Permanent">Permanent</option>
              <option value="Temporary">Temporary</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
            </Form.Select>
          </FloatingLabel>

          {/* date */}
          <FloatingLabel label="Last date" className="mb-3">
            <Form.Control type="date" placeholder="Last date" name="tillDate" />
          </FloatingLabel>

          {/*  skills */}
          <FloatingLabel
            label="Skills (use ; for adding next skills)"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Skills (use ; for adding next skills)"
              name="skills"
            />
          </FloatingLabel>

          {/*  Qualification */}
          <FloatingLabel
            label="Qualification (use ; for adding next Qualification)"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Qualification (use ; for adding next Qualification)"
              name="Qualification"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={OnSave}>
            add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddJob;
