import React, { useState } from "react";
import Nav from "@/components/shared/nav/Nav";
import SideNav from "@/components/sideNav/SideNav";

const index = () => {


  return (
    <div className="bg-[#606060] md:flex">
      <SideNav />
      <Nav />
    </div>
  )
};

export default index;
