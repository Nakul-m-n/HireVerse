import React, { useState } from "react";
import { Table, Button, Modal, Form, Container, Row, Col } from "react-bootstrap";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([{
    id: "1",
    title: "test",
    company: "m",
    blocked: false
  }]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showBlocked, setShowBlocked] = useState(false);

  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [newJob, setNewJob] = useState({ id: "", title: "", company: "", blocked: false });
  const [editJob, setEditJob] = useState({ id: "", title: "", company: "", blocked: false });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = (job) => {
    setEditJob(job);
    setEditShow(true);
  };

  const handleAddJob = () => {
    setJobs([...jobs, { ...newJob, id: jobs.length + 1 }]);
    setNewJob({ id: "", title: "", company: "", blocked: false });
    handleClose();
  };

  const handleEditJob = () => {
    setJobs(jobs.map(job => job.id === editJob.id ? editJob : job));
    handleEditClose();
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const handleBlockJob = (id) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, blocked: !job.blocked } : job));
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (showBlocked ? job.blocked : !job.blocked)
  );

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="fw-bolder my-5">Job Management</h2>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Search by job title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
           
          </Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map((job) => (
                <tr >
                  <td>{job.id}</td>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>
                    <Button variant="warning" size="sm" className="me-2" onClick={() => handleEditShow(job)}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button variant="danger" size="sm" className="me-2" onClick={() => handleDeleteJob(job.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                    {!showBlocked && (
                      <Button variant="dark" size="sm" onClick={() => handleBlockJob(job.id)}>
                        <i className="fa-solid fa-ban"></i>
                      </Button>
                    )}
                    {showBlocked && (
                      <Button variant="success" size="sm" onClick={() => handleBlockJob(job.id)}>
                        Unblock
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

   

      {/* Edit Job Modal */}
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                value={editJob.title}
                onChange={(e) => setEditJob({ ...editJob, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                value={editJob.company}
                onChange={(e) => setEditJob({ ...editJob, company: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Close</Button>
          <Button variant="primary" onClick={handleEditJob}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageJobs;
