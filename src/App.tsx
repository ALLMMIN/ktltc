/* eslint-disable react-refresh/only-export-components */

import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Index from "./pages/Index";
import ServiceDepartment from "./pages/service-department/ServiceDepartment";
import Department from "./pages/department/Department";
import Contact from "./pages/contact/Contact";
import ExecutiveDirectory from "./pages/about/ExecutiveDirectory";
import EducationalInstitutionInformation from "./pages/about/EducationalInstitutionInformation";
import PersonnelInformation from "./pages/about/ข้อมูลบุคลากร/PersonnelInformation";
import PlansAndCooperationTitle from "./pages/service-department/PlansAndCooperation";
import GovernmentActionPlantitle from "./pages/about/GovernmentActionPlan";
import StrategicPlantitle from "./pages/about/StrategicPlan";
import IndexService from "./pages/service/Index";

export default function () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/About" element={<About />} />
        <Route path="/ServiceDepartment" element={<ServiceDepartment />} />
        <Route path="/Department" element={<Department />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ExecutiveDirectory" element={<ExecutiveDirectory />} />
        <Route path="/StrategicPlantitle" element={<StrategicPlantitle />} />
        <Route path="/IndexService" element={<IndexService />} />
        <Route
          path="/GovernmentActionPlantitle"
          element={<GovernmentActionPlantitle />}
        />
        <Route
          path="/PlansAndCooperationTitle"
          element={<PlansAndCooperationTitle />}
        />
        <Route
          path="/PersonnelInformation"
          element={<PersonnelInformation />}
        />
        <Route
          path="/EducationalInstitutionInformation"
          element={<EducationalInstitutionInformation />}
        />
      </Routes>
    </>
  );
}
