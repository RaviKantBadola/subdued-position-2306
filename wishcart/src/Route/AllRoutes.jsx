import {Routes,Route} from "react-router-dom"
import LandingPage from "../components/LandingPage/LandingPage";
import ProductDetails from "../components/ProductDetails"
import CartPage from "../components/CartPage";
import DeliveryPage from "../components/DeliveryPage";
import Signup from "./Signup";
import LoginDialog from "../components/LandingPage/LoginDialog";
function AllRoutes() {
  return <div>{/* Add Home, Login and dashboard  */}
  <Routes>
    <Route path="/" element={<LandingPage/>}/> 
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/login" element={<LoginDialog/>} />
    <Route path="/Products/:item_id" element={<ProductDetails/>} />
    
    <Route path='/cart' element={<CartPage/>}/>
     <Route path="/delivery" element={<DeliveryPage/>}/>
  </Routes>
  
  </div>;
}

export default AllRoutes;
