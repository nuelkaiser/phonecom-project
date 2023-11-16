import React from "react";
import styles from "./WalletBalance.module.scss";
import { H3, P, P2 } from "../shared/headings/Heading";
import Wallet from "@/assets/icons/wallet-2.svg";
import Image from "next/image";
import Eyes from "@/assets/images/eyes-off.png";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import BalanceBg1 from "@/assets/icons/balance-half-1.svg";
import BalanceBg2 from "@/assets/icons/balance-half-2.svg";
const WalletBalance = () => {
  return (
    <div
      className={`${styles.walletBalanceContainer}`}
    >
      <div className="flex items-center justify-between mb-6">
        <P>Wallet Ballance</P>
        <Wallet />
      </div>

      <div className="flex items-center gap-4 mb-8">
        <H3>
          N50,000.<span className="font-medium">00</span>
        </H3>

        <Image src={Eyes} alt="eyes" className="cursor-pointer"/>
      </div>

      <div className="flex items-center gap-4">
        <button className="border border-[#1A1816] rounded-md flex items-center justify-center py-2 px-4 gap-1 cursor-pointer z-10">
          <P2>Pay Bills</P2>
          <ArrowRight />
        </button>

        <button className="bg-[#E3F8EF] rounded-md flex items-center justify-center py-2 px-4 gap-1 cursor-pointer z-10">
          <P2>Add Money</P2>
          <ArrowRight />
        </button>
      </div>

      <div>
        <BalanceBg1 className="absolute top-3 -left-4 scale-110" />
        <BalanceBg1 className="absolute top-3 right-28 min-[1440px]:-right-4 scale-110 translate-x-1/2" />
      </div>
    </div>
  );
};

export default WalletBalance;
