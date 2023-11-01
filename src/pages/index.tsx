import React, { useState } from "react";
import Nav from "@/components/shared/nav/Nav";
import Notification from "@/components/modals/notifical-modal/Notification";
import SideNav from "@/components/sideNav/SideNav";
import ProductCard from "@/components/products-card/ProductCard";
import ProductImg from "@/assets/images/product-image.png";

const index = () => {
  return (
    <div className="bg-[white] h-screen">
      <Notification />

      <div className="bg-[#98A2B3] md:flex">
        <SideNav />
        <div className="w-full">
          <div className="lg:ml-32 min-[1440px]:ml-64">
            <Nav />
          </div>

          <div className="lg:ml-32 min-[1440px]:ml-64 grid grid-cols-2 py-14 px-9 items-center gap-4">
            <ProductCard
              productimage={ProductImg}
              productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
              productprice="N12,000"
              className=""
            />

            <ProductCard
              productimage={ProductImg}
              productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
              productprice="N12,000"
              className=""
            />

            <ProductCard
              productimage={ProductImg}
              productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
              productprice="N12,000"
              className=""
            />

            <ProductCard
              productimage={ProductImg}
              productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
              productprice="N12,000"
              className=""
            />
            <ProductCard
              productimage={ProductImg}
              productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
              productprice="N12,000"
              className=""
            />
            <ProductCard
              productimage={ProductImg}
              productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
              productprice="N12,000"
              className=""
            />
            <ProductCard
              productimage={ProductImg}
              productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
              productprice="N12,000"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
