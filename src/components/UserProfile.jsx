import React, { useState } from "react";
import { Button, Card, Form, Image, Nav } from "react-bootstrap";
import UserInfo from "./UserInfo";
import UserQuali from "./UserQuali";
import Recent from "./Recent";
import UserSkills from "./UserSkills";

const UserProfile = () => {
  var [navTab, SetNavTab] = useState(0);
  return (
    <div style={{ minHeight: "100vh", padding: "100px" }}>
      <div className="container ">
        <Card className="d-flex align-items-center shadow rounded">
          {/* Navigation Tabs */}
          <Nav
            style={{ backgroundColor: "rgb(207, 237, 227)" }}
            className="w-75 mt-3 rounded"
            justify
            variant="tabs"
            defaultActiveKey="link-1"
          >
            <Nav.Item>
              <Nav.Link onClick={() => SetNavTab(0)} eventKey="link-1">
                User Details
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => SetNavTab(1)} eventKey="link-2">
                Qualification
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => SetNavTab(2)} eventKey="link-3">
                Skills
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {/* User Details */}

          {/* qualification */}
          {/* <UserQuali/> */}
          {/* skills */}
          {/* <UserSkills/> */}

          {navTab === 0 && <UserInfo />}
          {navTab === 1 && <UserQuali />}
          {navTab === 2 && <UserSkills />}
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
