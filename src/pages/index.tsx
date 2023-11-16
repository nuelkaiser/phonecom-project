import React, { useState } from "react";
import Nav from "@/components/shared/nav/Nav";
import SideNav from "@/components/sideNav/SideNav";
import ProductCard from "@/components/products-card/ProductCard";
import ProductImg from "@/assets/images/product-image.png";
import EmojiFace from "@/assets/images/notification-image.png";
import Watch from "@/assets/images/product-watch.png";
import Image from "next/image";
import { H6, P } from "@/components/shared/headings/Heading";
import ReferalCard from "@/components/referral-card/ReferralCard";
import WalletBalance from "@/components/wallet-balance/WalletBalance";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import ChevronRight from "@/assets/icons/chevron-right.svg";
import CategoryCard from "@/components/category-card/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import Card from "@/assets/icons/card.svg";
import { Navigation } from "swiper/modules";
import "swiper/css";
import SearchBar from "@/components/shared/inputs/searchbar/SearchBar";

const index = () => {
  const [openNotificationModal, setOpenNotificationModal] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);

  const handleNotificationModal = () => {
    setOpenNotificationModal(!openNotificationModal);
  };

  const handleCartModal = () => {
    setOpenCartModal(!openCartModal);
  };

  SwiperCore.use([Navigation]);

  return (
    <div className="bg-[white] h-screen">
      <div className="bg-[#F5F4F7] md:flex">
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

          <div className="lg:ml-32 min-[1440px]:ml-64 md:pt-14 pb-28 md:px-9">
            <div className="hidden md:flex items-center gap-3 pb-7">
              <Image src={EmojiFace} alt="emoji face" />
              <span className="text-3xl">
                <span className="font-bold">Boss</span> welcome!
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 min-[1440px]:gap-5 md:mb-5">
              <ReferalCard />

              <WalletBalance />
            </div>

            <div className="md:hidden bg-white py-4 px-7 border-t border-t-[#E4E4E4]">
              <SearchBar
                placeholder="Search for products,brands and categories"
                className="mb-5"
              />

              <Swiper
                spaceBetween={4}
                slidesPerView={4.5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="flex flex-col items-center gap-1">
                    <Card />
                    <p className="text-[#2C2B2A] text-xs font-sans font-normal">
                      Phones
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col items-center gap-1">
                    <Card />
                    <p className="text-[#2C2B2A] text-xs font-sans font-normal">
                      Charger
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col items-center gap-1">
                    <Card />
                    <p className="text-[#2C2B2A] text-xs font-sans font-normal">
                      Power Banks
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col items-center gap-1">
                    <Card />
                    <p className="text-[#2C2B2A] text-xs font-sans font-normal">
                      Computers
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col items-center gap-1">
                    <Card />
                    <p className="text-[#2C2B2A] text-xs font-sans font-normal">
                      Ipads
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col items-center gap-1">
                    <Card />
                    <p className="text-[#2C2B2A] text-xs font-sans font-normal">
                      Iphones
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div>
              <div className="hidden md:flex items-center justify-between mb-6">
                <H6>Product Categories</H6>

                <div className="flex gap-5 custom-swiper-navigation">
                  <div className="swiper-button-prev flex justify-center py-2 px-3 rounded-md bg-white border border-[green] cursor-pointer">
                    <ChevronLeft className="swiper-button-prev" />
                  </div>
                  <div className="swiper-button-next flex justify-center py-2 px-3 rounded-md bg-white border border-[green] cursor-pointer">
                    <ChevronRight className="" />
                  </div>
                </div>
              </div>

              <div className=" hidden md:flex gap-5 mb-8">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={4}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  breakpoints={{
                    1024: {
                      slidesPerView: 3.1,
                    },
                    1440: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  <SwiperSlide>
                    <CategoryCard productName="iWatches" productImg={Watch} />
                  </SwiperSlide>

                  <SwiperSlide>
                    <CategoryCard productName="Chargers" productImg={Watch} />
                  </SwiperSlide>

                  <SwiperSlide>
                    <CategoryCard productName="iWatches" productImg={Watch} />
                  </SwiperSlide>

                  <SwiperSlide>
                    <CategoryCard productName="AirPods" productImg={Watch} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CategoryCard productName="Chargers" productImg={Watch} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CategoryCard productName="iWatches" productImg={Watch} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div>
              <div className="hidden md:flex items-center justify-between mb-6">
                <H6>New Arrivals 🔥</H6>
                <P className="underline cursor-pointer">See all</P>
              </div>

              <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 items-center gap-4">
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

              <div className="md:hidden ml-8">
                <div className="text-left mt-8 mb-6">
                  <H6>New Arrivals 🔥</H6>
                </div>

                <div className="">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={2.2}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <ProductCard
                        productimage={ProductImg}
                        productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
                        productprice="N12,000"
                        className=""
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <ProductCard
                        productimage={ProductImg}
                        productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
                        productprice="N12,000"
                        className=""
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <ProductCard
                        productimage={ProductImg}
                        productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
                        productprice="N12,000"
                        className=""
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <ProductCard
                        productimage={ProductImg}
                        productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
                        productprice="N12,000"
                        className=""
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <ProductCard
                        productimage={ProductImg}
                        productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
                        productprice="N12,000"
                        className=""
                      />
                    </SwiperSlide>
                  </Swiper>

                  <Swiper
                    spaceBetween={10}
                    slidesPerView={2.2}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="mt-5"
                  >
                    <SwiperSlide>
                      <ProductCard
                        productimage={ProductImg}
                        productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
                        productprice="N12,000"
                        className=""
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <ProductCard
                        productimage={ProductImg}
                        productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
                        productprice="N12,000"
                        className=""
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <ProductCard
                        productimage={ProductImg}
                        productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
                        productprice="N12,000"
                        className=""
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <ProductCard
                        productimage={ProductImg}
                        productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
                        productprice="N12,000"
                        className=""
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <ProductCard
                        productimage={ProductImg}
                        productname="Bro Toumi Toumi CMCC PAD1 10.1 ...."
                        productprice="N12,000"
                        className=""
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
