
import Header from "../components/Header";
import Jobs from "../components/Jobs";

import UserProfile from "../components/UserProfile";


const UserDashboard = () => {
  
  return (
    <>
    {/* header */}
      <Header insideDashboard={true} />

      {/* jobs */}
      <Jobs/>

{/* userprofile */}
      {/* <UserProfile /> */}

      {/* recent */}
                {/* <Recent/> */}

      
    </>
  );
};

export default UserDashboard;
