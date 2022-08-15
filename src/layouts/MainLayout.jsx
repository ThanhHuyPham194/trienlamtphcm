import React,{useEffect} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./MainLayout.scss";

export default function MainLayout() {

  return (
    <>
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      
      <Footer />
    </>
  );
}
