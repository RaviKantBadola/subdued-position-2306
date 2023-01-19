import {Routes,Route} from "react-router-dom"
import LandingPage from "../components/LandingPage/LandingPage";
function AllRoutes() {
  return <div>{/* Add Home, Login and dashboard  */}
  <Routes>
    <Route path="/" element={<LandingPage/>}/> 
  </Routes>
  
  </div>;
}

export default AllRoutes;
