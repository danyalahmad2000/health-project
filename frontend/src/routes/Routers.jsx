import Insights from "../pages/Insights";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/about" element={<Home />} />
    </Routes>
  );
};

export default Routers;
