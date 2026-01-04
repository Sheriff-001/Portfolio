import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound.jsx";
import Home from "./Pages/Home";
import MoreProject from "./Pages/MoreProject"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Analytics } from "@vercel/analytics/react";

 function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<NotFound />} />
      <Route path="/MoreProject" element={<MoreProject />} />
    </Routes>
    <Footer/>
    <Analytics />
    </>
  );
}

export default App;


