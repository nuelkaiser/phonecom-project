import React from "react";
import style from "./Support.module.scss";
import SupportImg from "@/assets/images/support.png";
import Image from "next/image";
import { P } from "../shared/headings/Heading";
import Call from "@/assets/icons/call.svg";
import SupportProps from "./Support.props";

const Support: React.FC<SupportProps> = ({ issues, number, ...rest }) => {
  return (
    <div className="bg-[#E3F8EF] rounded-md py-5 px-6 flex items-center gap-4">
      <Image src={SupportImg} alt="support-img" className="h-full" />

      <div className="md:flex justify-between w-full">
        <p className="md:w-96 lg:w-full lg:max-w-md font-sans text-xs md:text-base">
          For Payment <span className="font-bold">{issues}</span>, contact our
          customer support at {number}
        </p>

        <div className="flex items-center gap-2 cursor-pointer mt-3 md:mt-0">
          <Call />
          <P className="text-[#3C5B4B] font-extrabold">Place a Call</P>
        </div>
      </div>
    </div>
  );
};

export default Support;
