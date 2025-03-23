import React, { useEffect, useState } from "react";
import { Button, Card, FloatingLabel, Form, Modal } from "react-bootstrap";

import API from "../../API";
import { toast } from "react-toastify";

const JobVacDetails = () => {
  const [show, setShow] = useState(false);
  const [showPro, setShowPro] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [image, setImage] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    tillDate: "",
    jobTime: "",
    jobType: "",
    skills: "",
    qualification: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await API.get("/company/job");
      setJobs(res?.data?.reverse());
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    // Prepare the data to send to the backend
    const formData = new FormData();
    formData.append("image", file);

    // Send the image to the backend using axios

    await API.post("/media/job/" + updateId, formData)
      .then(() => {
        toast.success("Image uploaded successfully");
        setJobs([]);
        fetchData(); // Refresh the image URL
        handleClose();
        handleClosePro();
        setUpdateId(null);
        setImage(null);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        toast.error(
          error?.response?.data?.message || error?.message || "Unknown error"
        );
      });
  };

  const DateConvert = (date) => {
    date = new Date(date).toLocaleDateString();
    const [month, day, year] = String(date).split("/");
    return `${day}/${month}/${year}`;
  };

  const handleShowPro = (job) => {
    setUpdateId(job._id);
    setImage(job.image);

    setShowPro(true);
  };

  const handleShow = (job = null) => {
    if (job) {
      setUpdateId(job._id);
      setFormData({
        title: job.title || "",
        description: job.description || "",
        location: job.location || "",
        salary: job.salary || "",
        tillDate: job.tillDate
          ? new Date(job.tillDate).toISOString().split("T")[0]
          : "",
        jobTime: job.jobTime || "",
        jobType: job.jobType || "",
        skills: job.skills ? job.skills.join("; ") : "",
        qualification: job.qualification ? job.qualification.join("; ") : "",
      });
    } else {
      setUpdateId(null);
      setFormData({
        title: "",
        description: "",
        location: "",
        salary: "",
        tillDate: "",
        jobTime: "",
        jobType: "",
        skills: "",
        qualification: "",
      });
    }
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setUpdateId(null);
  };

  const handleClosePro = () => {
    setShowPro(false);
    setUpdateId(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const OnSave = async () => {
    const id = toast.loading(updateId ? "Updating Job..." : "Adding Job...");
    try {
      const data = {
        ...formData,
        skills: formData.skills.split(";"),
        qualification: formData.qualification.split(";"),
      };

      const url = updateId ? `/company/job/${updateId}` : "/company/job";
      const method = updateId ? "put" : "post";
      await API[method](url, data);
      toast.update(id, {
        render: updateId
          ? "Job updated successfully"
          : "Job added successfully",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      fetchData();
      handleClose();
    } catch (error) {
      toast.update(id, {
        render: error.response?.data?.message || "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  const OnDelete = async (job) => {
    var id = toast.loading("Deleting job...");
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this job?"
      );
      if (confirmDelete) {
        await API.delete(`/company/job/${job}`)
          .then(() => {
            toast.update(id, {
              render: "Job deleted successfully",
              type: "success",
              isLoading: false,
              autoClose: 2000,
            });
            fetchData();
          })
          .catch((error) => {
            console.log(error);
            toast.update(id, {
              render: "Something went wrong while deleting job",
              type: "error",
              isLoading: false,
              autoClose: 2000,
            });
          });
      } else {
        toast.dismiss(id);
      }
    } catch (error) {
      console.log(error);
      toast.update(id, {
        render: "Something went wrong while deleting job",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="container-fluid pt-5" style={{ minHeight: "100vh" }}>
      <h2 className="text-center my-5">Job Vacancy Details</h2>
      <Button className="mb-3" onClick={() => handleShow()}>
        + Add Job
      </Button>
      <div className="container">
        {!jobs.length && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <h2>No Jobs Found</h2>
          </div>
        )}
        {jobs.map((job) => (
          <Card key={job._id} className="shadow mb-3">
            <Card.Body>
              <div className="row align-items-center">
                {/* Image Section */}
                <div className="col-12 col-md-4 text-center">
                  <img
                    src={job.image || image}
                    alt="Company Logo"
                    className="img-fluid"
                    style={{ maxWidth: "250px", borderRadius: "10px" }}
                  />
                </div>

                {/* Job Details Section */}
                <div className="col-12 col-md-8">
                  <Card.Title>{job.title}</Card.Title>
                  <div className="d-flex flex-wrap justify-content-between">
                    <p className="d-flex align-items-center">
                      <i className="fa-regular fa-clock mr-2"></i> {job.jobTime}
                    </p>
                    <p className="d-flex align-items-center">
                      <i className="fa-solid fa-house-laptop mr-2"></i>{" "}
                      {job.jobType}
                    </p>
                  </div>

                  <div className="d-flex flex-wrap">
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className="badge bg-primary m-1">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="mt-2">{job.description}</p>

                  <p>
                    <strong>
                      <i className="fa-solid fa-location-dot mr-2"></i>{" "}
                      Location:
                    </strong>{" "}
                    {job.location}
                  </p>

                  <p>
                    <strong>
                      <i className="fa-solid fa-sack-dollar mr-2"></i> Salary:
                    </strong>{" "}
                    {job.salary} Monthly
                  </p>

                  <div className="mt-3">
                    <h6>Qualifications:</h6>
                    <ul>
                      {job.qualification.map((qual, idx) => (
                        <li key={idx}>{qual}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <hr />

              {/* Footer: Date & Buttons */}
              <div className="row justify-content-between align-items-center">
                <div className="col-12 col-md-6">
                  <p
                    style={{ fontFamily: "monospace" }}
                    className="font-weight-bold"
                  >
                    <i className="fa-solid fa-calendar-days"></i> Last date:{" "}
                    <span>{DateConvert(job.tillDate)}</span>
                  </p>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-end">
                  <Button
                    className="me-2"
                    variant="danger"
                    onClick={() => OnDelete(job._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="me-2"
                    variant="warning"
                    onClick={() => handleShow(job)}
                  >
                    Edit
                  </Button>
                  <Button variant="info" onClick={() => handleShowPro(job)}>
                    Upload Image
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{updateId ? "Edit Job" : "Add New Job"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel label="Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Name"
              name="title"
              value={formData["title"]}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Description" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
              value={formData["description"]}
              onChange={handleChange}
            />
          </FloatingLabel>

          {/* Location */}
          <FloatingLabel label="Location" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Location"
              name="location"
              value={formData["location"]}
              onChange={handleChange}
            />
          </FloatingLabel>

          {/*  salary */}
          <FloatingLabel label="Salary (in per month)" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Salary"
              name="salary"
              value={formData["salary"]}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Job Time" className="mb-3">
            <Form.Select
              name="jobTime"
              aria-label="Job Time"
              value={formData["jobTime"]}
              onChange={handleChange}
            >
              <option value="">Select Job Time</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Intern">Intern</option>
              <option value="Contract">Contract</option>
            </Form.Select>
          </FloatingLabel>
          {/* job type  */}
          <FloatingLabel label="Job type" className="mb-3">
            <Form.Select
              name="jobType"
              aria-label="Job type"
              value={formData["jobType"]}
              onChange={handleChange}
            >
              <option value="">Select Job Type</option>
              <option value="Permanent">Permanent</option>
              <option value="Temporary">Temporary</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
            </Form.Select>
          </FloatingLabel>

          {/* date */}
          <FloatingLabel label="Last date" className="mb-3">
            <Form.Control
              type="date"
              placeholder="Last date"
              name="tillDate"
              value={formData["tillDate"]}
              onChange={handleChange}
            />
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
              value={formData["skills"]}
              onChange={handleChange}
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
              name="qualification"
              value={formData["qualification"]}
              onChange={handleChange}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={OnSave}>
            {updateId ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showPro} onHide={handleClosePro} backdrop="static" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Upload Profile Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select an image to upload</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePro}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default JobVacDetails;
