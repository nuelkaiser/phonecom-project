import React from "react";
import styles from "./ReferralCard.module.scss";
import ReferralCardProps from "./ReferralCard.props";
import Image from "next/image";
import Coins from "@/assets/images/coins.png";
import { H4, P, P2 } from "../shared/headings/Heading";
import Button from "../shared/buttons/Button";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import Bg1 from "@/assets/icons/referral-bg-1.svg";
import Bg2 from "@/assets/icons/referral-bg-2.svg";

const ReferalCard: React.FC<ReferralCardProps> = ({}) => {
  return (
    <div className={`${styles.referralCardContainer} h-60 py-4 px-6`}>
      <div className="flex flex-col gap-9">
        <div>
          <H4 className="mb-1 text-white">Make a Referral and Earn</H4>
          <P2 className="text-white">
            Get up to 10TB of storage for a limited time
          </P2>
        </div>

        <div>
          <Button
            size="lg"
            color="neutral"
            className="bg-white text-black flex gap-1 z-10"
          >
            <P>Make A Referral</P>
            <ArrowRight />
          </Button>
        </div>
      </div>

      <Image src={Coins} alt="coins" className="hidden min-[1440px]:block"/>

      <div className="absolute left-0 bottom-3">
        <Bg1 />
      </div>

      <div className=" absolute right-0 top-10">
        <Bg2 />
      </div>
    </div>
  );
};

export default ReferalCard;
