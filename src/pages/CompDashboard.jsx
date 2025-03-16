import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CompProfile from "../components/company/CompProfile";
import JobVacancy from "../components/company/JobVacancy";
import JobVacDetials from "../components/company/JobVacDetials";
import JobRequest from "../components/company/JobRequest";
import SortedJobReq from "../components/company/SortedJobReq";
import { useNavigate } from "react-router-dom";

const CompDashboard = () => {
  var [tab, setTab] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Company Dashboard";
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      var role = localStorage.getItem("type");
      if (role !== "company") {
        navigate("/login");
      }
    }
  }, []);
  return (
    <>
      <Header insideCompDash={true} setTab={setTab} />

      {tab === 0 && <CompProfile />}
      {tab === 1 && <JobVacancy />}
      {tab === 2 && <JobVacDetials />}
      {tab === 3 && <JobRequest/>}
      {tab === 4 && <SortedJobReq/>}
      {/* <CompProfile/> */}

      {/* <JobVacancy/> */}
      {/* <JobVacDetials /> */}
    </>
  );
};

export default CompDashboard;
