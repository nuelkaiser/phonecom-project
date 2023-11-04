import React, { useState } from "react";
import Nav from "@/components/shared/nav/Nav";
import SideNav from "@/components/sideNav/SideNav";


const index = () => {
  const [openNotificationModal, setOpenNotificationModal] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);

  const handleNotificationModal = () => {
    setOpenNotificationModal(!openNotificationModal);
  };

  const handleCartModal = () => {
    setOpenCartModal(!openCartModal);
  };


  return (
    <div className=" h-full bg-[#606060] md:flex">

      <SideNav cart={openCartModal}/>


      <Nav notify={openNotificationModal}
        cart={openCartModal}
        handleNotify={handleNotificationModal}
        handleCart={handleCartModal}
      />
    </div>
  );
};

export default index;
