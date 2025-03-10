import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Navbar,
  Nav,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Header from "../components/Header";
import Dashbord from "../components/admin/Dashbord";
import ManageUser from "../components/admin/ManageUser";
import ManageCompany from "../components/admin/ManageCompany";
import ManageJobs from "../components/admin/ManageJobs";

const AdminDashboard = () => {

  
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <div
        style={{ marginLeft: "-11px", paddingTop: "48px" }}
        className="container"
      >
        <Row className="justify-content-start h-100">
          {/* Sidebar */}
          <Col
            lg={3}
            sm={4}
            xs={12}
            className="border p-0 sidebar d-flex flex-column"
          >
            <ListGroup
              style={{ borderRadius: "0px" }}
              className="h-100 w-100 flex-grow-1"
            >
              {[
                "Dashboard",
                "Manage User",
                "Manage Company",
                "Manage Jobs",
              ].map((item) => (
                <ListGroupItem
                  key={item}
                  style={{ cursor: "pointer" }}
                  active={activeItem === item}
                  onClick={() => setActiveItem(item)}
                  className="w-100 text-center"
                >
                  {item}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Main Content */}
          <Col   lg={9} sm={8} xs={12} className="main-content">
          
            { activeItem=="Dashboard" &&  <Dashbord/> }
            { activeItem=="Manage User" &&  <ManageUser/> }
            {activeItem=="Manage Company"  && <ManageCompany/>}
            {activeItem=="Manage Jobs"  && <ManageJobs/>}
          </Col>

          {/* Custom CSS */}
          <style jsx>{`
            .sidebar {
              height: 100vh; /* Stretch to full height */
            }
            .main-content {
              min-height: 100vh; /* Ensure the main content also stretches */
            }

            @media (max-width: 576px) {
              .sidebar {
                width: 100%; /* Sidebar takes full width on mobile */
                height: auto; /* Allow height to adjust dynamically */
              }
              .main-content {
                width: 100%; /* Content takes full width on mobile */
                height: auto;
              }
            }
          `}</style>
        </Row>
      </div>
    </div>
  );
};

export default AdminDashboard;
