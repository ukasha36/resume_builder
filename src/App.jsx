import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import ResumeBuilder from "./Pages/ResumeBuilder";
import ShippingLabel from "./Pages/ShippingLabel";

const App = () => {
  const toastConfig = {
    autoClose: 3000, // 1 second in milliseconds
  };

  // const [resumeData, setResumeData] = useState(false);
  const userSelectedTheme = localStorage.getItem("isDarkTheme");
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const handleTheme = () => {
    if (userSelectedTheme == "false") {
      setIsDarkTheme(false);
    }
  };

  // const haveData = () => {
  //   const resumeDataLocal = localStorage.getItem("resumeData");
  //   console.log(resumeDataLocal);
  //   if (resumeDataLocal) {
  //     console.log("done");
  //     setResumeData(true);
  //   }
  // };

  useEffect(() => {
    handleTheme();
    // haveData();
  }, []);

  return (
    <main
      className={`min-h-screen w-full overflow-x-hidden ${
        isDarkTheme ? "dark" : "light"
      }`}
    >
      <BrowserRouter>
        <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<ResumeBuilder />} />
          <Route path="/resume-themes" element={<ShippingLabel />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer {...toastConfig} />
    </main>
  );
};

export default App;
