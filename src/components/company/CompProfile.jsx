import React, { useEffect } from "react";
import { Button, Card, Form, Image } from "react-bootstrap";
import api from "../../API";
import { toast } from "react-toastify";

const CompProfile = () => {
  const [imagePreview, setImagePreview] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [onEdit, setOnEdit] = React.useState(false);
  const [uerPre, setUserPre] = React.useState({
    name: "",
    email: "",
    experience: "",
    number: "",
    location: "",
  });
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    experience: "",
    number: "",
    location: "",
  });

  const onSave = async () => {
    await api
      .put("/auth/profile", user)
      .then(() => {
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
        setUserPre(response.data);
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
      .then(() => {
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
    <div style={{ padding: "100px", minHeight: "100vh" }} className="container">
      <Card className="shadow">
        <div className="container w-75 ">
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

                <h5>{uerPre.name}</h5>
                <p>
                  <strong>About:</strong> {uerPre.about}
                </p>
                <br />
                <p>
                  <strong>Email:</strong> {uerPre.email}
                </p>
                <p>
                  <strong>Phone Number:</strong> {uerPre.number}
                </p>
                <p>
                  <strong>Location:</strong> {uerPre.location}
                </p>
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
                    id="floatingAbout"
                    type="text"
                    placeholder="about"
                    disabled={!onEdit}
                    name="about"
                    value={user.about}
                    onChange={HandleChange}
                  />
                  <label htmlFor="floatingAbout">About </label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingPhn"
                    type="number"
                    placeholder="911234567890"
                    disabled={!onEdit}
                    name="number"
                    value={user.number}
                    onChange={HandleChange}
                  />
                  <label htmlFor="floatingPhn">Phone Number</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingLoc"
                    type="text"
                    disabled={!onEdit}
                    name="location"
                    value={user.location}
                    onChange={HandleChange}
                    placeholder="kerala"
                  />
                  <label htmlFor="floatingLoc">Location </label>
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
      </Card>
    </div>
  );
};

export default CompProfile;
