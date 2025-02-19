import React from 'react'
import Header from '../components/Header'
import CompProfile from '../components/company/CompProfile'
import JobVacancy from '../components/company/JobVacancy'
import JobVacDetials from '../components/company/JobVacDetials'

const CompDashboard = () => {
  return (
   <>
        
        <Header insideCompDash={true} />
       

        {/* <CompProfile/> */}

        {/* <JobVacancy/> */}
        <JobVacDetials/>
   </>
   
  )
}

export default CompDashboard