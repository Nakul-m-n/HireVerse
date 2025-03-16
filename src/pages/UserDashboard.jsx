import { useEffect, useState } from "react";
import Header from "../components/Header";
import Jobs from "../components/Jobs";

import UserProfile from "../components/UserProfile";
import Recent from "../components/Recent";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  var [tab, setTab] = useState(2);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "User Dashboard";
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      var role = localStorage.getItem("type");
      if (role !== "user") {
        navigate("/login");
      }
    }
  }, []);

  return (
    <>
      {/* header */}
      <Header insideDashboard={true} setTab={setTab} />

      {/* side bar */}
      {tab === 0 && <UserProfile />}
      {tab === 1 && <Recent />}
      {tab === 2 && <Jobs />}


    </>
  );
};

export default UserDashboard;
