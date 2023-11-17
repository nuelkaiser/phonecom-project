import React, { useState } from "react";
import Nav from "@/components/shared/nav/Nav";
import SideNav from "@/components/sideNav/SideNav";
import EmojiFace from "@/assets/images/notification-image.png";
import Image from "next/image";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import "swiper/css";
import Support from "@/components/support-issues/Support";

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
    <div className="bg-[white] h-screen">
      <div className="bg-white lg:bg-[#F5F4F7] md:flex">
        <SideNav cart={openCartModal} />
        <div className="w-full">
          <div className="lg:ml-28 min-[1440px]:ml-60">
            <Nav
              notify={openNotificationModal}
              cart={openCartModal}
              handleNotify={handleNotificationModal}
              handleCart={handleCartModal}
            />
          </div>

          <div className="lg:ml-32 min-[1440px]:ml-64 pt-14 pb-28 px-5">
            <div className="flex items-center gap-3 pb-7">
              <ChevronLeft className="lg:hidden" />
              <Image src={EmojiFace} alt="emoji face" />
              <span className="text-3xl">
                <span className="hidden lg:block font-bold">Support</span>
                <span className="lg:hidden font-bold">Help</span>
              </span>
            </div>

            <div className="flex flex-col gap-6 lg:py-10 lg:px-16 bg-white">
              <Support issues="general issues" number="08066566780" />
              <Support issues="battery issues" number="09066566780" />
              <Support issues="charger issues" number="07066566780" />
              <Support issues="airpod issues" number="05066566780" />
              <Support issues="headset issues" number="06063546610" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
