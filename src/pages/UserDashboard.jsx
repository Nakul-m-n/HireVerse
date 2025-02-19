import { useState } from "react";
import Header from "../components/Header";
import Jobs from "../components/Jobs";

import UserProfile from "../components/UserProfile";
import Recent from "../components/Recent";

const UserDashboard = () => {
  var [tab, setTab] = useState(0);
  

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
