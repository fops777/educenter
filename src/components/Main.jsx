import React from "react";
import "../App.css";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Payment from "./Payment/Payment";
import { Route, Routes } from "react-router-dom";
import Staff from "./Staff/Staff";
import Students from "./Students/Students";
import Settings from "./Settings/Settings";
import Home from "./Home/Home";

const Main = () => {
  return (
    <div className="all_page">
      <Header />
      <div style={{ display: "flex"}}>
        <Navbar />
        <div className="main_content" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/contacts" element={<Staff />} />
            <Route path="/students" element={<Students />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
