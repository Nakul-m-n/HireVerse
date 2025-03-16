import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import api from "../../API";
import { toast } from "react-toastify";

const Dashbord = () => {
  const [data, setData] = useState({
    userCount: 0,
    companyCount: 0,
    jobCount: 0,
  });

  useEffect(() => {
    async function callAPI() {
      await api
        .get("/admin/totalCounts")
        .then((res) => {
          console.log(res.data);
          console.log("dskjjjjjjjjjjj")
          setData(res.data);
         
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
    callAPI();
  }, []);
  return (
    <div className="container">
      <h1 className="fw-bolder mt-5">DashBoard</h1>
      <div className="d-flex justify-content-around align-items-center">
        <Card
          bg={"primary"}
          text={"white"}
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title>User </Card.Title>
            <Card.Text>
              Total User : <span>{data?.userCount}</span>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          bg={"primary"}
          text={"white"}
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title> Company </Card.Title>
            <Card.Text>
              Total Commpany's: <span>{data?.companyCount}</span>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          bg={"primary"}
          text={"white"}
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title> job's </Card.Title>
            <Card.Text>
              Total Jobs: <span>{data?.jobCount}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Dashbord;
