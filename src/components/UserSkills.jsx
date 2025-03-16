import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "./../API";

const UserSkills = () => {
  const [skills, setSkills] = React.useState([]);
  const [newSkill, setNewSkill] = React.useState("");

  const handleDelete = async (index) => {
    var skill = [...skills];
    delete skill[index];
    skill = skill.filter((x) => x);
    setSkills(skill);
    await Call(skill);
  };

  async function me() {
    await api
      .get("/auth/me")
      .then((response) => {
        console.log("User data:", response.data.skill);
        setSkills(
          response?.data?.skill?.split(",").filter((x) => x.trim()) || []
        );
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        toast.error(
          error?.response?.data?.message || error?.message || "Unknown error"
        );
      });
  }

  const Call = async (updatedSkill) => {
    await api
      .put("/auth/profile", {
        skill: updatedSkill.join(","),
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        toast.error(
          error?.response?.data?.message || error?.message || "Unknown error"
        );
      });
  };

  React.useEffect(() => {
    me();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newSkill) {
      return;
    }

    var updatedSkill = [...skills, newSkill.trim()];
    setSkills(updatedSkill);
    setNewSkill("");
    await Call(updatedSkill);
  };
  return (
    <div className="container w-75">
      <div className="row">
        {/* Left Column (Skills List with Bubbles) */}
        <div className="col-lg-6 d-flex-column align-items-center justify-content-center p-5">
          <div className="mt-3 d-flex-column align-items-center justify-content-center text-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="d-inline-flex align-items-center justify-content-center m-2 p-2 border rounded-pill bg-light"
                style={{ cursor: "pointer" }}
              >
                <span className="me-2">{skill}</span>
                <button
                  className="btn-close btn-sm"
                  onClick={() => handleDelete(index)}
                ></button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Form & Image */}
        <div className="col-lg-6 p-5 d-flex flex-column align-items-center justify-content-center text-center">
          {/* User Form */}
          <div className="w-100">
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingSkills"
                type="text"
                placeholder="Name"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <label htmlFor="floatingName">skill</label>
            </Form.Floating>

            <Button
              variant="success"
              className="w-100 mt-3"
              onClick={handleAdd}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSkills;
