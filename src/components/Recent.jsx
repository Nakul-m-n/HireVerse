import React, { useEffect, useState } from "react";
import tcs from "../assets/images/tcs.png";

import { Button, Card, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../API";

const Recent = () => {
  const [jobs, setJobs] = useState([]);
  const [keys, setKeys] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("latest");

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
      const res = await api.get("/user/requests");
      setJobs(res?.data);
      setFilteredJobs(res?.data);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  }

  const DateConvert = (date) => {
    date = new Date(date).toLocaleDateString();
    const [month, day, year] = String(date).split("/");
    return `${day}/${month}/${year}`;
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
          <h2 className="m-5">Recently applied jobs</h2>

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
            {
              !filteredJobs.length && (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                  <h2>No Jobs Found</h2>
                </div>
              )
            }
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
            
                    {/* Job Info - Wraps on small screens */}
                    <div className="d-flex flex-wrap justify-content-between">
                      <p className="d-flex align-items-center me-3">
                        <i className="fa-regular fa-clock me-2"></i> {job.jobTime}
                      </p>
                      <p className="d-flex align-items-center me-3">
                        <i className="fa-solid fa-house-laptop me-2"></i> {job.jobType}
                      </p>
                      <p className="d-flex align-items-center">
                        <i className="fa-solid fa-building me-2"></i> {job.companyId.name || "Company Name"}
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
            
                    {/* Location & Salary */}
                    <p>
                      <strong>
                        <i className="fa-solid fa-location-dot me-2"></i> Location:
                      </strong>{" "}
                      {job.location}
                    </p>
                    <p>
                      <strong>
                        <i className="fa-solid fa-sack-dollar me-2"></i> Salary:
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
            
                {/* Footer */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                  <p className="font-weight-bold text-center text-md-start" style={{ fontFamily: "monospace" }}>
                    <i className="fa-solid fa-calendar-days"></i> Last date: <span>{DateConvert(job.tillDate)}</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
            
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recent;
