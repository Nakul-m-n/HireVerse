import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import api from "../../API";
import { toast } from "react-toastify";

const ManageUser = () => {
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
  useEffect(() => {
    callAPI();
  }, []);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showBlocked, setShowBlocked] = useState(false); // Toggle for blocked users view

  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    email: "",
    blocked: false,
  });
  const [editUser, setEditUser] = useState({
    id: "",
    name: "",
    email: "",
    blocked: false,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = (user) => {
    setEditUser(user);
    setEditShow(true);
  };

  const handleEditUser = () => {
    setUsers(
      users.map((user) => (user._id === editUser._id ? editUser : user))
    );
    handleEditClose();
  };

  const handleDeleteUser = async(id) => {
    try {
      await api.delete(`/admin/user/${id}`).then(() => {
        callAPI();
        toast.success("User deleted successfully");
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const handleBlockUser = async (id) => {
    try {
      await api.post(`/admin/user/block/${id}`).then(() => {
        toast.success("User blocked successfully");
        callAPI();
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const handleUnBlockUser = async (id) => {
    try {
      await api.post(`/admin/user/unblock/${id}`);
      toast.success("User unblocked successfully");
      callAPI();
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (showBlocked ? user.isBlocked : !user.isBlocked) // Show blocked users if toggled
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
              <Button
                variant={showBlocked ? "secondary" : "dark"}
                onClick={() => setShowBlocked(!showBlocked)}
              >
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
              {filteredUsers.map((user, index) => (
                <tr
                  key={index}
                  className={user.isBlocked ? "table-danger" : ""}
                >
                  <td>{index}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {/* <Button
                      disabled
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEditShow(user)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button> */}
                    <Button
                      variant="danger"
                      size="sm"
                      className="me-2"
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                    {!user.isBlocked && ( // Show block button only in normal user view
                      <Button
                        variant="dark"
                        size="sm"
                        onClick={() => handleBlockUser(user._id)}
                      >
                        <i className="fa-solid fa-ban"></i>
                      </Button>
                    )}
                    {user.isBlocked && ( // Show unblock button only in blocked user view
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => handleUnBlockUser(user._id)}
                      >
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
                onChange={(e) =>
                  setEditUser({ ...editUser, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editUser.email}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageUser;
