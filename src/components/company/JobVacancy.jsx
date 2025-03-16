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
      console.log(res?.data?.reverse());
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  }
  return (
    <div style={{ padding: "100px", minHeight: "100vh" }} className="container">
      <h3 className="text-center mb-4">Job Vacancy List</h3>
      <div className="row g-4">
        {jobs.map((job, index) => (
          <div key={index} className="col-md-4 d-flex">
            <Card
              style={{
                backgroundColor: "#f8f9fa",
                border: "1px solid #dee2e6",
                borderRadius: "10px",
                width: "100%",
                height: "100%",
              }}
              className="shadow-sm flex-fill"
            >
              <Card.Body>
                <Card.Title className="text-primary">{job?.jobTitle}</Card.Title>
                <div className="mt-3">
                  <p className="mb-1">
                    <strong>Total Applicants:</strong> {job?.count || 0}
                  </p>
                  <p className="mb-1">
                    <strong>Selected:</strong> {job?.selected || 0}
                  </p>
                  <p className="mb-1">
                    <strong>Unselected:</strong> {job?.unselected || 0}
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
