import React, { useEffect, useState } from "react";
import tcs from "../assets/images/tcs.png";
import { Button, Card, Modal, Form } from "react-bootstrap";
import api from "../API";
import { toast } from "react-toastify";

const Jobs = () => {
  const [show, setShow] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [keys, setKeys] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("latest");
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchData();
    fetchDataKeys();
  }, []);

  async function fetchDataKeys() {
    try {
      const res = await api.get("/user/keys");

      var filter = res?.data?.map((key) => String(key).toLowerCase().trim());
      filter = [...new Set(filter)];
      setKeys(filter);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  }

  async function fetchData() {
    try {
      const res = await api.get("/user/jobs");
      setJobs(res?.data);
      setFilteredJobs(res?.data);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  }

  async function ApplyJob(job) {
    var id = toast.loading("Applying for job...");
    try {
      await api.post(`/user/request/${job}`).then(() => {
        toast.update(id, {
          render: "Job Applied successfully!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      });
    } catch (error) {
      toast.update(id, {
        render: error?.response?.data?.message || error.message,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  }

  const DateConvert = (date) => {
    date = new Date(date).toLocaleDateString();
    const [month, day, year] = String(date).split("/");
    return `${day}/${month}/${year}`;
  };

  const handleClose = () => setShow(false);
  const handleShow = (job) => {
    setSelectedJob(job);
    setShow(true);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    applyFilters(e.target.value, search);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    applyFilters(filter, e.target.value);
  };

  const applyFilters = (filterType, searchQuery) => {
    var filteredList = jobs;
    if (filterType === "all") {
      filteredList = jobs;
    } else if (filterType === "latest") {
      filteredList = filteredList.filter((job) => !!job.latest);
    } else if (filterType === "recommended") {
      filteredList = filteredList.filter((job) => !!job.recommended);
    } else if (keys.includes(filterType)) {
      filteredList = filteredList.filter((job) =>
        job.skills.some(
          (skill) =>
            skill.toLowerCase().trim() === filterType.toLowerCase().trim()
        )
      );
    }

    if (searchQuery === "" || searchQuery === null) {
      setFilteredJobs(filteredList);
    } else {
      applySearch(searchQuery, filteredList);
    }
  };

  const applySearch = (searchQuery, filteredList) => {
    var searchResults = filteredList.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(searchResults);
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ paddingTop: "100px", minHeight: "100vh" }}
      >
        <div className="d-flex justify-content-between align-items-center mx-5">
          <h2 className="m-5">
            Find your{" "}
            <span
              className="text-primary"
              style={{ fontFamily: "Protest Strike, serif" }}
            >
              New Job
            </span>{" "}
            today!
          </h2>

          <div className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search jobs..."
              value={search}
              onChange={handleSearchChange}
            />
            <Form.Select
              className="me-2"
              value={filter}
              onChange={handleFilterChange}
              defaultValue={"all"}
            >
              <option value="all">All</option>
              <option value="latest">Latest</option>
              <option value="recommended">Recommended</option>
              {keys.map((key, idx) => (
                <option key={idx} value={key}>
                  {key}
                </option>
              ))}
            </Form.Select>
            <Button className="btn btn-primary">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </div>
        </div>

        <div style={{ minHeight: "100vh" }}>
          <div className="container">
            {!filteredJobs.length && (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh" }}
              >
                <h2>No Jobs Found</h2>
              </div>
            )}
            {filteredJobs.map((job) => (
              <Card key={job._id} className="shadow mb-3">
                <Card.Body>
                  <div className="row align-items-center">
                    {/* Company Logo */}
                    <div className="col-12 col-md-4 text-center">
                      <img src={tcs} alt="Company Logo" className="img-fluid" />
                    </div>

                    {/* Job Details */}
                    <div className="col-12 col-md-8 mt-3 mt-md-0">
                      <Card.Title>{job.title}</Card.Title>

                      {/* Job Information */}
                      <div className="d-flex flex-wrap justify-content-between">
                        <p className="d-flex align-items-center me-3">
                          <i className="fa-regular fa-clock me-2"></i>{" "}
                          {job.jobTime}
                        </p>
                        <p className="d-flex align-items-center me-3">
                          <i className="fa-solid fa-house-laptop me-2"></i>{" "}
                          {job.jobType}
                        </p>
                        <p className="d-flex align-items-center">
                          <i className="fa-solid fa-building me-2"></i>{" "}
                          {job.companyId.name || "Company Name"}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className="d-flex flex-wrap">
                        {job.skills.map((skill, idx) => (
                          <span key={idx} className="badge bg-primary m-1">
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="mt-2">{job.description}</p>

                      {/* Location and Salary */}
                      <p>
                        <strong>
                          <i className="fa-solid fa-location-dot me-2"></i>{" "}
                          Location:
                        </strong>{" "}
                        {job.location}
                      </p>
                      <p>
                        <strong>
                          <i className="fa-solid fa-sack-dollar me-2"></i>{" "}
                          Salary:
                        </strong>{" "}
                        {job.salary} Monthly
                      </p>

                      {/* Qualifications */}
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

                  {/* Footer Section */}
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <p
                      className="font-weight-bold text-center text-md-start"
                      style={{ fontFamily: "monospace" }}
                    >
                      <i className="fa-solid fa-calendar-days"></i> Last date:{" "}
                      <span>{DateConvert(job.tillDate)}</span>
                    </p>
                    <Button
                      onClick={() => handleShow(job)}
                      className="mt-2 mt-md-0"
                    >
                      Apply now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {selectedJob && (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedJob.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{selectedJob.companyId.name || "Company Name"}</h2>
            <ul>
              <li>Job Mode: {selectedJob.jobType}</li>
              <li>Location: {selectedJob.location}</li>
              {/* <li>Experience: {selectedJob.experience} years</li> */}
            </ul>
            <p>{selectedJob.description}</p>
            <h4>Qualifications</h4>
            <ul>
              {selectedJob.qualification.map((qual, idx) => (
                <li key={idx}>{qual}</li>
              ))}
            </ul>
            <h4>Skills</h4>
            <ul>
              {selectedJob.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => ApplyJob(selectedJob._id)}>
              Apply
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Jobs;
