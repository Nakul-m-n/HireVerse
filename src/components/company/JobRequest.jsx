import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../../API";

const JobRequest = () => {
  const [bookmarked, setBookmarked] = useState(false);
  var [jobs, setJobs] = useState([]);
  const [keys, setKeys] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("all");

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const usersList = filteredJobs.flatMap((job) => job.requestedUsers);
    console.log(usersList);
    setUsers(usersList);
  }, [filteredJobs]);

  async function fetchData() {
    try {
      const res = await api.get("/company/job");
      setJobs(res?.data);

      var keys = res?.data?.map((job) => ({ title: job.title, id: job._id }));
      setKeys(keys);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  }

  async function fetchData_(id) {
    try {
      const res = await api.get("/company/job_users/" + id);
     console.log(res?.data);
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
    applyFilters(e.target.value);
  };

  const applyFilters = (filterType) => {
    fetchData_(filterType);
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ paddingTop: "100px", minHeight: "100vh" }}
      >
        <div className="d-flex justify-content-between align-items-center mx-5">
          <h2 className="m-5">Job Request&apos;s</h2>

          <div className="d-flex">
            <Form.Select
              className="me-2"
              value={filter}
              onChange={handleFilterChange}
              defaultValue={"all"}
            >
              <option value="all">All</option>
              {keys.map((key) => (
                <option key={key.id} value={key.id}>
                  {key.title}
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
            {filteredJobs.map((job, index) => (
              <Card className="my-3 " style={{ width: "13rem" }} key={index}>
                <Card.Img
                  variant="top"
                  src="https://www.w3schools.com/howto/img_avatar.png"
                />
                <Card.Body>
                  <Card.Title>Jhon carter</Card.Title>
                  <Card.Text>
                    Placed at abc company as React Developer with 3.2 LPA
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    onClick={toggleBookmark}
                    className="border-0"
                  >
                    <i
                      className={`fa-solid fa-bookmark ${
                        bookmarked ? "text-warning" : ""
                      }`}
                    ></i>
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobRequest;
