import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../API";

const UserQuali = () => {
  const [education, setEducation] = React.useState([]);
  const [newEducation, setNewEducation] = React.useState({
    name: "",
    institution: "",
    marks: "",
  });

  const OnAdd = async (e) => {
    e.preventDefault();

    if (
      !newEducation.name ||
      !newEducation.institution ||
      !newEducation.marks
    ) {
      toast.error("Please fill all fields");
      return;
    }
    var updatedEducation = [...education, newEducation];

    setEducation(updatedEducation);
    await Call(updatedEducation);

    setNewEducation({
      name: "",
      institution: "",
      marks: "",
    });
  };

  async function me() {
    await api
      .get("/auth/me")
      .then((response) => {
        console.log("User data:", response.data.education);
        setEducation(JSON.parse(response.data.education) || []);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        toast.error(
          error?.response?.data?.message || error?.message || "Unknown error"
        );
      });
  }

  const OnDelete = async (index) => {
    var updatedEducation = [...education];
    delete updatedEducation[index];
    updatedEducation = updatedEducation.filter((x) => x);
    setEducation(updatedEducation);
    console.log("Education:", education, updatedEducation, index);
    await Call(updatedEducation);
  };

  const Call = async (updatedEducation) => {
    await api
      .put("/auth/profile", {
        education: JSON.stringify(updatedEducation),
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        toast.error(
          error?.response?.data?.message || error?.message || "Unknown error"
        );
      });
  };

  useEffect(() => {
    me();
  }, []);

  const HandleChange = (e) => {
    e.preventDefault();
    setNewEducation({ ...newEducation, [e.target.name]: e.target.value });
  };

  return (
    <div className="container w-75">
      <div className="row">
        {/* Left Column - Education Table */}
        <div className="col-lg-6 d-flex-column align-items-center justify-content-center p-5">
          <div className="mt-3 d-flex-column align-items-center justify-content-center text-center">
            <table className="table">
              <thead>
                <tr>
                  <th>Education</th>
                  <th>Institution</th>
                  <th>Marks</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {education.length === 0 && (
                  <tr>
                    <td colSpan="4">No data found</td>
                  </tr>
                )}

                {education?.map((edu, index) => (
                  <tr key={index}>
                    <td>{edu.name}</td>
                    <td>{edu.institution}</td>
                    <td>{edu.marks}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => OnDelete(index)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column - Form & Add Button */}
        <div className="col-lg-6 p-5 d-flex flex-column align-items-center justify-content-center text-center">
          {/* User Form */}
          <div className="w-100">
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingEducation"
                type="text"
                placeholder="Education"
                name="name"
                onChange={HandleChange}
                value={newEducation.name}
              />
              <label htmlFor="floatingEducation">Education</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInstitution"
                type="text"
                placeholder="Institution"
                name="institution"
                onChange={HandleChange}
                value={newEducation.institution}
              />
              <label htmlFor="floatingInstitution">Institution</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingMarks"
                type="text"
                placeholder="Marks"
                name="marks"
                onChange={HandleChange}
                value={newEducation.marks}
              />
              <label htmlFor="floatingMarks">Marks</label>
            </Form.Floating>

            <Button variant="success" className="w-100 mt-3" onClick={OnAdd}>
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserQuali;
