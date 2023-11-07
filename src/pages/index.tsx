import React, { useState } from "react";
import Nav from "@/components/shared/nav/Nav";
import SideNav from "@/components/sideNav/SideNav";
import CategoryCard from "@/components/category-card/CategoryCard";
import Watch from "@/assets/images/product-watch.png";

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
      <SideNav cart={openCartModal} />

      <div className=" w-full">
        <Nav
          notify={openNotificationModal}
          cart={openCartModal}
          handleNotify={handleNotificationModal}
          handleCart={handleCartModal}
        />

        <div className=" hidden lg:flex gap-5 px-8">
          <CategoryCard productName="iWatches" productImg={Watch} />
          <CategoryCard productName="Chargers" productImg={Watch} />
          <CategoryCard productName="Screen Guards" productImg={Watch} />
          <CategoryCard productName="iWatches" productImg={Watch} />
        </div>
      </div>
    </div>
  );
};

export default index;
