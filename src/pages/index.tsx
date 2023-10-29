import React, { useState } from "react";
import Nav from "@/components/shared/nav/Nav";
import Notification from "@/components/modals/notifical-modal/Notification";
import SideNav from "@/components/sideNav/SideNav";

const index = () => {
  return (
    <div className="bg-[white] h-screen">
      <Notification />
      <div className="bg-[#606060] md:flex">
        <SideNav />
        <Nav />
      </div>
    </div>
  );
};

export default index;
