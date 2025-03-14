import React, { use, useEffect } from "react";
import { Button, Card, Form, Image } from "react-bootstrap";
import api from "../../API";
import { toast } from "react-toastify";

const CompProfile = () => {
  const [imagePreview, setImagePreview] = React.useState(null);
  const [image, setImage] = React.useState(null);

  async function getUrl(id) {
    await api
    .get("/media/profile" + (id ? `/${id}` : ""))
      .then((response) => {
        console.log("Image uploaded successfully:", response.data);
        setImage(response.data.url);
        setImagePreview(response.data.url);
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
        getUrl();
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
                  src={image}
                  roundedCircle
                  width={100}
                  height={100}
                  className="d-block mx-auto mb-3"
                />

                <h5>ABC COMPANY PVT</h5>
                <p>
                  {" "}
                  discripton Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Nihil sequi cum eligendi fugit minima perspiciatis
                  nesciunt, perferendis placeat.
                </p>
                <p>COMPANY@gmail.com</p>
                <p>9377212331</p>
                <p>Banglore</p>
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
                    src={
                      imagePreview ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6COSFWe7YIhEEOYHOSwVWAw5soUk2VuMptKGuqSOuFM5d6RTb4f7FRAg&s"
                    }
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
                  />
                  <label htmlFor="floatingName">Name</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingAbout"
                    type="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingEmail">About </label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingEmail"
                    type="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingEmail">Email Address</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingPhn"
                    type="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingEmail">Phone Number</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingLoc"
                    type="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingEmail">Location </label>
                </Form.Floating>

                <Form.Floating>
                  <Form.Control
                    id="floatingPassword"
                    type="password"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </Form.Floating>

                <Button variant="success" className="w-100 mt-3">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CompProfile;
