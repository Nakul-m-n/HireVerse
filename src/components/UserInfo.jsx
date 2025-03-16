import React, { useEffect } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../API";

const UserInfo = () => {
  const [imagePreview, setImagePreview] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [onEdit, setOnEdit] = React.useState(false);
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    experience: "",
  });

  const onSave = async () => {
    await api
      .put("/auth/profile", user)
      .then((response) => {
        console.log("User updated successfully:", response.data);
        toast.success("User updated successfully");
        me();
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        toast.error(
          error?.response?.data?.message || error?.message || "Unknown error"
        );
      })
      .finally(() => {
        setOnEdit(false);
      });
  };

  async function me() {
    await api
      .get("/auth/me")
      .then((response) => {
        setImage(response.data.image);
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        toast.error(
          error?.response?.data?.message || error?.message || "Unknown error"
        );
      });
  }

  useEffect(() => {
    me();
  }, []);

  const HandleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
    // Prepare the data to send to the backend
    const formData = new FormData();
    formData.append("image", file);

    // Send the image to the backend using axios

    await api
      .post("/media/profile", formData)
      .then((response) => {
        console.log("Image uploaded successfully:", response.data);
        toast.success("Image uploaded successfully");
        me();
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        toast.error(
          error?.response?.data?.message || error?.message || "Unknown error"
        );
      });
  };
  return (
    <div className="container w-75">
      <div className="row">
        {/* Left Column (Empty for Future Content) */}
        <div className="col-lg-6 d-flex-column align-items-center justify-content-center p-5">
          <div className="mt-3 d-flex-column align-items-center justify-content-center text-center">
            <Image
              src={imagePreview || image}
              roundedCircle
              width={100}
              height={100}
              className="d-block mx-auto mb-3"
            />

            <h5>Name</h5>
            <p>name@gmail.com</p>
            <p>Experience</p>
          </div>
        </div>

        {/* Right Column - Form & Image */}
        <div className="col-lg-6 p-5 d-flex flex-column align-items-center justify-content-center text-center">
          {/* Profile Image Upload */}
          <div className="d-flex justify-content-center">
            <label>
              <input
                style={{ display: "none" }}
                type="file"
                onChange={handleImageUpload}
              />
              <Image
                src={imagePreview || image}
                roundedCircle
                width={100}
                height={100}
                className="d-block mx-auto mb-3"
              />
            </label>
          </div>

          {/* User Form */}
          <div className="w-100">
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingName"
                type="text"
                placeholder="Name"
                disabled={!onEdit}
                name="name"
                value={user.name}
                onChange={HandleChange}
              />
              <label htmlFor="floatingName">Name</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingEmail"
                type="email"
                placeholder="name@example.com"
                disabled={true}
                name="email"
                value={user.email}
              />
              <label htmlFor="floatingEmail">Email Address</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingExp"
                type="text"
                placeholder="Experience"
                disabled={!onEdit}
                name="experience"
                value={user.experience}
              />
              <label htmlFor="floatingExp"> Experience</label>
            </Form.Floating>
            {onEdit ? (
              <>
                <Button
                  variant="warning"
                  className="w-100 mt-3"
                  onClick={() => setOnEdit(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="success"
                  className="w-100 mt-3"
                  onClick={onSave}
                >
                  Save
                </Button>
              </>
            ) : (
              <Button
                variant="primary"
                className="w-100 mt-3"
                onClick={() => setOnEdit(true)}
              >
                Edit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
