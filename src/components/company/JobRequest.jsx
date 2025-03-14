import React, { useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../../API";

const JobRequest = () => {
  const [keys, setKeys] = useState([]);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
    const [image, setImage] = React.useState(null);
  async function getUrl() {
    await api
      .get("/media/profile")
      .then((response) => {
        console.log("Image uploaded successfully:", response.data);
        setImage(response.data.url);
        
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        toast.error(
          error?.response?.data?.message || error?.message || "Unknown error"
        );
      });
  }

  useEffect(() => {
    getUrl();
  }, []);


  const toggleBookmark = async (user_) => {
    var jobId = filter;
    var userId = user_._user._id;
    var us_ = toast.loading("Please wait...");
    try {
      const res = await api.put(`/company/select/${jobId}/${userId}`);
      if (res.status === 200) {
        toast.update(us_, {
          render: "User has been selected",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        fetchData_(jobId);
      }
    } catch (error) {
      toast.update(us_, {
        render: error?.response?.data?.message || error.message,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    fetchData();
    fetchData_("all");
  }, []);

  useEffect(() => {
    fetchData_(filter);
  }, [filter]);

  async function fetchData() {
    try {
      const res = await api.get("/company/job");

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
      var data = res?.data?.filter((user) => !user._doc.isSelected);
      setUsers(data);
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

  const handleSeeMore = async (userId) => {
    try {
      const res = await api.get(`/company/user_details/${userId}`);
      setSelectedUser(res.data);
      setShowModal(true);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
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
            {!users.length && (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh" }}
              >
                <h2>No Users Found</h2>
              </div>
            )}
            <div className="row d-flex justify-content-center">
              {users.map((user, index) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                  key={index}
                >
                  <Card className="my-3 shadow w-100">
                    <Card.Img
                      className="my-2 img-fluid mx-auto"
                      variant="top"
                      src={image}
                      style={{ maxWidth: "150px", borderRadius: "50%" }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title>{user._user.name}</Card.Title>
                      <Card.Text>
                        <small>{user._user.email}</small>
                        <br />
                        {user?.job && (
                          <small>
                            <b>Job:</b> {user.job}
                          </small>
                        )}
                        <br />
                      </Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button
                          variant="outline-primary"
                          onClick={() => toggleBookmark(user)}
                          disabled={filter === "all"}
                          className="border-0"
                        >
                          <i
                            className={`fa-solid fa-bookmark ${
                              user._doc.isSelected ? "text-warning" : ""
                            }`}
                          ></i>
                        </Button>
                        <Button
                          variant="info"
                          onClick={() => handleSeeMore(user._user._id)}
                        >
                          See More
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser ? (
            <>
              <p>
                <b>Name:</b> {selectedUser.name}
              </p>
              <p>
                <b>Email:</b> {selectedUser.email}
              </p>
              <p>
                <b>Phone:</b> {selectedUser.phone || "N/A"}
              </p>
              <p>
                <b>Address:</b> {selectedUser.address || "N/A"}
              </p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default JobRequest;
