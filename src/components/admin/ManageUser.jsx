import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Container, Row, Col } from "react-bootstrap";
import api from "../../API";
import { toast } from "react-toastify";

const ManageUser = () => {

  useEffect(() => {
      async function callAPI() {
        await api
          .get("/admin/showAllUsers")
          .then((res) => {
            setUsers(res.data);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
          });
      }
      callAPI();
    }, []);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showBlocked, setShowBlocked] = useState(false); // Toggle for blocked users view

  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [newUser, setNewUser] = useState({ id: "", name: "", email: "", blocked: false });
  const [editUser, setEditUser] = useState({ id: "", name: "", email: "", blocked: false });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = (user) => {
    setEditUser(user);
    setEditShow(true);
  };

  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ id: "", name: "", email: "", blocked: false });
    handleClose();
  };

  const handleEditUser = () => {
    setUsers(users.map(user => user._id === editUser._id ? editUser : user));
    handleEditClose();
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  const handleBlockUser = (id) => {
    setUsers(users.map(user => user._id === id ? { ...user, blocked: !user.blocked } : user));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (showBlocked ? user.blocked : !user.blocked) // Show blocked users if toggled
  );

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="fw-bolder my-5">User Management</h2>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col md={6} className="text-end">
              <Button variant="primary" className="me-2" onClick={handleShow}>Add User</Button>
              <Button variant={showBlocked ? "secondary" : "dark"} onClick={() => setShowBlocked(!showBlocked)}>
                {showBlocked ? "View Active Users" : "View Blocked Users"}
              </Button>
            </Col>
          </Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id} className={user.blocked ? "table-danger" : ""}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button variant="warning" size="sm" className="me-2" onClick={() => handleEditShow(user)}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button variant="danger" size="sm" className="me-2" onClick={() => handleDeleteUser(user._id)}>
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                    {!showBlocked && ( // Show block button only in normal user view
                      <Button variant="dark" size="sm" onClick={() => handleBlockUser(user._id)}>
                        <i className="fa-solid fa-ban"></i>
                      </Button>
                    )}
                    {showBlocked && ( // Show unblock button only in blocked user view
                      <Button variant="success" size="sm" onClick={() => handleBlockUser(user._id)}>
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

      {/* Add User Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleAddUser}>Add User</Button>
        </Modal.Footer>
      </Modal>

      {/* Edit User Modal */}
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editUser.name}
                onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editUser.email}
                onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Close</Button>
          <Button variant="primary" onClick={handleEditUser}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageUser;
