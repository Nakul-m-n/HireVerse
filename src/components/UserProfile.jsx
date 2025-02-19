import React, { useState } from 'react';
import { Button, Card, Form, Image, Nav } from 'react-bootstrap';
import UserInfo from './UserInfo';
import UserQuali from './UserQuali';
import Recent from './Recent';
import UserSkills from './UserSkills';

const UserProfile = () => {
  return (
    <div style={{ minHeight: '100vh', padding:'100px' }}>
      <div className="container ">
        <Card className="d-flex align-items-center shadow rounded">
          {/* Navigation Tabs */}
          <Nav
            style={{ backgroundColor: 'rgb(207, 237, 227)' }}
            className="w-75 mt-3 rounded"
            justify
            variant="tabs"
            defaultActiveKey="link-1"
          > 
            <Nav.Item >
              <Nav.Link  eventKey="link-1">User Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Qualification</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Skills</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* User Details */}
          <UserInfo/>
          {/* qualification */}
          {/* <UserQuali/> */}
          {/* skills */}
          {/* <UserSkills/> */}
          
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
