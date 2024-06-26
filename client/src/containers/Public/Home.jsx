import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
function Home() {
  return (
    <div className="w-full flex flex-col items-center h-full">
      <Header />
      <Navigation />
      <div className="w-full flex flex-col items-center justify-start mt-3">
        <Outlet /> {/*dai dien cho cac route con*/}
      </div>
    </div>
  );
}

export default Home;
