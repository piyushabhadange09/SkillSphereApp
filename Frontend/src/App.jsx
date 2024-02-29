import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Discover from "./Pages/Discover/Discover";
import Login from "./Pages/Login/Login";
import Header from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import WhySkillSwap from "./Pages/WhySkillSwap/WhySkillSwap";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";

const App = () => {
  return (
    <div className="vh-100">
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/why_skillswap" element={<WhySkillSwap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
