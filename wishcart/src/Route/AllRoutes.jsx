import {Routes,Route} from "react-router-dom"
import LandingPage from "../components/LandingPage/LandingPage";
import ProductDetails from "../components/ProductDetails"
function AllRoutes() {
  return <div>{/* Add Home, Login and dashboard  */}
  <Routes>
    <Route path="/" element={<LandingPage/>}/> 
    <Route path="/product/:id" element={<ProductDetails/>} />
  </Routes>
  
  </div>;
}

export default AllRoutes;
