import React, { useState } from "react";
import Header from "../components/Header";
import CompProfile from "../components/company/CompProfile";
import JobVacancy from "../components/company/JobVacancy";
import JobVacDetials from "../components/company/JobVacDetials";

const CompDashboard = () => {
  var [tab, setTab] = useState(0);
  return (
    <>
      <Header insideCompDash={true} setTab={setTab} />

      {tab === 0 && <CompProfile />}
      {tab === 1 && <JobVacancy />}
      {tab === 2 && <JobVacDetials />}
      {tab === 3 && <h1>Job Request</h1>}
      {tab === 4 && <h1>Sorted Request</h1>}
      {/* <CompProfile/> */}

      {/* <JobVacancy/> */}
      {/* <JobVacDetials /> */}
    </>
  );
};

export default CompDashboard;
