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
      setJobs(res?.data);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  }
  return (
    <div style={{ padding: "100px", minHeight: "100vh" }} className="container">
      <h3>Job vacancy List&apos;s.</h3>
      <div className=" rounded container  d-flex justify-content-around align-items-center p-5 flex-wrap">
        {jobs.map((job, index) => (
          <Card
            key={index}
            style={{
              width: "18rem",
              height: "10rem",
              backgroundColor: " rgb(207, 237, 227)",
            }}
            className="my-3 shadow "
          >
            <Card.Body>
              <Card.Title>{job?.jobTitle}</Card.Title>

              <h6>
                Number of Applicants: <span>{job?.count || 0}</span>{" "}
              </h6>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobVacancy;
