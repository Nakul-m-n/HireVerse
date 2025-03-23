import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import api from "../../API";
import { toast } from "react-toastify";

const JobVacancy = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await api.get("/company/job_count");
      setJobs(res?.data?.reverse());
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  }

  return (
    <div className="container py-5" style={{ minHeight: "100vh" }}>
      <h2 className="text-center  my-4 text-primary">Job Vacancy List</h2>
      <div className="row g-4">
        {jobs.map((job, index) => (
          <div key={index} className="col-lg-4 col-md-6 d-flex">
            <Card className="shadow-lg flex-fill border-0" style={{ borderRadius: "12px", transition: "transform 0.3s", background: "#ffffff" }}>
              <Card.Body className="p-4 d-flex flex-column">
                <Card.Title className="text-dark fw-bold text-center">{job?.jobTitle}</Card.Title>
                <div className="mt-3">
                  <p className="mb-2 text-secondary">
                    <strong className="text-dark">Total Applicants:</strong> {job?.count || 0}
                  </p>
                  <p className="mb-2 text-success">
                    <strong className="text-dark">Selected:</strong> {job?.selected || 0}
                  </p>
                  <p className="mb-2 text-danger">
                    <strong className="text-dark">Unselected:</strong> {job?.unselected || 0}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobVacancy;