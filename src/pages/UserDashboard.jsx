import React, { useState } from "react";
import Header from "../components/Header";
import { Button, Card, Modal } from "react-bootstrap";
import tcs from "../assets/images/tcs.png";
import UserProfile from "../components/UserProfile";
import Jobs from "../components/Jobs";
import Recent from "../components/Recent";

const UserDashboard = () => {
  
  return (
    <>
    {/* header */}
      <Header insideDashboard={true} />

      {/* jobs */}
      {/* <Jobs/> */}

{/* userprofile */}
      <UserProfile />

      {/* recent */}
                {/* <Recent/> */}

      
    </>
  );
};

export default UserDashboard;
