import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Explore from "../pages/Explore";
import AboutUs from "../pages/AboutUs";

import { Routes, Route } from "react-router-dom";



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default Routers;
