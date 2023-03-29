import React from "react";
import { Route, Routes } from "react-router-dom";
// import SidebarCompany from "../../components/company/jsx/SidebarCompany";
import SidebarDoctor from "../../components/jsx/Doctor/SidebarDoctor";
import DashboardDoctor from "./UserDoctor/DashboardDoctor";
// import ListingsCompany from "./UserCompany/ListingsCompany";
// import ProfileCompany from "./UserCompany/ProfileCompany";
// import AddInternshipCompany from "./UserCompany/AddInternshipCompany";
// import ApplicantsCompany from "./UserCompany/ApplicantsCompany";

const InfoDoctor = ({theme, setTheme}) => {

  return (
    <SidebarDoctor  theme={theme} setTheme={setTheme}>
        <Routes>
            <Route exact path="/:id/dashboard" element={<DashboardDoctor />}  />
            {/* <Route exact path="/listings" element={<ListingsCompany />} />
            <Route exact path="/profile" element={<ProfileCompany />} />
            <Route exact path="/addinternship" element={<AddInternshipCompany />} />
            <Route exact path="/applicants" element={<ApplicantsCompany />} /> */}
        </Routes>
    </SidebarDoctor>
  )
}

export default InfoDoctor
